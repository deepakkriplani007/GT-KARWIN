import { motion } from "framer-motion";

const CradSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full sm:flex flex-row px-4 text-white"
    >
      <motion.div className=" w-full p-8  justify-center gap-3 flex-col flex items-center ">
        <div className=" text-center  bg-gray-900 rounded-lg p-1">
          <h1 className=" text-3xl font-semibold">Our Moto</h1>
        </div>
        <div className=" text-center">
          To be the most sustainableService providerin the disciplineof Facility
          Creation&be identified for an unsurpassed standard of quality
        </div>
      </motion.div>

      <motion.div className=" w-full p-8 justify-center gap-3 flex-col flex items-center ">
        <div className=" text-center  bg-gray-900 rounded-lg p-1">
          <h1 className=" text-3xl font-semibold">Our Mission</h1>
        </div>
        <div className=" text-center">
          To deliver quality service at a fair price that not only meets the
          need,but also makes them be cognizant ofthe fact "Value for Money”.
        </div>
      </motion.div>

      <motion.div className=" w-full p-8 justify-center gap-3 flex-col flex items-center ">
        <div className=" text-center  bg-gray-900 rounded-lg p-1">
          <h1 className=" text-3xl font-semibold">We Belive</h1>
        </div>
        <div className=" text-center">
          Inpeople and their unlimited potential. In content and focus in
          problem solving. In teams for effective performance.
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CradSection;
