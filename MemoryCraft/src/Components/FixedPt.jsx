import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function FixedPt() {
  const [memory, setMemory] = useState([]);
  const [size, setSize] = useState(0);
  const addMemory = () => {
    if (size <= 0) {
      alert("Enter a Valid Size");
    } else {
      setMemory([...memory, size]);
    }
  };
  return (
    <div className="h-[100vh] w-full">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-3xl flex items-center justify-start font-semibold w-full pl-52 pb-12 text-logo-color">
          Memory
        </div>
        <div className="flex gap-3">
          <Input
            type="number"
            heading="Enter Partition Size"
            setData={setSize}
            placeholder="Eg. 100KB"
          />
          <div className="pt-8 flex gap-5">
            <Button name="Add" x="50px" y="40px" func={addMemory} bg='bg-green-500' bghov='bg-green-400' />
            <Button name="Delete" x="40px" y="40px" func={addMemory} bg='bg-red-500' bghov='bg-red-300' />
            {}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedPt;
