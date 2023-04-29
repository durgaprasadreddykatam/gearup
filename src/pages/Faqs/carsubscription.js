import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import uparrow from '../../../public/icons/uparrow.png'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import data from '../../../data/faqpagescarsubscriptiondata.js'

const CarSubscription = () => {
    const questionsrender = data.map((item)=>{
        return(
            <div key={item.id} className='p-3 border-2 rounded-lg w-full mt-4 lg:w-240'>
                <div>
                    <span className='my-2 cursor-pointer hover:text-sky-500'>{item.question}</span>
                </div>
            </div>
        )
    })

  return (
    <>
        <div className={`p-5 flex flex-col items-center justify-center ${oswald.className}`}>
            <div className='flex flex-col w-full lg:w-240'>
                <div className='flex h-28 text-sm items-center'>
                    <Link href='/Faqs'><span className=' cursor-pointer hover:text-sky-500 hover:underline hover:underline-offset-2'>All Collections</span></Link>
                    <Image src={uparrow} alt=''height={90} width={90} className='rotate-90 ml-1 h-3 w-3'/>
                    <span>Car Subscription</span>
                </div>
                <div className='text-2xl h-16 font-extrabold'>Car Subscription</div>
                <span>Need a car for Longer than a Month? All you need to know here</span>
            </div>
            {questionsrender}
        </div>
    </>
  )
}

export default CarSubscription
