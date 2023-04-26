import React from 'react'
import Link from 'next/link'
import { Concert_One ,Inter, Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
const concert_one = Concert_One({ subsets: ['latin'], weight:'400' });

const Menuoptions = (props) => {
  return (
    // Samller Screens
    <div className='flex cursor-pointer flex-col p-5'>
      <span onClick={props.menuClick} className='absolute cursor-pointer text-3xl font-bold text-zinc-400 right-4 top-4'>X</span>
      <div className={`m-3 text-3xl text-sky-600 ${concert_one.className} `}>GearUp</div>
      <span onClick={props.menuClick} className='mt-10 m-3 hover:underline hover:underline-offset-2'><Link href='/driverpartner'   target='_blank' >Become a Driver Partner</Link></span>
      <span onClick={props.menuClick} className='m-3 hover:underline hover:underline-offset-2'><Link href='/carsubscription'>Car Subscription</Link></span>
      <span onClick={props.menuClick} className='m-3 hover:underline hover:underline-offset-2'><Link href='/Faqs'>FAQ</Link></span>
      <span onClick={props.menuClick}   className='m-3 hover:underline hover:underline-offset-2'><Link href='/signup'>Sign up | Login</Link></span>
      <span className='m-3'>Settings</span>
    </div>
  )
}

export default Menuoptions
