import React from 'react'

const Howitworks = () => {
  return (
    <div className=' p-1 my-10 p-5'>
      <div className='text-blue-600'>Car Subscription</div>
      <div className='text-2xl'>How It Works</div>
      <div className='text-2xl mt-5 text-blue-600'>In Three Simple Steps</div>
      <div className='flex flex-col  mt-5 lg:flex-row'>
        <div className='w-full flex flex-col p-3 lg:w-1/3'>
          <div className='text-2xl flex items-center justify-center h-10 w-10 text-amber-500 font-extrabold bg-amber-100 rounded-xl'>1</div>
          <div className='mt-3 text-2xl'>Tell Us Where & When</div>
          <div>We operates in 17 cities and delivers the car right to your doorstep. Check out our service areas to select a delivery address</div>

        </div>
        <div className='w-full flex flex-col p-3 lg:w-1/3'>
          <div className='text-2xl flex items-center justify-center h-10 w-10 text-blue-700 font-extrabold bg-blue-100 rounded-xl'>2</div>
          <div  className='mt-3 text-2xl'>Choose What’s Included</div>
          <div>Registration, maintenance, and access to roadside assistance is included. Choose the mileage and insurance setup that best fits your needs.</div>

        </div>
        <div className='w-full flex flex-col p-3 lg:w-1/3'>
        <div className='text-2xl flex items-center justify-center h-10 w-10 text-purple-700 font-extrabold bg-red-100 rounded-xl'>3</div>
          <div  className='mt-3 text-2xl'>Enjoy Your Car Hassle-Free</div>
          <div>Use the car for as long as you need and extend or cancel anytime. Our support team is available via in-app chat.</div>

        </div>
      </div>
    </div>
  )
}

export default Howitworks
