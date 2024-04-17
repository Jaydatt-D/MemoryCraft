import React from 'react'

function Input(props) {
  return (
    <div className='flex flex-col gap-2'>
        <p className=' font-medium'>{props.heading}:</p>
        <input 
            value={props.value}
            className='bg-slate-400 remove-arrow w-[300px] h-[40px] text-white placeholder:text-gray-300 pl-2 border-none rounded-lg outline-offset-0 outline-current'
            type={props.type}
            onChange={(e)=>{
                props.setData(e.target.value);
            }}
            placeholder={props.placeholder}
            min='0'
        />
    </div>
  )
}

export default Input
