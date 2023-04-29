import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import uparrow from '../../../public/icons/uparrow.png'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import data from '../../../data/FaqsPagesdata.js'

const Carrental = () => {
    const questionsrender = data.map((item)=>{
        return(
            <div key={item.id} className='p-3 border-2 rounded-lg w-full mt-4 lg:w-240'>
                <span className='text-2xl'>{item.section}</span>
                <div>
                    {item.questions.map((question)=>{
                    return(
                            <div key={question.id} className='flex flex-col'>
                                <span className='my-2 cursor-pointer hover:text-sky-500'>{question.question}</span>
                            </div>
                            )
                                    })}
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
                    <span>Car Rental</span>
                </div>
                <div className='text-2xl h-16 font-extrabold'>Car Rental</div>
                <span>Need a car for less than a month? We got you and even deliver it to you!</span>
            </div>
            {questionsrender}
        </div>
    </>
    
  )
}

export default Carrental
