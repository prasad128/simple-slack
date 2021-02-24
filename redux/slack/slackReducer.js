import produce from "immer";
import {
  CLOSE_CHANNELS,
  CLOSE_PEOPLE,
  USER_NAME,
  CHANNEL_NAME,
  TOGGLE_CHANNEL,
  TOGGLE_PEOPLE
} from "./slackActionTypes";

export const initialState = {
  selectedChannel: "",
  selectedUser: "",
  isOpen: false,
  isOpen2: false
};

const slackReducer = produce((draft, action) => {
  switch (action.type) {
    case TOGGLE_CHANNEL:
      return void (draft.isOpen = !draft.isOpen);
    case TOGGLE_PEOPLE:
      return void (draft.isOpen2 = !draft.isOpen2);
    case CLOSE_CHANNELS:
      return void (draft.isOpen = false);
    case CLOSE_PEOPLE:
      return void (draft.isOpen2 = false);
    case USER_NAME:
      return void (
        (draft.selectedUser = action.payload) && (draft.isOpen2 = false)
      );
    case CHANNEL_NAME:
      return void (
        (draft.selectedChannel = action.payload) && (draft.isOpen = false)
      );

    default:
  }
}, initialState);

console.log(initialState.selectedChannel);
// console.log(initialState.channelInfo.general);
export default slackReducer;
