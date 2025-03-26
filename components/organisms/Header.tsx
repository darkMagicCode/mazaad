import React from "react";
import Logo from "../atoms/Logo";
import Navigation from "../atoms/Navigation";
import UserActions from "../molecules/UserActions";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col capitalize ">
      <div className="flex flex-col px-40 py-3 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex  justify-between w-full md:w-[30%] gap-4 md:gap-0">
            <Logo />

            <Navigation />
          </div>
          <div className="hidden md:block">
            <UserActions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
