import React from 'react'

export default function SerCard({image , heading , description}) {
  return (
    <div className=' glass p-3  hover:scale-105 transition-all duration-300 rounded-xl flex flex-col justify-center items-center max-w-56 mb-10'>
        <div className='h-32 w-32 border  rounded-full'>
            <img className='h-32 w-32 rounded-full' src={image} alt="" />
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h3 className="text-xl font-bold">{heading}</h3>
            <p className='text-center mt-2'>{description}</p>
        </div>
    </div>
  )
}
