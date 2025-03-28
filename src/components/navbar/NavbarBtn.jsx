import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <div className="w-full sm:w-[30%] flex justify-center md:justify-end">
      <button
        className="px-4 py-2 rounded-full text-xl font-bold font-body
     text-white border-cyan border flex items-center gap-1 bg-gradient-to-r 
      from-darkCyan to-orange transition-all duration-500 hover:scale-110
       hover:border-orange cursor-pointer hover:shadow-cyanShadow"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="contact"
        >
          Hire Me
        </Link>
        <div className="hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>
    </div>
  );
};

export default NavbarBtn;
