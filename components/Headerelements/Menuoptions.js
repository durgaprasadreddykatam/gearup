import React from 'react'
import { Concert_One ,Inter, Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
const concert_one = Concert_One({ subsets: ['latin'], weight:'400' });

const Menuoptions = (props) => {
  return (
    <div className='flex cursor-pointer flex-col p-5'>
      <span onClick={props.menuClick} className='absolute cursor-pointer text-3xl font-bold text-zinc-400 right-4 top-4'>X</span>
      <div className={`m-3 text-3xl text-sky-600 ${concert_one.className} `}>Gear Up</div>
      <span onClick={props.DriverPartner} className='mt-10 m-3'>Become a Driver Partner</span>
      <span onClick={props.CarSubscription} className='m-3'>Car Subscription</span>
      <span onClick={props.FAQ} className='m-3'>FAQ</span>
      <span onClick={props.SignUp}   className='m-3'>Sign up | Login</span>
      <span className='m-3'>Settings</span>
    </div>
  )
}

export default Menuoptions
