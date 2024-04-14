import React from "react";
import Logo from "./Logo";

function Navbar() {
  const element = (props) => {
    return (
      <div className=" cursor-pointer hover:text-logo-color h-full w-[17%] flex items-center justify-center">
        <p className="hover:border-b-[3px] hover:border-logo-color ease-in-out duration-100 py-2">
          {props.text}
        </p>
      </div>
    );
  };
  return (
    <div className="w-full h-16 flex">
      <div className="w-1/2 h-full px-5">
        <Logo />
      </div>
      <div className="w-1/2 h-full flex gap-8 justify-start items-center text-xl font-medium">
        {element({text:'Learn'})}
        {element({text:'Practice'})}
        {element({text:'Visualise'})}
      </div>
    </div>
  );
}

export default Navbar;
