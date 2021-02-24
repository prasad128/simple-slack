import { TEXT_VALUE } from "./slackMessageTypes";
import store from "../store";
import {
  ADD_GENERAL,
  ADD_HELP,
  ADD_REACT,
  ADD_REDUX,
  ADD_ROUTER,
  ADD_GATSBY
} from "./slackMessageTypes";
// import { initialState } from "../slack/slackReducer";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const handleText = (e) => {
  return {
    type: TEXT_VALUE,
    payload: e.target.value
  };
};

export const handleMessage = (e) => {
  e.preventDefault();
  const state = store.getState();
  function scrollWin() {
    window.scrollBy({ top: 5000, behavior: "smooth" });
  }
  scrollWin();
  const { selectedChannel, selectedUser } = state.nav;
  console.log(state.nav);
  console.log(state.message);
  const { text } = state.message;
  const currentChannel = (channel) => {
    switch (channel) {
      case "help":
        return ADD_HELP;
      case "react":
        return ADD_REACT;
      case "redux":
        return ADD_REDUX;
      case "router":
        return ADD_ROUTER;
      case "gatsby":
        return ADD_GATSBY;
      default:
        return ADD_GENERAL;
    }
  };
  const typeName = currentChannel(selectedChannel);
  console.log("Selected Channel:", selectedChannel);
  console.log("Selected User:", selectedUser);
  e.target.reset();
  // e.target.focus();
  // // e.preventDefault();
  return {
    type: typeName,
    payload: {
      id: uuidv4(),
      userName: selectedUser,
      text: text,
      time: moment().format("lll")
    }
  };
};
