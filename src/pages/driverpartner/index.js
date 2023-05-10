import React from 'react'
import image from '../../../public/images/cars/rent.webp'
import carbg from '../../../public/images/cars/carbg.png'
import keys from '../../../public/images/cars/keys.png'
import clock from '../../../public/images/cars/clock.png'
import Image from 'next/image'
import Footer1 from '../../../components/Footer1'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import earnmore from '../../../public/images/cars/earnmore.png'
import mobile from '../../../public/images/cars/mobile.png'
import plan from '../../../public/images/cars/plan.png'
import Link from 'next/link'
const Driverpartner = () => {
  return (
    <>
      <div className={`flex flex-col  ${oswald.className}`}>

              {/* Become a Driver Partner */}
          <div className='flex mt-16 p-5 justify-center items-center'>
          <span className='text-5xl '>Become a Driver Partner</span>
          </div>
          <div className='flex mt-5 justify-center items-center'>
          <span className='text-3xl font-extrabold '>Earn More With Flexible Hours</span>
          </div>
          <div className='flex mt-5 p-5 justify-center items-center flex-col md:flex-row'>
                <div className='flex flex-col justify-center items-center mt-10'>
                  <div className=' flex  text-2xl w-80'>Earn by delivering and returning rental cars when you want. The best part is, you don't need a car!</div>
                  <Link  target='_blank' href='/partnerSignup'>
                  <button className='h-12 rounded-xl mt-10 mb-3 w-40 bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center'>SignUp</button>
                  </Link>
                  
                  <span>Takes less than 5 minutes!</span>
                </div>
                <Image src={image} className='h-80 md:ml-20 w-120'/>
          </div>

            {/* How It Works */}

          <div className='w-full  bg-sky-100'>
              <div className='flex mt-10 items-center justify-center'>
                <span className='text-5xl font-extrabold'>How It Works</span>
              </div>
              <div className='flex mt-10 items-center justify-center flex-col text-lg lg:flex-row'>
                <div className='p-10 flex items-center flex-shrink-0 flex-col'>
                  <Image src={clock} height={300} width={300} className='h-80 w-80'/>
                  <div className='w-60 pt-2'>Earn when you choose. Easily select trips based on time, location and earnings amount. </div>
                </div>
                <div className='p-10 flex items-center flex-col'>
                    <div className='h-72 w-72 flex items-center justify-center bg-blue-300 rounded-full'>
                      <Image src={carbg} height={300} width={300} className='h-60'/>
                    </div>
                    <div className='w-60 pt-10'>Start by delivering a car from our lot or by picking up a car at a customer's address. </div>
                </div>
                <div className='p-10 flex items-center flex-col'>
                    <div className='h-72 w-72 flex items-center justify-center bg-blue-300 rounded-full'>
                          <Image src={keys} height={300} width={300} className='h-60 rounded-full'/>
                    </div>
                    <div className='w-60 pt-10'>End by delivering the car to the customer or returning a car to our lot. It's easy!</div>
                </div>
              </div>
              <div className='flex mt-10 items-center justify-center'>
                  <Link  target='_blank' href='/partnerSignup'>
                      <button className='h-12 rounded-xl mt-10 mb-3 w-40 bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center'>SignUp</button>
                  </Link>
              </div>
          </div>


            {/* why choose us */}
          <div className='w-full p-5 '>
              <div className='flex mt-10 items-center justify-center'>
                <span className='text-4xl sm:text-5xl font-extrabold'>Why Earn with GearUp</span>
              </div>
              <div className='flex mt-5 flex-col justify-center md:flex-row'>
                  <div className='flex  items-center justify-center flex-col text-lg md:flex-row'>
                    <div className=' flex items-center flex-col'>
                      <Image src={earnmore} height={300} width={300} className='h-60 w-60'/>
                      <div className='text-2xl sm:text-3xl font-extrabold mb-4'>Get on the Road and Earn More</div>
                      <div className='w-60 md:h-60 pt-2'>With Gearup's car rental platform, you can complete more trips and maximize your earnings! Our competitive rates ensure that you earn more per trip.</div>
                    </div>
                  </div>

                  <div className='flex  items-center justify-center flex-col text-lg md:flex-row'>
                    <div className=' flex items-center  flex-col'>
                      <Image src={mobile} height={300} width={300} className='h-60 w-72 mx-8'/>
                      <div className='text-2xl sm:text-3xl font-extrabold mb-4'>No Car Needed</div>
                      <div className='w-60 md:h-60 pt-2'>Don't own a car? No worries! With Gearup's car rental platform, you can rent a car to start earning immediately. No need to worry about maintenance costs or other expenses associated with owning a car.</div>
                    </div>
                  </div>

                  <div className='flex  items-center justify-center flex-col text-lg md:flex-row'>
                    <div className='flex items-center flex-col'>
                      <Image src={plan} height={300} width={300} className='h-60 w-72'/>
                      <div className='text-2xl sm:text-3xl font-extrabold mb-4'>Plan Your Trips Ahead</div>
                      <div className='w-60 md:h-60 pt-2'>Select trips and plan your schedule in advance to secure your earnings! With Gearup's car rental platform, you can choose the trips that fit your schedule and preferences. Plan ahead to make the most out of your rental and earnings potential.</div>
                    </div>
                  </div>
              </div>
              
          </div>
          {/* how to signup */}

          <div className='w-full p-5  bg-sky-100'>
              <div className='flex mt-10 flex-col items-center justify-center'>
                <span className='text-4xl font-extrabold mb-10'>How to Sign Up</span>
                <span className='md:text-3xl md:w-180'>Complete an application, attend an onboarding session and you are ready to start earning! You must be 25+ years old and have a valid driver's license.</span>
                <Link  target='_blank' href='/partnerSignup'>
                      <button className='h-12 rounded-xl mt-10 mb-3 w-40 bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center'>SignUp</button>
                </Link>
              </div>
          </div>
          {/* reviews */}
          <div className='flex p-5 flex-col justify-center items-center'>
            <span className='text-4xl'>Users already love Gearup!</span>
            <span className='md:w-200 px-10 mt-10 text-xl'>With Gearup, you can easily rent a car and start earning as a driver. Our rates are above industry average, so you can earn more per trip. Forget about the costs of owning a personal vehicle and enjoy the convenience of renting a car with Gearup. Plus, you can plan your trips ahead by selecting them and scheduling your work week in advance to secure your earnings. Join the growing community of Gearup users and start earning today!"</span>
            <div className='flex mt-5 text-white text-sm items-center justify-center flex-wrap'>
              <div className='h-60 m-5 w-80 sm:w-60 bg-blue-400 p-5 rounded-xl relative'>
                <div className='text-amber-300'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <div>"I've been working as a car delivery agent for several years now and I have to say that this platform is the best one I've ever used. The app is user-friendly, the rates are competitive, and the support team is always there to help. I highly recommend it!"</div>
                <div className='absolute bottom-4'>Rachel Nguyen</div>
              </div>
              <div className='h-60 m-5 w-80 sm:w-60 bg-blue-400 p-5 rounded-xl relative'>
                <div className='text-amber-300'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <div>"Working as a car delivery agent for this platform has been a great experience so far. I've been able to earn a good income while enjoying the flexibility of choosing my own schedule. Plus, the process of renting a car is super easy and convenient."</div>
                <div className='absolute bottom-4'>Michael Thompson</div>
              </div>
              <div className='h-60 m-5 w-80 sm:w-60 bg-blue-400 p-5 rounded-xl relative'>
                <div className='text-amber-300'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <div>"I'm really impressed with the level of support that this platform provides to car delivery agents. Whenever I have a question or issue, I can always count on the support team to respond quickly and help me out. It really makes a difference!"</div>
                <div className='absolute bottom-4'>Samantha Patel</div>
              </div>
              <div className='h-60 m-5 w-80 sm:w-60 bg-blue-400 p-5 rounded-xl relative'>
                <div className='text-amber-300'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <div>"The rates on this platform are excellent and I've been able to earn a good income by delivering cars. Plus, the app is really intuitive and easy to use. I love how I can see all my trips and earnings in one place. Highly recommend!"</div>
                <div className='absolute bottom-4'>Daniel Lee</div>
              </div>
              
            </div>
          </div>
        
      </div>
      <Footer1 />
    </>
    
  )
}

export default Driverpartner

Driverpartner.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}
