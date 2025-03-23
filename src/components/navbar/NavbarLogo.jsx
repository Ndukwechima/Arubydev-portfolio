import { motion } from "framer-motion";

const NavbarLogo = () => {
  return (
    <div>
      <h1 className="text-white  text-2xl hidden md:block">
        <span className="text-orange">Chima</span> Arubuike
      </h1>
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
    </div>
  );
};

export default NavbarLogo;
