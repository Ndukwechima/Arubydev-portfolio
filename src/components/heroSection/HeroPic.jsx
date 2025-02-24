import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="../../public/images/HexaPic.png"
        alt="Aruby Chima"
        className="max-h-[450px] w-auto hidden lg:block"
      />

      <div className=" absolute -z-10 hidden  lg:flex justify-center items-center">
        <PiHexagonThin className=" md:h-[90%] h-[120%] min-h-[600px] w-auto text-orange opacity-20 " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
