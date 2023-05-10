import React from 'react'
import Image from 'next/image'

const Howitworks_sub = (props) => {
  
  return (
    <div className='w-60 flex-shrink-0 lg:w-60 mt-10 mr-3'>
      {props.item.image ? (<Image  width={150} height={150} src={props.item.image.src} alt="" className="h-40 w-52" />) : (<div className="h-40 w-52 bg-gray-300"></div>)}
      <div className='font-extrabold text-2xl mt-3 mb-2'>{props.item.title}</div>
      <div className='text-sm'>{props.item.text}</div>
      
    </div>
  )
}

export default Howitworks_sub
