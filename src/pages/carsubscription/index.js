import React,{useState} from 'react'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import Image from 'next/image'
import subscribeimage from '../../../public/images/subscribe.jpeg'
import Footer1 from '../../../components/Footer1'
import Searchbar from '../../../components/indexcomps/Searchbar'
import Fleetpreview from '../../../components/subscriptioncomps/Fleetpreview'
import Howitworks from '../../../components/subscriptioncomps/Howitworks'
import Faq from '../../../components/subscriptioncomps/Faq'
import Locations from '../../../components/indexcomps/Locations'
import Reviews from '../../../components/indexcomps/Reviews'
const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const url=`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`


const CarSubscription = () => {
  
  
  return (
    <>
    <script src={url}></script>
      <div className={`${oswald.className} lg:px-20 flex flex-row`}>
          <div className='flex w-full  px-5 lg:h-140'>
                <div className='lg:w-1/2 lg:pt-20 w-full flex  pt-10 items-center lg:items-start flex-col'>
                  <div className='flex flex-col'>
                      <div className='lg:text-5xl text-3xl flex mr-3'>Subscribe to a Car</div>
                      <div className='text-blue-600 text-2xl lg:text-4xl' >We Take Care of the Rest</div>
                  </div>
                  <div className=''>
                      <div className='lg:text-4xl flex justify-center pl-10 lg:pl-0 items-center text-2xl mt-3'>We deliver your car to you. Flexible returns and extensions. Everything included except fuel.</div>
                  </div>
                  <div className='flex py-5 w-full  items-center'>
                      <div className='border-r-2  h-full px-2 flex items-center border-r-black w-1/2 lg:w-32'>Stars</div>
                      <div className='flex flex-col lg:flex-row ml-10'>
                        <div className='text-xl lg:mr-5'>Rated 4.7 Stars by over</div>
                        <div className='text-blue-600 text-xl'>70k customers</div>
                      </div>
                  </div>
                </div>
              <div className='hidden lg:flex justify-center'>
                <Image src={subscribeimage} width={500} height={500} className='h-100 w-full'/>
              </div>
          </div>
    </div>
    <div  className={`${oswald.className}  flex flex-col`}>
      <div className='lg:px-20'><Searchbar/></div>
      <div className='px-5'><Fleetpreview/></div>
      <div className='bg-green-100'><Howitworks/></div>
      <div className='flex flex-col p-5'>
        <div className='text-blue-600 font-extrabold'>HIT THE ROAD</div>
        <div className='text-3xl'>Where is the GearUp Subscription Available?</div>
        <Locations/>
      </div>
      <div className='bg-blue-400 mt-5'><Reviews/></div>
      {/* <Faq/> */}
    </div>
    <Footer1/>
      
    </>
    
  )
}

export default CarSubscription;
