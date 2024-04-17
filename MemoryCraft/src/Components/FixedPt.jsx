import React from "react";
import MemoryBlock from "./MemoryBlock";
import ProcessBlock from "./ProcessBlock";

function FixedPt(props) {
  const memory = props.memory;
  const processes = props.process;

  const firstFit = () => {
    const done = [],
      doneProcess = [];
    let Fragmentation = 0;
    return (
      <div className="h-[30%] w-[90vw] flex flex-col justify-center items-center ">
        <p className="text-3xl text-logo-color font-semibold mb-10">
          First Fit:
        </p>
        <div className="min-h-[100%] w-full flex justify-evenly items-center ">
          <div className="h-full flex overflow-auto justify-center items-center">
            {memory.map((memorySize, memoryIndex) => {
              memorySize = parseInt(memorySize);
              let processToFit = 0;
              for (let i = 0; i < processes.length; i++) {
                const processSize = parseInt(processes[i]);
                if (
                  !done.includes(memoryIndex) &&
                  memorySize >= processSize &&
                  !doneProcess.includes(i)
                ) {
                  processToFit = processSize;
                  done.push(memoryIndex);
                  doneProcess.push(i);
                  Fragmentation += memorySize - processSize;
                  break;
                }
              }
              return (
                <MemoryBlock
                  size={memorySize}
                  childs={
                    processToFit > 0 ? <ProcessBlock size={processToFit} /> : ""
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="h-full w-full flex justify-evenly items-center mt-9">
          <p className="text-xl h-full text-logo-color flex flex-col">
            Internal Fragmentation:{" "}
            <span className="text-red-400">{Fragmentation} KB</span>
          </p>
          <div className="h-full">
            <p className="text-xl text-logo-color">Incomplete Processes:</p>
            <div className="flex flex-col overflow-auto gap-1 h-full">
              {processes.length === doneProcess.length ? (
                <p className="text-green-500">All Process Alloted</p>
              ) : (
                processes.map((el, index) => {
                  if (!doneProcess.includes(index)) {
                    return <ProcessBlock size={el} block={true} />;
                  }
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const nextFit = () => {
    const doneProcess = [];
    let next = Array(memory.length).fill(-1);
    let Fragmentation = 0;
    let index = 0;
    for (let i = 0; i < processes.length; i++) {
      const psize = processes[i];
      for (let j = index; j < memory.length; j++) {
        if(next[j] != -1) continue;
        if (parseInt(psize) <= parseInt(memory[j]) && !doneProcess.includes(i)) {
          doneProcess.push(i);
          Fragmentation += parseInt(memory[j]) - parseInt(psize);
          next[j] = i;
          index = j + 1;
          break;
        }
      }
    }

    return (
      <div className="h-[30%] w-[90vw] flex flex-col justify-center items-center">
        <p className="text-3xl text-logo-color font-semibold mb-10">
          Next Fit:
        </p>
        <div className="min-h-[100%] w-full flex justify-evenly items-center ">
          <div className="h-full flex overflow-auto justify-center items-center">
            {memory.map((obj, ind) => {
              const processToFit = next[ind] === -1 ? 0 : processes[next[ind]];
              return (
                <MemoryBlock
                  size={obj}
                  childs={
                    processToFit > 0 ? <ProcessBlock size={processToFit} /> : ""
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="h-full w-full flex justify-evenly items-center mt-9">
          <p className="text-xl h-full text-logo-color flex flex-col">
            Internal Fragmentation:{" "}
            <span className="text-red-400">{Fragmentation} KB</span>
          </p>
          <div className="h-full">
            <p className="text-xl text-logo-color">Incomplete Processes:</p>
            <div className="flex flex-col overflow-auto gap-1 h-full">
              {processes.length === doneProcess.length ? (
                <p className="text-green-500">All Process Alloted</p>
              ) : (
                processes.map((el, index) => {
                  if (!doneProcess.includes(index)) {
                    return <ProcessBlock size={el} block={true} />;
                  }
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const worstFit = () => {
    const doneMemory = [];
    const doneProcess = [];
    let next = Array(memory.length).fill(-1);
    let Fragmentation = 0;
    for (let i = 0; i < processes.length; i++) {
      let maxGap = -1,
        ind = -1;
      let pSz = parseInt(processes[i]);
      for (let j = 0; j < memory.length; j++) {
        if(next[j] != -1) continue;
        let memSz = parseInt(memory[j]);
        if (!doneMemory.includes(j) && memSz >= pSz && maxGap < memSz - pSz && !doneProcess.includes(i)) {
          maxGap = memSz - pSz;
          ind = j;
        }
      }
      if (ind !== -1) {
        next[ind] = i;
        doneMemory.push(ind);
        doneProcess.push(i);
        Fragmentation += parseInt(memory[ind]) - pSz;
      }
    }

    return (
      <div className="h-[30%] w-[90vw] flex flex-col justify-center items-center">
        <p className="text-3xl text-logo-color font-semibold mb-10">
          Worst Fit:
        </p>
        <div className="min-h-[100%] w-full flex justify-evenly items-center ">
          <div className="h-full flex overflow-auto justify-center items-center">
            {memory.map((obj, ind) => {
              const processToFit = next[ind] === -1 ? 0 : processes[next[ind]];
              return (
                <MemoryBlock
                  size={obj}
                  childs={
                    processToFit > 0 ? <ProcessBlock size={processToFit} /> : ""
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="h-full w-full flex justify-evenly items-center mt-9">
          <p className="text-xl h-full text-logo-color flex flex-col">
            Internal Fragmentation:{" "}
            <span className="text-red-400">{Fragmentation} KB</span>
          </p>
          <div className="h-full">
            <p className="text-xl text-logo-color">Incomplete Processes:</p>
            <div className="flex flex-col overflow-auto gap-1 h-full">
              {processes.length === doneProcess.length ? (
                <p className="text-green-500">All Process Alloted</p>
              ) : (
                processes.map((el, index) => {
                  if (!doneProcess.includes(index)) {
                    return <ProcessBlock size={el} block={true} />;
                  }
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const bestFit = () => {
    const doneMemory = [];
    const doneProcess = [];
    let next = Array(memory.length).fill(-1);
    let Fragmentation = 0;
    for (let i = 0; i < processes.length; i++) {
      let maxGap = 1000000000000000,
        ind = -1;
      let pSz = parseInt(processes[i]);
      for (let j = 0; j < memory.length; j++) {
        if(next[j] != -1) continue;
        let memSz = parseInt(memory[j]);
        if (!doneMemory.includes(j) && memSz >= pSz && maxGap > memSz - pSz && !doneProcess.includes(i)) {
          maxGap = memSz - pSz;
          ind = j;
        }
      }
      if (ind !== -1) {
        next[ind] = i;
        doneMemory.push(ind);
        doneProcess.push(i);
        Fragmentation += parseInt(memory[ind]) - pSz;
      }
    }

    return (
      <div className="h-[30%] w-[90vw] flex flex-col justify-center items-center">
        <p className="text-3xl text-logo-color font-semibold mb-10">
          Best Fit:
        </p>
        <div className="min-h-[100%] w-full flex justify-evenly items-center ">
          <div className="h-full flex overflow-auto justify-center items-center">
            {memory.map((obj, ind) => {
              const processToFit = next[ind] === -1 ? 0 : processes[next[ind]];
              return (
                <MemoryBlock
                  size={obj}
                  childs={
                    processToFit > 0 ? <ProcessBlock size={processToFit} /> : ""
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="h-full w-full flex justify-evenly items-center mt-9">
          <p className="text-xl h-full text-logo-color flex flex-col">
            Internal Fragmentation:{" "}
            <span className="text-red-400">{Fragmentation} KB</span>
          </p>
          <div className="h-full">
            <p className="text-xl text-logo-color">Incomplete Processes:</p>
            <div className="flex flex-col overflow-auto gap-1 h-full">
              {processes.length === doneProcess.length ? (
                <p className="text-green-500">All Process Alloted</p>
              ) : (
                processes.map((el, index) => {
                  if (!doneProcess.includes(index)) {
                    return <ProcessBlock size={el} block={true} />;
                  }
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[200vh] w-full flex flex-col justify-center items-center mt-36">
      <div className="h-full w-full ">{firstFit()}</div>
      <div className="h-full w-full">{nextFit()}</div>
      <div className="h-full w-full">{worstFit()}</div>
      <div className="h-full w-full">{bestFit()}</div>
    </div>
  );
}

export default FixedPt;
