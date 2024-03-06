import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
const About = () => {
  return (
    <div className=" main z-10 overflow-x-hidden  w-full flex flex-col bg-gradient-to-l  to-[#62b5ec]  from-[#003355]">
      <Navbar />
      <div className="text-white w-1/4 gap-4 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className=" bg-[#201658]"
          style={{ clipPath: "polygon(0 0, 90% 0%, 100% 100%, 0% 100%)" }}
        >
          <h1 className=" text-4xl font-semibold p-4">Who We Are</h1>
        </motion.div>
      </div>
      <div className="m-8 text-white text-xl">
        <p>
          We are pleased to introduce ourselves as GTKARWIN LLP-approved IT
          infrastructure and electrical contractor registered with Govt. of AP.
          Our principal activity is IT infrastructure &electrical works in all
          areas of domestic, commercial, and industrial installations and
          maintenance.
        </p>
        <br />
        <p>
          At Link Light, we have built our business around understanding
          &expectations in order to deliver quality Network infrastructure and
          electrical solutions, which performance protect each and every time.
          Our No Compromise approach to our work can be witnessed in the
          finished product/project. From commercial and retail fit-outs to
          residential buildings and industries, each project is treated the
          same. Experienced project managers, qualified technical staff, and
          office-based support staff ensure that our partnership contract is
          completed successfully. We owe our success to our customers, who have
          patronized our services with confidence and trust.
        </p>
      </div>
      <div className="mt-8 text-white w-1/4 gap-4 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className=" bg-[#201658]"
          style={{ clipPath: "polygon(0 0, 90% 0%, 100% 100%, 0% 100%)" }}
        >
          <h1 className=" text-4xl font-semibold p-4">Our Project</h1>
        </motion.div>
      </div>
      <div className="text-white text-xl w-full flex justify-center p-8">
        <table className="table-auto w-full text-left  border border-gray-200 shadow-md">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 font-bold text-blue-700 uppercase bg-black  border border-gray-200"
              >
                S.NO
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold text-blue-700 uppercase bg-black border border-gray-200"
              >
                Project
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold text-blue-700 uppercase bg-black  border border-gray-200"
              >
                Works done
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border border-gray-200 text-white">1</td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Commscope
              </td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Network Cabling
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 text-white">2</td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                TCS E-block Gachiboli
              </td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Network Cabling
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 text-white">3</td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Meluha International School
              </td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Cabling, Switching & Routing, Security systems, Board Room, AV
                solutions, EPABX system
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 text-white">4</td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Vihan Kia Office
              </td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Cabling, Switching & Routing, Security systems, EPABX system
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 text-white">5</td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                I-Pac India
              </td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Cabling, Switching & Routing, Security systems, Board Room
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 text-white">6</td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Sandur Power Company Pvt.ltd
              </td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Cabling, Switching & Routing, Security systems, Board Room,
                Video conferencing solution
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 text-white">7</td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Sakshi
              </td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Video conferencing solution
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 text-white">8</td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Concrete lime light infra Projects
              </td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Aceess control, Network Cabling, Wireless solutions, Security
                Surveillance
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 text-white">9</td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                AP CM Camp office
              </td>
              <td className="px-6 py-4 border border-gray-200 text-white">
                Video conferencing Board Rooms,Meeting hall Maintanace
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Contact />
    </div>
  );
};

export default About;
