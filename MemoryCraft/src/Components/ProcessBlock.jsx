import React from 'react'

function ProcessBlock(props) {
    const width = `${parseInt(props.size) * 0.6}px`;
  return (
    <div style={{width:width, minWidth:width, marginRight:"-4px"}}
     className={`${props.class} h-full ${props.block ? 'bg-red-200 border-red-400' : 'bg-[#FFCB9A] border-[#D9B08C]' } rounded-xl border-2  flex justify-center items-center`}>
        <p className='text-sm w-full text-black overflow-hidden flex justify-center items-center'>{props.size}</p>
    </div>
  )
}

export default ProcessBlock
