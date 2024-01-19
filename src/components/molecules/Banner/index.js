import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "../../../assets/coding.json";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";
import ll from "../../../assets/ll.jpg"
const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">Hello, We are</h2>
        <h1 className="text-4xl font-semibold mb-0 translate-y-[-50%] sm:translate-y-[-0%]">Learn Legacy</h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
            cursor={true}
            sequence={[
              "we do Artificial Intelligence",
              2500,
              "we do Full-stack Development",
              2500,
              "we do UI/UX Design",
              2500,
              "we do BlockChain",
              2500,
              "we do CyberSecurity",
              2500,
              "we do Networking",
              2500,
              "we do Business and Mindset",
              2500,
              "we do Java SpringBoot",
              2500,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">
        At Learn Legacy, we guide students towards a future they'll love. Our team is dedicated to helping you find your perfect domain among 9 exciting choices, including UI/UX Design, Networking, Full Stack Development, AI, Cybersecurity, Blockchain, Java Spring Boot, Business and Mindset.<pre><span className="text-primary ">Free Online Workshop: Feb 25 - Mar 5, 5 PM to 7 PM.</span></pre>
        
          {/* I am a Front-end Developer. I am very passionate to my work and
          dedicated to explore New Tools And Technologies. */}
        </p>

        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
          <p className="text-neutral max-w-xl mb-1 ml-2 font-medium translate-y-[-20%] sm:translate-y-[-0%] ">Ready to Shape Your Future?</p>
          <button className="primary-button ml-4">
              <span>Register Now?</span>
          </button>
        </div>
        {/* <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
            <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">Ready to Shape Your Future?</p>
          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span>About Me</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div> */}
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 50 }}
        transition={{ duration: 1 }}
      >
        {/* <Lottie options={defaultOptions} height="90%" width="90%" /> */}
        <img src={ll} height="70%" width="70%" className=" hover:border-orange-400 rounded-xl hover:border-8 transition-all duration-500 ease-in-out"/>
      </motion.div>
    </div>
  );
};

export default Banner;
