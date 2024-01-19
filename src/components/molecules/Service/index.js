import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Front End Development",
      icon: <DiAtom />,
      description:
        "Front-end development involves designing and implementing the user interface of a website or application, focusing on the visual and interactive elements that users directly interact with.",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      icon: <GiArtificialIntelligence />,
      description:
        "Artificial Intelligence (AI) is a field of computer science focused on creating machines that can perform tasks requiring human-like intelligence. It involves developing algorithms and systems that can learn, reason, and make decisions autonomously.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: <BiPalette />,
      description:
        "UI/UX Design is the art of creating visually appealing interfaces and seamless user experiences to enhance digital interaction and satisfaction.",
    },
    {
      id: 4,
      title: "CyberSecurity",
      icon: <MdOutlineSecurity />,
      description:
        "Cybersecurity is the practice of protecting computer systems, networks, and data from digital threats, encompassing measures to prevent, detect, and respond to cyber attacks. It is essential for safeguarding sensitive information and maintaining the integrity of digital infrastructure.",
    },
    {
      id: 5,
      title: "Backend Development ",
      icon: <FiServer />,
      description:
      "Backend development involves building and maintaining the server-side of web applications, managing databases, and ensuring seamless communication between the server and the user interface.",
    },
    {
      id: 6,
      title: "Blockchain ",
      icon: <SiHiveBlockchain />,
      description:
      "Blockchain is a decentralized and secure digital ledger technology that enables transparent and tamper-resistant record-keeping of transactions across a network of computers.",
    },
  ];
  return (
    <div className="py-20 parent"
    // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-accent shadow-lg"
              : "bg-[#313131] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
