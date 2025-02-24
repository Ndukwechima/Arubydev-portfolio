import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Front-End Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Chima Arubuike <br className="sm:hidden md:block" />
        Ndukwe
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        I'm a junior front-end Software developer with a passion for creating
        interactive, <br /> user-friendly and responsive web applications.
      </motion.p>

      {/* Download CV */}

      <div>
        <button
          className=" px-4 py-2 rounded-full text-xl font-bold font-body
     text-white border-cyan border flex items-center gap-1 bg-gradient-to-r 
      from-darkCyan to-orange transition-all duration-500 hover:scale-110
       hover:border-orange cursor-pointer hover:shadow-cyanShadow"
        >
          <Link>Download CV</Link>
          <div className="hidden md:block">
            <LuArrowDownRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroText;
