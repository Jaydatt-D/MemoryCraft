import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function MemoryBlock(props) {
  const width = `${parseInt(props.size) * 0.6}px`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }} // Initial animation state (off-screen to the left)
      animate={{ opacity: 1, x: 0 }} // Animation to apply (slide in from left)
      exit={{ opacity: 0, x: -50 }} // Exit animation (slide out to the left)
      transition={{ duration: 0.5 }} // Transition duration
      style={{ width: width, minWidth:width, marginRight: "-4px" }}
      className={`${props.class} h-full bg-[#3AAFA9] border-4 border-[#2B7A78] flex ${props.childs ? 'justify-start' : 'justify-center'} items-center overflow-hidden`}
      >
      {props.childs ? props.childs : props.size}
    </motion.div>
  );
}

export default MemoryBlock;
