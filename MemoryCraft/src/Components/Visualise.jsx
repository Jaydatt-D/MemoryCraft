import React, { useState } from "react";
import fixed from "../assets/fixedpt.png";
import dynamic from "../assets/dynamicpt.png";
import DynamicPt from "./DynamicPt";
import FixedPt from "./FixedPt";

function Visualise() {
  const [Fixed, setFixed] = useState(false);
  const [Dyn, setDyn] = useState(false);
  return (
    <div className="min-h-[95vh] w-full flex flex-col items-center justify-center">
        <div className="text-3xl font-semibold"><span className="text-logo-color">Memory Allocation</span> Algorithms</div>
      <div className=" h-[85vh] w-[80%] flex flex-col items-center justify-center">
        <div className="h-[10%] w-[70%] text-3xl items-center justify-center flex font-semibold border-b-logo-color border-b-2">
          Choose Partition
        </div>
        <div className="h-[50%] w-[70%] flex">
          <div className="w-1/2 h-full flex items-center justify-center">
            <div
              onClick={() => {
                setFixed(true);
                setDyn(false);
              }}
              className={`${Fixed ? 'bg-logo-color' : 'bg-slate-300 hover:border-4 hover:border-sky-400 hover:bg-sky-200'} h-[90%] w-[90%] rounded-xl  ease-in-out duration-150 gap-5 flex flex-col items-center justify-center cursor-pointer`}
            >
              <img src={fixed} alt="" className="h-[50%]" />
              <p className=" text-3xl font-medium text-black">Fixed</p>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <div
              onClick={() => {
                setDyn(true);
                setFixed(false);
              }}
              className={`${Dyn ? 'bg-logo-color' : 'bg-slate-300 hover:border-4 hover:border-sky-400 hover:bg-sky-200'} h-[90%] w-[90%] rounded-xl  ease-in-out duration-150 gap-5 flex flex-col items-center justify-center cursor-pointer`}
            >
              <img src={dynamic} alt="" className="h-[50%]" />
              <p className=" text-3xl font-medium text-black">Dynamic</p>
            </div>
          </div>
        </div>
      </div>
    { Fixed && <FixedPt/> }
    { Dyn && <DynamicPt/> }
    </div>
    
  );
}

export default Visualise;
