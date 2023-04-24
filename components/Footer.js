import React from 'react'
import dropdown from '../public//icons/dropdown.png'
import Image from 'next/image';
import { Oswald,Concert_One } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
const concert_one = Concert_One({ subsets: ['latin'], weight:'400' });

const Footer = () => {
  return (

    <>
              {/* ------------------------------------------------------------------------------------------------------------ */}
              {/* this is where view changes for device less than md size */}

              <div className={`p-5 block lg:hidden border-t-2 border-gray-300 ${oswald.className}`}>
                <div className='flex text-xl mt-20 mb-5 justify-between items-center'>
                    <span>Company</span>
                    <Image className='h-4 w-4' src={dropdown} height={90} width={90} alt=''/>
                </div>
                <div className='flex text-xl mt-5 mb-5 justify-between items-center'>
                  <span>Resources</span>
                  <Image className='h-4 w-4' src={dropdown} height={90} width={90} alt=''/>
                </div>
                <div className='flex text-xl mt-5 mb-5 justify-between items-center'>
                  <span>Download</span>
                  <Image className='h-4 w-4' src={dropdown} height={90} width={90} alt=''/>
                </div>
                <div className='flex text-xl mt-5 mb-5 justify-between items-center'>
                  <span>Connect</span>
                  <Image className='h-4 w-4' src={dropdown} height={90} width={90} alt=''/>
                </div>
            
                <div className={`text-3xl mb-5 text-sky-600 ${concert_one.className} `}>GearUp.</div>
                <div className='flex flex-col text-xl mb-5'>
                  <span>&copy; Copyright 2023 Gearup</span>
                  <span>All rights reserved.</span>
                  </div>
              </div>

              {/* ------------------------------------------------------------------------------------------------------------ */}

              {/* this is where view changes for device more than md size */}

              <div className={`p-5 hidden  lg:block border-t-2 border-gray-300 ${oswald.className}`}>
                <div className='flex'>
                  <div className='w-100 flex-col flex'>
                      <div className={`text-3xl mb-5 text-sky-600 ${concert_one.className} `}>GearUp.</div>
                      <div className='mb-4 text-sm'>&copy; Copyright 2023 Gearup</div>
                      <div className='mb-4 text-sm'>All rights reserved.</div>
                  </div>
                  <div className='w-60 flex-col flex'>
                    <div className='mb-6 font-extrabold'>Company</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Blog</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Careers</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Team & Culture</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Privacy policy</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Terms of Service</div>
                  </div>
                  <div className='w-60 flex-col flex'>
                    <div className='mb-6 font-extrabold'>Resources</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Accessibility</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Become a Driver Partner</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Car Subscription</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Tesla subscription</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Referrals</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Partner With Us</div>
                  </div>
                  <div className='w-60 flex-col flex'>
                        <div className='mb-6 font-extrabold'>Download</div>
                        <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>For Android</div>
                        <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>For iOS</div>
                  </div>
                  <div className=' flex-col flex'>
                    <div className='mb-6 font-extrabold'>Connect</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Facebook</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Twitter</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Linkedin</div>
                    <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Instagram</div>
                  
                  </div>
                </div>
                
              </div>
    </>
    
  )
}

export default Footer
