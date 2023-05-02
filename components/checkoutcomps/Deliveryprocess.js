import React from 'react'
import Image from 'next/image.js';

const Deliveryprocess = () => {
  return (
    <div className='flex flex-col py-5 pb-10 border-b-2 border-b-gray-500'>
        <div className='flex items-center'>
            <Image src={`/icons/timer.png`} alt='' height={90} width={90} className='h-8 w-8'/>
            <div className='ml-4 text-2xl font-extrabold'>Delivery process</div>
        </div>
        <div className='mt-3'>Your  Delivery Partner will wait 10 minutes upon arrival . We will keep you updated on your surfer's estimated arrival time through text and/or push notifications. Enjoy your trip!</div>
        <div className='mt-5 text-blue-500 text-extrabold cursor-pointer text-lg'> See Details</div>
      
    </div>
  )
}

export default Deliveryprocess
