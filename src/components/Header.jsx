import { motion } from "framer-motion";

const Header = () => {
  const textVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className=" px-10 flex gap-4 w-full sm:h-screen h-[30rem] text-white">
      {/* text container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ ease: "easeOut", duration: 1 }}
        className="sm:w-full md:w-full lg:w-full xl:w-1/2 lg:h-full h-96  gap-5 flex flex-col justify-center"
      >
        <h1 className=" text-2xl sm:text-5xl font-bold ">
          The Complete Electrical And IT Infrastructure Services Company
        </h1>
        <p className=" sm:text-xl text-xs">
          We are pleased to introduce ourselves as a GTKARWIN LLP approved IT
          Infrastructureand Electrical contract or registered with Govt.of
          AP.Our principle activity is IT infrastructure & electrical works in
          all areas of domestic, commercial,and industrial installations and
          maintenance.
        </p>
      </motion.div>

      {/* image container */}

      <div className="w-1/2 hidden lg:flex h-full p-10 items-center justify-center"></div>
    </div>
  );
};

export default Header;
