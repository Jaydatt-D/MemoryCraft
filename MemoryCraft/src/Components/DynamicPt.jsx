import React, { useEffect } from 'react'
import MemoryBlock from './MemoryBlock';
import ProcessBlock from './ProcessBlock';

function DynamicPt(props) {
  const memory = props.memory;
  const processes = props.process;
  
  const firstFit = () => {
    let mem = [...memory];
    const doneProcess = [];
    let mapping = Array(memory.length);
    for(let i = 0; i < memory.length; i++) mapping[i] = [];
    let Fragmentation = 0;
    for (let i = 0; i < processes.length; i++) {
      let pSz = parseInt(processes[i]);
      for (let j = 0; j < memory.length; j++) {
        mem[j] = parseInt(mem[j]);
        let mSz = parseInt(mem[j]);
        if(mSz >= pSz && (!doneProcess.includes(i)) && (!mapping[j].includes(i))){
          doneProcess.push(i);
          mapping[j].push(i);
          mem[j] -= pSz;
        }
      }
    }
    for (let i = 0; i < memory.length; i++) {
      const el = parseInt(memory[i]);
      if(parseInt(mem[i]) != el){
        Fragmentation += mem[i];
      }
    }
    return (
      <div className="h-[30%] w-[90vw] flex flex-col justify-center items-center">
        <p className="text-3xl text-logo-color font-semibold mb-10">
          First Fit:
        </p>
        <div className="min-h-[100%] w-full flex justify-evenly items-center ">
          <div className="h-full w-full flex overflow-auto justify-center items-center">
            {memory.map((obj, ind) => {
              return (
                <MemoryBlock
                  size={obj}
                  childs={ mapping[ind].length > 0 ?
                    <div className='h-full w-full flex justify-start items-center'>
                      {
                        mapping[ind].map((el, i)=>{
                          return (
                            <ProcessBlock size={processes[el]} />
                          )
                        })
                      }
                    </div>
                    : ''
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
    let mem = [...memory];
    const doneProcess = [];
    let mapping = Array(memory.length);
    for(let i = 0; i < memory.length; i++) mapping[i] = [];
    let Fragmentation = 0;
    let index = 0;
    for (let i = 0; i < processes.length; i++) {
      let pSz = parseInt(processes[i]);
      for (let j = 0; j < memory.length; j++) {
        let mSz = parseInt(mem[j]);
        if(mSz >= pSz && !doneProcess.includes(i) && !(mapping[j].includes(i)) && (j >= index)){
          mapping[j].push(i);
          mem[j] -= pSz;
          doneProcess.push(i);
          index = j;
        }
      }
    }
    for (let i = 0; i < memory.length; i++) {
      const el = parseInt(memory[i]);
      if(parseInt(mem[i]) != el){
        Fragmentation += mem[i];
      }
    }
    return (
      <div className="h-[30%] w-[90vw] flex flex-col justify-center items-center">
        <p className="text-3xl text-logo-color font-semibold mb-10">
          Next Fit:
        </p>
        <div className="min-h-[100%] w-full flex justify-evenly items-center ">
          <div className="h-full w-full flex overflow-auto justify-center items-center">
            {memory.map((obj, ind) => {
              return (
                <MemoryBlock
                  size={obj}
                  childs={ mapping[ind].length > 0 ?
                    <div className='h-full w-full flex justify-start items-center'>
                      {
                        mapping[ind].map((el, i)=>{
                          return (
                            <ProcessBlock size={processes[el]} />
                          )
                        })
                      }
                    </div>
                    : ''
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
    let mem = [...memory];
    const doneProcess = [];
    let mapping = Array(memory.length);
    for(let i = 0; i < memory.length; i++) mapping[i] = [];
    let Fragmentation = 0;
    for (let i = 0; i < processes.length; i++) {
      let maxGap = -1, index = -1;
      let pSz = parseInt(processes[i]);
      for (let j = 0; j < memory.length; j++) {
        let mSz = parseInt(mem[j]);
        if(mSz >= pSz && (maxGap < mSz - pSz) && !doneProcess.includes(i) && !(mapping[j].includes(i))){
          maxGap = mSz - pSz;
          index = j;
        }
      }
      if(index !== -1){
        mapping[index].push(i);
        mem[index] -= pSz;
        doneProcess.push(i);
      }
    }
    for (let i = 0; i < memory.length; i++) {
      const el = parseInt(memory[i]);
      if(parseInt(mem[i]) != el){
        Fragmentation += mem[i];
      }
    }
    return (
      <div className="h-[30%] w-[90vw] flex flex-col justify-center items-center">
        <p className="text-3xl text-logo-color font-semibold mb-10">
          Worst Fit:
        </p>
        <div className="min-h-[100%] w-full flex justify-evenly items-center ">
          <div className="h-full w-full flex overflow-auto justify-center items-center">
            {memory.map((obj, ind) => {
              return (
                <MemoryBlock
                  size={obj}
                  childs={ mapping[ind].length > 0 ?
                    <div className='h-full w-full flex justify-start items-center'>
                      {
                        mapping[ind].map((el, i)=>{
                          return (
                            <ProcessBlock size={processes[el]} />
                          )
                        })
                      }
                    </div>
                    : ''
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
    let mem = [...memory];
    const doneProcess = [];
    let mapping = Array(memory.length);
    for(let i = 0; i < memory.length; i++) mapping[i] = [];
    let Fragmentation = 0;
    for (let i = 0; i < processes.length; i++) {
      let minGap = 10000000000000000, index = -1;
      let pSz = parseInt(processes[i]);
      for (let j = 0; j < memory.length; j++) {
        let mSz = parseInt(mem[j]);
        if(mSz >= pSz && (minGap > mSz - pSz) && !doneProcess.includes(i) && !(mapping[j].includes(i))){
          minGap = mSz - pSz;
          index = j;
        }
      }
      if(index !== -1){
        mapping[index].push(i);
        mem[index] -= pSz;
        doneProcess.push(i);
      }
    }
    for (let i = 0; i < memory.length; i++) {
      const el = parseInt(memory[i]);
      if(parseInt(mem[i]) != el){
        Fragmentation += mem[i];
      }
    }
    return (
      <div className="h-[30%] w-[90vw] flex flex-col justify-center items-center">
        <p className="text-3xl text-logo-color font-semibold mb-10">
          Best Fit:
        </p>
        <div className="min-h-[100%] w-full flex justify-evenly items-center ">
          <div className="h-full w-full flex overflow-auto justify-center items-center">
            {memory.map((obj, ind) => {
              return (
                <MemoryBlock
                  size={obj}
                  childs={ mapping[ind].length > 0 ?
                    <div className='h-full w-full flex justify-start items-center'>
                      {
                        mapping[ind].map((el, i)=>{
                          return (
                            <ProcessBlock size={processes[el]} />
                          )
                        })
                      }
                    </div>
                    : ''
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
    <div className="h-[200vh] w-full flex flex-col justify-center items-center mt-32">
      <div className="h-full w-full">{firstFit()}</div>
      <div className="h-full w-full">{nextFit()}</div>
      <div className="h-full w-full">{worstFit()}</div>
      <div className="h-full w-full">{bestFit()}</div>
    </div>
  )
}

export default DynamicPt
