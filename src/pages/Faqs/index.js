import React from 'react'
import bgimage from '../../../public/images/faqpage.jpeg'
import Image from 'next/image'
import hummer from '../../../public/icons/hummer.png'
import subscribe from '../../../public/icons/subscribe1.png'
import Link from 'next/link'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })

const Faq = () => {
  return (
    <>
        <div className={`${oswald.className}`}>
            <div>
              {/* <Image className='w-full h-140' src={bgimage}/> */}
            </div>
            <div className='flex p-5 flex-col items-center justify-center mt-3 rounded-sm '>
              <div className='flex rounded-xl h-52 p-3 lg:w-200 border-2  items-center'>
                <div className='lg:mx-10 mr-2 flex flex-shrink-0'><Image src={hummer} alt='' height={90} width={90}/></div>
              <div className='rounded-md flex flex-col h-32 p-3 lg:w-200'>
                <Link href='/Faqs/carrental'><div className='text-xl font-bold cursor-pointer hover:text-sky-500 hover:underline hover:underline-offset-2'>Car Rental</div></Link>
                  <span className='mt-2'>Need a car for Less than a Month? We Got You and Even Deliver it to You !</span>
                  <span className='text-xs mt-10'> articles</span>
              </div>
              </div>
            </div>
            <div className='flex p-5 flex-col items-center justify-center mt-3 rounded-sm '>
              <div className='flex rounded-xl h-52 p-3 lg:w-200 border-2  items-center'>
                <div className='lg:mx-10 mr-2 flex flex-shrink-0'><Image src={subscribe} alt='' height={90} width={90}/></div>
              <div className='rounded-md flex flex-col h-32 p-3 lg:w-200'>
              <Link href='/Faqs/carsubscription'><div className='text-xl font-bold cursor-pointer hover:text-sky-500 hover:underline hover:underline-offset-2'>Car Subscriptions</div></Link>
                  <span className='mt-2'>Need a car for Longer than a Month? All you need to know here</span>
                  <span className='text-xs mt-10'> articles</span>
              </div>
              </div>
            </div>
            
        </div>
    </>
    
  )
}

export default Faq
