import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full bg-dark-blue px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-dark-blue items-center p-6 lg:border-b border-gray-400  ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden items-center justify-center">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
