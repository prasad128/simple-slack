import React from "react";
// import { SlackContext } from "../App";
import { connect } from "react-redux";
import {
  handleChannelName,
  handleChannels,
  handlePeople,
  handleUser,
  closePeople,
  closeChannels
} from "../redux/slack/slackActions";

const Navbar = ({
  isOpen,
  isOpen2,
  handleChannels,
  handlePeople,
  handleChannelName,
  handleUser,
  closeChannels,
  closePeople
}) => {
  // const {
  //   handleChannels,
  //   handleUser,
  //   state,
  //   closeChannels,
  //   closePeople,
  //   handlePeople,
  //   handleChannelName

  // } = React.useContext(SlackContext);
  return (
    <div className="px-2 sm:px-4 flex-shrink-0 sticky top-0 w-full text-lg sm:text-xl md:hidden text-white font-semibold bg-blue-800 h-10 sm:h-12 flex justify-between items-center">
      <div className="relative">
        {isOpen ? (
          <button
            onClick={() => closeChannels()}
            className="fixed inset-0 w-full h-full bg-transparent"
          ></button>
        ) : null}
        <button
          className="font-bold z-10 sm:text-lg focus:outline-none hover:text-gray-400 focus:text-white"
          onClick={() => handleChannels()}
        >
          Channels
        </button>

        {isOpen ? (
          <div className="absolute left-0 rounded shadow-xl text-gray-900 py-2 bg-gray-100 w-48">
            <span
              onClick={() => handleChannelName("general")}
              className="block font-normal cursor-pointer px-4 py-1 text-base hover:bg-yellow-500 rounded-l"
            >
              # general
            </span>
            <span
              onClick={() => handleChannelName("help")}
              className="block font-normal cursor-pointer px-4 py-1 text-base hover:bg-yellow-500 rounded-l "
            >
              # help
            </span>
            <span
              onClick={() => handleChannelName("react")}
              className="block font-normal cursor-pointer px-4 py-1 text-base hover:bg-yellow-500 rounded-l "
            >
              # react
            </span>
            <span
              onClick={() => handleChannelName("redux")}
              className="block font-normal cursor-pointer px-4 py-1 text-base hover:bg-yellow-500 rounded-l "
            >
              # redux
            </span>
            <span
              onClick={() => handleChannelName("router")}
              className="block font-normal cursor-pointer px-4 py-1 text-base hover:bg-yellow-500 rounded-l"
            >
              # router
            </span>
            <span
              onClick={() => handleChannelName("gatsby")}
              className="block font-normal cursor-pointer px-4 py-1 text-base hover:bg-yellow-500 rounded-l "
            >
              # gatsby
            </span>
          </div>
        ) : null}
      </div>
      <div className="relative">
        <button
          className="font-bold z-0 sm:text-lg focus:outline-none hover:text-gray-400 focus:text-white"
          onClick={() => handlePeople()}
        >
          People
        </button>
        {/* {state.displayText === true ? (
          <button
            onClick={handleDisplay}
            className="fixed inset-0 w-full h-full bg-black opacity-50 text-white"
          >
            Please select a Channel and a User from above to continue...
          </button>
        ) : null} */}

        {isOpen2 ? (
          <button
            onClick={() => closePeople()}
            className="fixed inset-0 w-full h-full bg-transparent"
          ></button>
        ) : null}
        {isOpen2 ? (
          <div className="absolute right-0 rounded shadow-xl text-gray-900 py-2 bg-gray-100 w-48">
            <span
              onClick={() => handleUser("Ramesh")}
              className="block font-normal px-4 py-1 cursor-pointer text-base hover:bg-yellow-500 rounded-l "
            >
              Ramesh
            </span>
            <span
              onClick={() => handleUser("Vijay")}
              className="block font-normal px-4 py-1 cursor-pointer text-base hover:bg-yellow-500 rounded-l "
            >
              Vijay
            </span>
            <span
              onClick={() => handleUser("Rahul")}
              className="block font-normal px-4 py-1 cursor-pointer text-base hover:bg-yellow-500 rounded-l "
            >
              Rahul
            </span>
            <span
              onClick={() => handleUser("Sachin")}
              className="block font-normal px-4 py-1 cursor-pointer text-base hover:bg-yellow-500 rounded-l "
            >
              Sachin
            </span>
            <span
              onClick={() => handleUser("Manish")}
              className="block font-normal px-4 py-1 cursor-pointer text-base hover:bg-yellow-500 rounded-l "
            >
              Manish
            </span>
            <span
              onClick={() => handleUser("Amay")}
              className="block font-normal px-4 py-1 cursor-pointer text-base hover:bg-yellow-500 rounded-l "
            >
              Amay
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.nav.isOpen,
    isOpen2: state.nav.isOpen2
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChannelName: (channel) => dispatch(handleChannelName(channel)),
    handleUser: (name) => dispatch(handleUser(name)),
    handleChannels: () => dispatch(handleChannels()),
    handlePeople: () => dispatch(handlePeople()),
    closeChannels: () => dispatch(closeChannels()),
    closePeople: () => dispatch(closePeople())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
