import React from 'react'
import close from '../../public/icons/close.png'
import Image from 'next/image'

const CalenderforSearch = (props) => {
  return (
    <div className='absolute z-10 bg-white bottom-0 h-full w-full'>
      <div className='flex items-center justify-center'>
      <Image className=' absolute left-3 cursor-pointer' src={close} width={30} height={30}/>
      <span className='ml-30'>Date & Time</span>
      </div>
      
      Calender
    </div>
  )
}

export default CalenderforSearch
