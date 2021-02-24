import { combineReducers } from "redux";
import slackReducer from "./slack/slackReducer";
import slackMessageReducer from "./slackMessage/slackMessageReducer";

const rootReducer = combineReducers({
  nav: slackReducer,
  message: slackMessageReducer
});

export default rootReducer;
