import { Link } from "react-scroll";
import NavbarLogo from "../navbar/NavbarLogo";

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
        <p className="text-2xl text-lightGrey py-1">
          <span className="text-cyan">Chima</span> Arubuike
        </p>
        <ul className="flex gap-4 text-lightGrey text-xl">
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
