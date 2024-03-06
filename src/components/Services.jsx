import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className=" w-full mt-10 px-4 py-8 gap-40 flex flex-col items-center text-white justify-center">
      <div className=" items-center justify-center flex">
        <h1 className="sm:text-6xl text-3xl font-bold ">Our Services</h1>
      </div>

      <div className=" w-full flex gap-4 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className=" bg-[#201658] flex items-center justify-start w-1/2"
          style={{ clipPath: "polygon(0 0, 90% 0%, 100% 100%, 0% 100%)" }}
        >
          <h1 className=" text-4xl font-semibold p-4">
            IT Infrastructure Services
          </h1>
        </motion.div>

        <ul className="list-disc">
          <li>Enterprise Communication</li>
          <li>Network Infrastructure</li>
          <li>Security&Surveillance</li>
        </ul>
      </div>
      <div className=" w-full flex gap-4 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className=" bg-[#201658] flex items-center justify-start w-1/2"
          style={{ clipPath: "polygon(0 0, 90% 0%, 100% 100%, 0% 100%)" }}
        >
          <h1 className=" text-4xl font-semibold p-4">Electrical Works</h1>
        </motion.div>

        <ul className="list-disc">
          <li>BIOMETRIC SOLUTIONS</li>
          <li>CCTV & Surveillance</li>
          <li>Security&Surveillance</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
