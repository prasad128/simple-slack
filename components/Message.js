import React from "react";
// import { SlackContext } from "../App";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const mesgVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  exit: {
    opacity: 0
    // opacity: 0
  }
};

const Message = ({ name, time, text, selectedUser }) => {
  // const { state } = React.useContext(SlackContext);
  return (
    <motion.div
      variants={mesgVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex items-center px-2 pt-1 pb-2 max-w-lg lg:max-w-xl xl:max-w-xl md:mx-0 mx-auto bg-gray-100"
    >
      <div className="w-10 sm:w-12 sm:h-12 mr-px sm:mr-0 bg-gray-100 self-start h-10 border-2 border-gray-300 rounded flex-shrink-0">
        <img src="#" className="" alt="" />
      </div>
      <div className="ml-1 sm:ml-2 flex-grow self-start">
        <div className="flex items-baseline leading-tight">
          <div className="font-bold text-gray-900 sm:text-lg">
            {name.length === 0
              ? "New User"
              : name === selectedUser
              ? "Myself"
              : name}
          </div>
          <div className="ml-3 md:ml-4 xl:ml-4 flex-grow text-gray-500 text-sm ">
            {time}
          </div>
        </div>
        <div className="leading-tight pt-px text-gray-800 sm:text-base">
          {text}
        </div>
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log("OwnProps: ",ownProps);
  const { name, text, time } = ownProps;
  return {
    selectedUser: state.nav.selectedUser,
    name: name,
    text: text,
    time: time
  };
};

export default connect(mapStateToProps, null)(Message);
