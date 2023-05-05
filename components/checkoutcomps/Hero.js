import React from 'react'
import Image from 'next/image'

const Hero = (props) => {
  return (
    <div>
        <div className='flex justify-between pb-5 border-b-gray-400 border-b-2 lg:border-b-0'>
           <div className='flex lg:hidden flex-col'>
               <div className='text-xl'>{props.checkoutdata.catogary}</div>
                <div className='text-sm text-slate-500'>{props.checkoutdata.capacity} Seats.{props.checkoutdata.luggage} suitcases</div>
                <div className='mt-5 text-blue-500 font-extrabold cursor-pointer hover:underline'>Change Car</div>
            </div>
            <div className='h-24 w-36  flex lg:w-full lg:px-10  justify-between lg:h-100 rounded-xl'>
                <Image src={`/images/cars/subscriptioncars/${props.checkoutdata.catogary}1.jpeg`} className='h-24 w-36 lg:w-2/3 lg:h-100 rounded-xl' width={1000} height={1000} alt=''/>
                <div className='hidden lg:flex   flex-col'>
                    <div className='text-5xl'>{props.checkoutdata.catogary}</div>
                    <div className='text-sm text-slate-500'>{props.checkoutdata.capacity} Seats.{props.checkoutdata.luggage} suitcases</div>
                    <div className='text-white h-12 w-44 rounded-xl bg-blue-500 flex items-center justify-center mt-20 cursor-pointer'>Change Car</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
