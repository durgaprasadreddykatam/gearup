import React from 'react'
import Image from 'next/image'

const TripscardLoading = () => {
  return (
    <div className='w-full  lg:h-60 rounded-xl mb-4 border-1 p-2 bg-slate-200 lg:p-4'>
        <div className='flex  lg:flex-col justify-between'>
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:w-1/4 text-sm'>
                {/* <div>TripId:{props.item.tripid}</div> */}
                <div className='text-2xl'></div>
                <div className='w-60 bg-slate-500 m-4 animate-pulse h-5 rounded-xl'></div>
                <div className='w-60 bg-slate-500 m-4 animate-pulse h-5 rounded-xl'></div>
                <div className='hidden lg:flex w-40 m-4 bg-slate-500 animate-pulse h-5 rounded-xl '></div>
                <div className='w-20 bg-slate-500 m-4 animate-pulse h-5 rounded-xl'></div>
            </div>
            <div className='lg:w-1/4 text-sm'>
                <div className='w-1/2  bg-slate-500 m-4 animate-pulse h-5 rounded-xl'></div>
                <div className='w-1/2  bg-slate-500 m-4 animate-pulse h-5 rounded-xl'></div>
            </div>
            <div className='lg:w-1/4 text-sm'>
                <div className='w-1/2 bg-slate-500 m-4 animate-pulse h-5 rounded-xl'></div>
                <div className='w-1/2 bg-slate-500 m-4 animate-pulse h-5 rounded-xl'></div>
            </div>
            <div className='hidden lg:flex lg:w-1/4 flex-shrink-0'>
                <div className='flex flex-shrink-0h-46 w-80 rounded-xl border-1 bg-slate-500  animate-pulse'></div>
                
            </div>
            
        </div>

        </div>
        
      
    

        
        
     
      
    </div>
  )
}

export default TripscardLoading
