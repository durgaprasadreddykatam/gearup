import React from 'react'
import data from '../../data/Fleetdata'
import Image from 'next/image'

const Fleet = () => {
    const fleetrender=data.map((item =>{
        return(
            <div key={item.id} className='flex cursor-pointer flex-col  justify-center items-center flex-shrink-0 m-3 '>
              <div className='text-blue-600 mb-3 font-extrabold text-xl hover:underline hover:underline-offset-2'>{item.name}</div>
              <Image src={item.image} height={200} alt='' width={200} className='h-60 w-80 rounded-xl'/>
              <div>Starting From: {item.price}/day</div>
              <div className='w-80 text-lg'>Available Models </div>
              <div className='text-sm w-80'>{item.available_cars.join(", ")}</div>



            </div>
        )
    }))
  return (
    <div className='mt-10 flex  flex-col'>
     <span className='text-3xl'>Explore our fleet of stylish and reliable cars</span>
     <div className='flex flex-wrap p-5 justify-around'>
        {fleetrender}
     </div>

    </div>
  )
}

export default Fleet
