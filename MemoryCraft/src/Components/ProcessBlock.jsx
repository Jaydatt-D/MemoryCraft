import React from 'react'

function ProcessBlock(props) {
    const width = `${parseInt(props.size) * 0.6}px`;
  return (
    <div style={{width:width, marginRight:"-4px"}}
     className={`h-full bg-amber-300 rounded-xl border-4 border-amber-500 flex justify-center items-center`}>
        <p className='text-sm w-full text-black overflow-hidden flex justify-center items-center'>{props.size}KB</p>
    </div>
  )
}

export default ProcessBlock
