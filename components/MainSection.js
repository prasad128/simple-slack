import React from "react";
import Navbar from "./Navbar";
import MesgContainer from "./MesgContainer";
import Footer from "./Footer";
import { connect } from "react-redux";
import { motion } from "framer-motion";
// import { SlackContext } from "../App";
const mainVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      //   delay: 0.5,
      duration: 1.5,
      //   when: "beforeChildren"
    },
  },
};
const MainSection = ({ selectedChannel, selectedUser }) => {
  // const { state } = React.useContext(SlackContext);
  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      animate="visible"
      className="container absolute top-0 right-0 flex flex-col justify-between h-full md:w-7/10"
    >
      <Navbar />
      <MesgContainer />
      {selectedChannel.length > 0 ? (
        <Footer />
      ) : selectedUser.length > 0 ? (
        <Footer />
      ) : null}
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedChannel: state.nav.selectedChannel,
    selectedUser: state.nav.selectedUser,
  };
};
export default connect(mapStateToProps, null)(MainSection);
