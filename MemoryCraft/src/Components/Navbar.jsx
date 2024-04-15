import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Navbar() {
  const element = (props) => {
    return (
      <Link to={props.link} className=" cursor-pointer hover:text-logo-color h-full w-[17%] flex items-center justify-center">
        <p className=" hover:border-logo-color ease-in-out duration-100 py-2">
          {props.text}
        </p>
      </Link>
    );
  };
  return (
    <div className="w-full h-16 flex border-b-[3px] border-logo-color">
      <div className="w-1/2 h-full px-5">
        <Logo />
      </div>
      <div className="w-1/2 h-full flex gap-10 justify-end items-center text-xl font-medium px-5">
        {element({text:'Learn', link:'/'})}
        {element({text:'Visualise', link:'/visualise'})}
      </div>
    </div>
  );
}

export default Navbar;
