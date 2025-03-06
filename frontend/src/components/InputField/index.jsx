import React from 'react'

const inputField = ({label , Icon, required}) => {
  return (
    <>
    <div className='flex flex-col w-full  gap-3'>
    <label htmlFor={`${label}`}>{label} <span className='text-red-600'> {(required == true ? "*" : "")}</span></label>
    <div className='w-100 relative '>
    <input type={label} className='p-2 pl-10 border border-1 rounded border-gray-400 w-full focus:border-primary-500 focus:outline-none'  placeholder={`Enter your ${label}`}/> 
    <Icon color="#28A745" className='absolute left-0 top-2 ml-1'></Icon>
    </div>
    </div>
    </>
  )
}

export default inputField
