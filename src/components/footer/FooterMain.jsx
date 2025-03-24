import { Link } from "react-scroll";
import { motion } from "framer-motion";


const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-2xl hidden md:block text-lightGrey py-1">
          <span className="text-cyan">Chima</span> Arubuike
        </p>
        <div className="relative flex justify-center items-center md:hidden border-2 border-orange rounded-full p-2 w-12 h-12">
          {/* CA text remains static */}
          <h1 className="text-cyan font-special font-extrabold text-2xl md:hidden block">
            CA
          </h1>

          {/* Glowing Dot Moving Around */}
          <motion.div
            className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_4px_blue]"
            animate={{
              x: [0, 14, 20, 14, 0, -14, -20, -14, 0],
              y: [-20, -14, 0, 14, 20, 14, 0, -14, -20],
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }} // Slow movement
          />
        </div>
        <ul className="flex sm:flex-row flex-col gap-4 text-lightGrey text-xl mt-8 md:mt-0">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-orange transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <hr className="mt-10 border border-gray-500" />

      <p className="max-w-[1200px] mx-auto text-center mt-2 mb-12 text-sm text-lightBrown">
        © 2025 Chima Aruby | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
