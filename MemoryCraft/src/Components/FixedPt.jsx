import React, { useState } from 'react'
import Input from './Input'
import Button from './Button';

function FixedPt() {
    const memory = []
    const [size, setSize] = useState(0);
    const addMemory = () => {
        if(size <= 0){
            alert('Enter a Valid Size');
        }else{
            memory.push(size);
        } 
    }
  return (
    <div className='h-[100vh] w-full'>
        <div className='w-full flex flex-col items-center justify-center'>
        <div className='text-3xl flex items-center justify-start font-semibold w-full pl-52 text-logo-color'>Memory</div>
        <div className='flex gap-3'>
            <Input
            type='number'
            heading='Enter Partition Size'
            setData={setSize}
            placeholder='100KB'
            />
        <div className='pt-8'>
        <Button name='Add' x='50px' y='40px' func={addMemory}/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default FixedPt