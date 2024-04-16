import React from 'react'

function MemoryBlock(props) {
    const width = `${parseInt(props.size) * 0.6}px`;
  return (
    <div style={{width:width, marginRight:"-4px"}}
     className={`h-full bg-blue-400 border-4 border-blue-500 flex justify-center items-center`}>
        <p className='text-sm w-full overflow-hidden flex justify-center items-center'>{props.size}KB</p>
    </div>
  )
}

export default MemoryBlock
