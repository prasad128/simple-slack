import React from "react";
// import { SlackContext } from "../App";
import { MdSend } from "react-icons/md";
import {
  handleText,
  handleMessage
} from "../redux/slackMessage/slackMessageActions";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const footerVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      // duration: 1,
      delay: 1
    }
  }
};

const Footer = ({
  handleText,
  text,
  handleMessage,
  selectedChannel,
  selectedUser
}) => {
  // const inputRef = React.useRef();
  // // const [text, setText] = React.useState("");
  // // const { handleMessage, state, inputRef } = React.useContext(SlackContext);
  // // useEffect hook
  React.useEffect(() => {
    //   console.log("render");
    let inpValue = document.getElementById("inputValue");

    inpValue.focus();
  }, [text, selectedChannel, selectedUser]);

  return (
    // <AnimatePresence>
    <motion.div
      variants={footerVariant}
      initial="hidden"
      animate="visible"
      className="h-12 flex items-center flex-shrink-0 sticky bottom-0 p-2 sm:h-16 xl:h-20 sm:p-3 border-t-2 border-gray-400"
    >
      <form
        onSubmit={(e) => handleMessage(e)}
        className="flex flex-grow items-center focus:outline-none"
      >
        <input
          // ref={inputRef}
          id="inputValue"
          value={text}
          onChange={handleText}
          className="block flex-grow text-gray-900 w-full border-2 focus:outline-none border-gray-500 rounded px-2 py-1 sm:py-2 xl:py-3 xl:px-3"
          placeholder="Type your message here."
        />

        <button
          type="submit"
          className="lg:hidden block border bg-blue-800 w-12 ml-1 sm:ml-1 text-white px-2  sm:px-3 sm:py-2 focus:outline-none hover:bg-blue-700 rounded py-1"
        >
          <MdSend className="mx-auto" size="25px" />
        </button>
        {/*  */}
      </form>
    </motion.div>
    // </AnimatePresence>
  );
};

const mapStateToProps = (state) => {
  return {
    textValue: state.message.text,
    selectedChannel: state.nav.selectedChannel,
    selectedUser: state.nav.selectedUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleText: (e) => dispatch(handleText(e)),
    handleMessage: (e) => dispatch(handleMessage(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
