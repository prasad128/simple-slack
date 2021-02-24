import produce from "immer";
import {
  TEXT_VALUE,
  ADD_GENERAL,
  ADD_HELP,
  ADD_REACT,
  ADD_REDUX,
  ADD_ROUTER,
  ADD_GATSBY
} from "./slackMessageTypes";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const initialState = {
  channelInfo: {
    general: [
      {
        id: uuidv4(),
        userName: "Amay",
        text: "A message from Amay",
        time: moment().format("lll")
      },
      {
        id: uuidv4(),
        userName: "Rahul",
        text: "A message from Rahul",
        time: moment().format("lll")
      }
    ],
    help: [
      {
        id: uuidv4(),
        userName: "Amay",
        text: "A message from Amay",
        time: moment().format("lll")
      },
      {
        id: uuidv4(),
        userName: "Rahul",
        text: "A message from Rahul",
        time: moment().format("lll")
      }
    ],
    react: [],
    redux: [],
    router: [],
    gatsby: []
  },
  text: ""
};

const slackMessageReducer = produce((draft, action) => {
  console.log("Text -", draft.text);
  switch (action.type) {
    case TEXT_VALUE:
      return void (draft.text = action.payload);
    case ADD_GENERAL:
      return void draft.channelInfo.general.push(action.payload);
    case ADD_HELP:
      return void draft.channelInfo.help.push(action.payload);
    case ADD_REACT:
      return void draft.channelInfo.react.push(action.payload);
    case ADD_REDUX:
      return void draft.channelInfo.redux.push(action.payload);
    case ADD_ROUTER:
      return void draft.channelInfo.router.push(action.payload);
    case ADD_GATSBY:
      return void draft.channelInfo.gatsby.push(action.payload);
    default:
  }
}, initialState);

export default slackMessageReducer;
