import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Imageec from "../assets/ec.png";
import Imageinfra from "../assets/security.png";
import Imagenc from "../assets/nc.png";
import Imagebio from "../assets/biometric.png";
import Imagecctv from "../assets/cctv.png";
import Contact from "../components/Contact";
const Service = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className=" text-white z-10 overflow-x-hidden  w-full flex flex-col bg-gradient-to-l  to-[#62b5ec]  from-[#003355]">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full m-4  px-4 text-white"
      >
        <div className=" text-white items-center justify-center flex ">
          <h1 className="sm:text-6xl text-3xl font-bold ">Our Services</h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" w-full p-8 justify-center gap-3 flex flex-col  items-center "
      >
        <div className=" text-center  bg-gray-900 rounded-lg p-1">
          <h1 className=" text-3xl font-semibold">
            IT Infrastructure ServicesOur Mission
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-6">
          <div className="max-w-xs rounded flex flex-col bg-white p-2 overflow-hidden shadow-lg transform transition-transform hover:shadow-xl hover:-translate-y-1">
            <img
              className="w-full h-[170px] object-cover"
              src={Imageec}
              alt="Sample"
            />
            <div className="flex-grow">
              <div className="px-6 py-4">
                <div className="font-bold text-black rounded text-xl mb-2">
                  Enterprise Communication
                </div>
                <p className="text-gray-700 text-base">
                  It is platform to manage your communications makes all the
                  difference in organizational productivity and flexibility to
                  respond to changing business environments. GT Karwin is
                  focused on how business can deploy and access unified
                  communications technology to its best in this constantly
                  evolving technology environment.
                </p>
              </div>
              <div className="px-6 py-4 flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={scrollToBottom}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-xs rounded flex flex-col bg-white p-2 overflow-hidden shadow-lg transform transition-transform hover:shadow-xl hover:-translate-y-1">
            <img
              className="w-full h-[170px] object-cover"
              src={Imagenc}
              alt="Sample"
            />
            <div className="flex-grow">
              <div className="px-6 py-4">
                <div className="font-bold text-black rounded text-xl mb-2">
                  Network Infrastructure
                </div>
                <p className="text-gray-700 text-base">
                  Your enterprise network is more than the Passive & Active
                  components,and To managing day to day operations like
                  enhancing network responsive- ness, improve productivity,
                  increase customer satisfaction, manage growth and change at
                  the same time.A thoroughly managed IT Infrastructure can help
                  your business control costs, accelerate growth, ensure
                  scalability and mitigate risks
                </p>
              </div>
              <div className="px-6 py-4 flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={scrollToBottom}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-xs rounded flex flex-col bg-white p-2 overflow-hidden shadow-lg transform transition-transform hover:shadow-xl hover:-translate-y-1">
            <img
              className="w-full h-[170px] object-cover"
              src={Imageinfra}
              alt="Sample"
            />
            <div className="flex-grow">
              <div className="px-6 py-4">
                <div className="font-bold text-black rounded text-xl mb-2">
                  Safety & Security
                </div>
                <p className="text-gray-700 text-base">
                  GT Karwin brings you comprehensive security & surveillance
                  solutions managing multiple devices which offer surveillance
                  with analytics, access control and intrusion alarms
                  functionalities that allows you to take proactive and reactive
                  measures simultaneously avoiding unwanted events.
                </p>
              </div>
              <div className="px-6 py-4 flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={scrollToBottom}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" w-full p-8 justify-center gap-3 flex flex-col  items-center "
      >
        <div className=" text-center  bg-gray-900 rounded-lg p-1">
          <h1 className=" text-3xl font-semibold">Electrical Works</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-6">
          <div className="max-w-xs rounded flex flex-col bg-white p-2 overflow-hidden shadow-lg transform transition-transform hover:shadow-xl hover:-translate-y-1">
            <img
              className="w-full h-[170px] object-cover"
              src={Imagebio}
              alt="Sample"
            />
            <div className="flex-grow">
              <div className="px-6 py-4">
                <div className="font-bold text-black rounded text-xl mb-2">
                  BIOMETRIC SOLUTIONS
                </div>
                <p className="text-gray-700 text-base">
                  It is platform to manage your communications makes all the
                  difference in organizational productivity and flexibility to
                  respond to changing business environments. GT Karwin is
                  focused on how business can deploy and access unified
                  communications technology to its best in this constantly
                  evolving technology environment.
                </p>
              </div>
              <div className="px-6 py-4 flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={scrollToBottom}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-xs rounded flex flex-col bg-white p-2 overflow-hidden shadow-lg transform transition-transform hover:shadow-xl hover:-translate-y-1">
            <img
              className="w-full h-[170px] object-cover"
              src={Imagecctv}
              alt="Sample"
            />
            <div className="flex-grow">
              <div className="px-6 py-4">
                <div className="font-bold text-black rounded text-xl mb-2">
                  CCTV & Surveillance
                </div>
                <p className="text-gray-700 text-base">
                  Your enterprise network is more than the Passive & Active
                  components,and To managing day to day operations like
                  enhancing network responsive- ness, improve productivity,
                  increase customer satisfaction, manage growth and change at
                  the same time.A thoroughly managed IT Infrastructure can help
                  your business control costs, accelerate growth, ensure
                  scalability and mitigate risks
                </p>
              </div>
              <div className="px-6 py-4 flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={scrollToBottom}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Contact />
    </div>
  );
};

export default Service;
