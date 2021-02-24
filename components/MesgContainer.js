import React from "react";
import Message from "./Message";
import { connect } from "react-redux";
import { AnimatePresence } from "framer-motion";
// import { SlackContext } from "../App";

const MesgContainer = ({ selectedChannel, channelInfo }) => {
  // const chatRef = React.useRef();
  // // const { state } = React.useContext(SlackContext);
  // // console.log("Data", state.general);

  // const scrollToBottom = () => {
  //   chatRef.current.scrollTop = chatRef.current.scrollHeight;
  // };
  // React.useEffect(() => {
  //   scrollToBottom();
  // });
  const channelArr = (name) => {
    switch (name) {
      case "help":
        return channelInfo.help;
      case "react":
        return channelInfo.react;
      case "redux":
        return channelInfo.redux;
      case "router":
        return channelInfo.router;
      case "gatsby":
        return channelInfo.gatsby;
      default:
        return channelInfo.general;
    }
  };
  const newChannel = channelArr(selectedChannel);
  return (
    <div
      // ref={chatRef}
      className="overscroll-auto px-1 pt-1 sm:pt-3 pb-32 sm:pb-40 md:px-3 lg:px-4 xl:px-5 md:pt-3 lg:pt-4 xl:pt-5 bg-gray-100 flex-grow "
    >
      <AnimatePresence exitBeforeEnter>
        {newChannel.map((st) => {
          return (
            <Message
              key={st.id}
              name={st.userName}
              text={st.text}
              time={st.time}
            />
          );
        })}
      </AnimatePresence>
      {/* <Message /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedChannel: state.nav.selectedChannel,
    channelInfo: state.message.channelInfo
  };
};

export default connect(mapStateToProps, null)(MesgContainer);
