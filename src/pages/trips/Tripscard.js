import React from 'react'
import Image from 'next/image'

const Tripscard = (props) => {
  return (
    <div className='w-full lg:h-60 rounded-xl mb-4 border-1 p-2 bg-slate-100 lg:p-4'>
        <div className='flex  lg:flex-col justify-between'>
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:w-1/4 text-sm'>
                {/* <div>TripId:{props.item.tripid}</div> */}
                <div className='text-2xl'>{props.item.car_class}</div>
                <div>Coverage :{props.item.Coverage_selected}</div>
                <div>Trip Duration: {props.item.no_of_days} Days</div>
                {props.item.Unlimited_miles_selected && <div className='hidden lg:flex'>Unlimited Miles Selected for this Trip</div>}
                <div>Amount Paid:${props.item.amount_paid}</div>
            </div>
            <div className='lg:w-1/4 text-sm'>
                <div className='w-1/2'>Delivery Date:{props.item.Delivery_date}</div>
                <div className='w-1/2'>Delivery Address {props.item.DeliveryAddress}</div>
            </div>
            <div className='lg:w-1/4 text-sm'>
                <div className='w-1/2'>Return Date:{props.item.Return_date}</div>
                <div className='w-1/2'>Return Address{props.item.ReturnAddress}</div>
            </div>
            <div className='hidden lg:flex lg:w-1/4 flex-shrink-0'>
                <Image src={`/images/cars/subscriptioncars/${props.item.car_class}1.jpeg`} alt='' height={1000} width={1000} className='flex flex-shrink-0h-46 w-80 rounded-xl'/>
            </div>
            
        </div>
        <Image src={`/images/cars/subscriptioncars/${props.item.car_class}1.jpeg`} alt='' height={1000} width={1000} className='flex lg:hidden flex-shrink-0 h-20 sm:h-28 sm:w-40 md:h-40 md:w-60  w-32 rounded-xl'/>

        </div>
        
      
    

        
        
     
      
    </div>
  )
}

export default Tripscard
