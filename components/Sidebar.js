import React from "react";
import { connect } from "react-redux";
// import { SlackContext } from "../App";
import { handleChannelName, handleUser } from "../redux/slack/slackActions";
import { motion } from "framer-motion";

const sideVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
      // delay:0.1
    },
  },
};

const channelVariant = {
  // hidden: {
  //   x: "-100vw"
  // },
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 1.5,
    },
  },
};

const channel1 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 1.6,
    },
  },
};

const channel2 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 1.7,
    },
  },
};

const channel3 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 1.8,
    },
  },
};

const channel4 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 1.9,
    },
  },
};

const channel5 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 2,
    },
  },
};

const channel6 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 2.1,
    },
  },
};

const peopleVariant = {
  // hidden: {
  //   x: "-100vw"
  // },
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 2.2,
    },
  },
};

const people1 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 2.3,
    },
  },
};

const people2 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 2.4,
    },
  },
};
const people3 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 2.5,
    },
  },
};
const people4 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 2.6,
    },
  },
};
const people5 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 2.7,
    },
  },
};

const people6 = {
  visible: {
    x: [0, 150, 0],
    transition: {
      // duration: 1
      delay: 2.8,
    },
  },
};

const Sidebar = ({ handleChannelName, handleUser }) => {
  // const { handleChannelName, handleUser } = React.useContext(SlackContext);

  return (
    <motion.div
      variants={sideVariant}
      initial="hidden"
      animate="visible"
      className="fixed hidden h-full pl-8 text-white bg-blue-800 w-2/7 md:block lg:pl-10 xl:pl-12"
    >
      <motion.div className="mt-6 mb-10 lg:mt-8 xl:mt-10">
        <motion.div
          variants={channelVariant}
          //  initial="hidden"
          animate="visible"
          className="ml-px text-xl font-semibold tracking-wide uppercase lg:ml-1 xl:ml-2"
        >
          Channels
        </motion.div>
        <div className="mt-3 text-lg leading-relaxed xl:mt-4 xl:ml-4">
          <motion.a
            variants={channel1}
            // variants={linkVariant}
            // whileTap="hover"
            href="#"
            onClick={() => handleChannelName("general")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            # general
          </motion.a>
          <motion.a
            variants={channel2}
            href="#"
            onClick={() => handleChannelName("help")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            # help
          </motion.a>
          <motion.a
            variants={channel3}
            href="#"
            onClick={() => handleChannelName("react")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            # react
          </motion.a>
          <motion.a
            variants={channel4}
            href="#"
            onClick={() => handleChannelName("redux")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            # redux
          </motion.a>
          <motion.a
            variants={channel5}
            href="#"
            onClick={() => handleChannelName("router")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            # router
          </motion.a>
          <motion.a
            variants={channel6}
            href="#"
            onClick={() => handleChannelName("gatsby")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            # gatsby
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        // variants={peopleVariant}
        // initial="hidden"
        // animate="visible"
        className="mt-12 "
      >
        <motion.div
          variants={peopleVariant}
          animate="visible"
          className="ml-px text-xl font-semibold tracking-wide uppercase lg:ml-1 xl:ml-2"
        >
          People
        </motion.div>
        <div className="mt-3 text-lg leading-relaxed xl:mt-4 xl:ml-4">
          <motion.a
            variants={people1}
            href="#"
            onClick={() => handleUser("Ramesh")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            Ramesh
          </motion.a>
          <motion.a
            variants={people2}
            href="#"
            onClick={() => handleUser("Vijay")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            Vijay
          </motion.a>
          <motion.a
            variants={people3}
            href="#"
            onClick={() => handleUser("Rahul")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            Rahul
          </motion.a>
          <motion.a
            variants={people4}
            href="#"
            onClick={() => handleUser("Sachin")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            Sachin
          </motion.a>
          <motion.a
            variants={people5}
            href="#"
            onClick={() => handleUser("Manish")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            Manish
          </motion.a>
          <motion.a
            variants={people6}
            href="#"
            onClick={() => handleUser("Amay")}
            className="block pl-3 rounded-l cursor-pointer focus:font-bold hover:bg-yellow-500 hover:text-gray-900"
          >
            Amay
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChannelName: (name) => dispatch(handleChannelName(name)),
    handleUser: (name) => dispatch(handleUser(name)),
  };
};
export default connect(null, mapDispatchToProps)(Sidebar);
