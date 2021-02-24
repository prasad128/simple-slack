import {
  TOGGLE_CHANNEL,
  TOGGLE_PEOPLE,
  CLOSE_CHANNELS,
  CLOSE_PEOPLE,
  USER_NAME,
  CHANNEL_NAME
} from "./slackActionTypes";
import store from "../store";

export const handleChannels = () => {
  return {
    type: TOGGLE_CHANNEL
  };
};

export const handlePeople = () => {
  closeChannels();
  return {
    type: TOGGLE_PEOPLE
  };
};

export const closeChannels = () => {
  return {
    type: CLOSE_CHANNELS
  };
};

export const closePeople = () => {
  return {
    type: CLOSE_PEOPLE
  };
};

export const handleUser = (name) => {
  // closePeople();
  return {
    type: USER_NAME,
    payload: name
  };
};

const state = store.getState();

export const handleChannelName = (channel) => {
  console.log(state);
  // closeChannels();
  return {
    type: CHANNEL_NAME,
    payload: channel
  };
};
