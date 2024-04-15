import React from "react";
import learnlogo from "../assets/learnlogo.png";

function Learn() {
  return (
    <div className=" h-full w-full p-5">
      <div className="h-full w-full flex">
        <div className="h-[55%] w-[60%] flex flex-col">
          <p className="text-2xl font-semibold">
            <span className="text-logo-color">Memory Allocation</span>{" "}
            Algorithms
          </p>
          <br />
          <p>
            Memory allocation algorithms are essential in managing computer
            memory effectively, particularly in operating systems. They dictate
            how memory is allocated to processes or programs running on a
            system. Two common strategies for memory allocation are fixed
            partitioning and dynamic partitioning.
          </p>
          <br />
          <p className="text-2xl font-semibold">
            <span className="text-logo-color">Fixed</span> Partition
          </p>
          <br />
          <p>
            In fixed partitioning, the available memory is divided into
            fixed-sized partitions before the execution of programs. Each
            partition can accommodate one process. When a process arrives, the
            system allocates a partition that is large enough to hold the
            process. If no such partition is available, the process waits in a
            queue until one becomes available.
          </p>
          <br />
          <div className="w-[90vw] mt-6">
          <p className="text-2xl font-semibold">
            <span className="text-logo-color">Dynamic</span> Partition
          </p>
          <br />
          <p className="w-full">
            In dynamic partitioning, memory is divided into variable-sized
            partitions. When a process arrives, it requests memory dynamically
            from the available pool. The system allocates memory dynamically to
            each process, and the unused memory is returned to the pool when a
            process terminates.
          </p>
          <br />
          <p>
            Dynamic partitioning doesn't suffer from internal fragmentation like
            fixed partitioning, but it can suffer from external fragmentation,
            where there are enough total free memory spaces, but they are not
            contiguous, making it difficult to allocate larger processes.
          </p>
          </div>
          <div className=" w-[100vw] mt-6">
            <br />
            <ul>
              <li>
                <span className="font-semibold text-logo-color">
                  First Fit:
                </span>{" "}
                It allocates the first available memory block that is large
                enough to accommodate the process.
              </li>
              <li>
                <span className="font-semibold text-logo-color">Next Fit:</span>{" "}
                It allocates the next available memory block that is large
                enough to accommodate the process starting from the last placed
                block{" "}
              </li>
              <li>
                <span className="font-semibold text-logo-color">
                  Worst Fit:
                </span>{" "}
                It allocates the largest available memory block, leaving behind
                the largest leftover fragment, which can be used later.
              </li>
              <li>
                <span className="font-semibold text-logo-color">Best Fit:</span>{" "}
                It allocates the smallest available memory block that is large
                enough to accommodate the process, minimizing wasted memory.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex h-[55%] w-[40%] pt-10">
          <br />
          <img
            src={learnlogo}
            alt=""
            className="h-[50vh] flex justify-center items-center"
          />
        </div>
      </div>

      <br />
    </div>
  );
}

export default Learn;
