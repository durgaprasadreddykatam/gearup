import dropdown from '../public//icons/dropdown.png'
import Image from 'next/image';
import { Oswald,Concert_One } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
const concert_one = Concert_One({ subsets: ['latin'], weight:'400' });
import React, { useState,useEffect } from 'react';
import { debounce } from 'lodash';


const Footer1 = () => {
  const [show, setShow] = useState({ company: false, resources: false, download: false, connect: false });
//has to use use effect to set show value to true when window with ids greater than md
    function toggleshow(e) {   
    setShow({...show, [e.target.name]: !show[e.target.name]});
  }
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 768) {
  //       setShow({ company: true, resources: true, download: true, connect: true });
  //     } else {
  //       setShow({ company: false, resources: false, download: false, connect: false });
  //     }
  //   };
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  //   },[window.innerWidth]);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth > 768) {
        setShow({ company: true, resources: true, download: true, connect: true });
      } else {
        setShow({ company: false, resources: false, download: false, connect: false });
      }
    }, 100); // set the debounce time to 100ms

    handleResize(); // call handleResize initially

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
   <>
        <div className={`flex flex-col justify-around border-t-2 border-t-slate-500 pt-5 md:flex-row  ${oswald.className}`}>
            <div  className='hidden w-80 pl-20 flex-col md:flex flex-shrink-0'>
                <div className={`text-3xl mb-5 text-sky-600 ${concert_one.className} `}>GearUp.</div>
                <div className='mb-4 text-sm'>&copy; Copyright 2023 Gearup</div>
                <div className='mb-4 text-sm'>All rights reserved.</div>
            </div>
            <div className='flex px-20 md:p-0 md:mr-10 flex-col flex-shrink-0'>
                <div className='flex  text-xl mb-3 items-center justify-between'>
                    <span>Company</span>
                    <Image onClick={toggleshow} 
                            name='company' 
                            className={`block cursor-pointer md:hidden h-4 w-4 ${show.company ?`rotate-180`:``}`}
                            src={dropdown} 
                            height={90} 
                            width={90} 
                            alt=''
                            />
                </div>
                {show.company && <div className='flex flex-col'>
                                <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Blog</div>
                                <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Careers</div>
                                <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Team & Culture</div>
                                <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Privacy policy</div>
                                <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Terms of Service</div>
                    
                        </div>}
                
            </div>
            <div className='flex px-20 md:p-0 md:mr-10 flex-col flex-shrink-0'>
                <div className='flex  text-xl mb-3 items-center justify-between'>
                    <span>Resources</span>
                    <Image onClick={toggleshow} 
                            name='resources' 
                            className={`block cursor-pointer md:hidden h-4 w-4 ${show.resources ?`rotate-180`:``}`}
                            src={dropdown} 
                            height={90} 
                            width={90} 
                            alt=''
                            />
                </div>
                {show.resources && <div className='flex flex-col'>
                            <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Accessibility</div>
                            <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Become a Driver Partner</div>
                            <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Car Subscription</div>
                            <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Tesla subscription</div>
                            <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Referrals</div>
                            <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Partner With Us</div>
                    
                        </div>}
                
            </div>
            <div className='flex px-20 md:p-0 md:mr-10 flex-col flex-shrink-0'>
                <div className='flex  text-xl mb-3 items-center justify-between'>
                    <span>Download</span>
                    <Image onClick={toggleshow} 
                            name='download' 
                            className={`block cursor-pointer md:hidden h-4 w-4 ${show.download ?`rotate-180`:``}`}
                            src={dropdown} 
                            height={90} 
                            width={90} 
                            alt=''
                            />
                </div>
                {show.download && <div className='flex flex-col'>
                            <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>For Android</div>
                            <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>For iOS</div>
                    
                        </div>}
                
            </div>
            <div className='flex px-20 md:p-0 md:mr-10 flex-col flex-shrink-0'>
                <div className='flex  text-xl mb-3 items-center justify-between'>
                    <span>Connect</span>
                    <Image onClick={toggleshow} 
                            name='connect' 
                            className={`block cursor-pointer md:hidden h-4 w-4 ${show.connect ?`rotate-180`:``}`}
                            src={dropdown} 
                            height={90} 
                            width={90} 
                            alt=''
                            />
                </div>
                {show.connect && <div className='flex flex-col'>
                                <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Facebook</div>
                                <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Twitter</div>
                                <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Linkedin</div>
                                <div className='mb-3 cursor-pointer text-gray-600 font-bold hover:underline underline-offset-4'>Instagram</div>
                    
                        </div>}
                
            </div>
            <div  className='block md:hidden mt-10 w-80 pl-20 flex-col flex-shrink-0'>
                <div className={`text-3xl mb-5 text-sky-600 ${concert_one.className} `}>GearUp.</div>
                <div className='mb-4 text-sm'>&copy; Copyright 2023 Gearup</div>
                <div className='mb-4 text-sm'>All rights reserved.</div>
            </div>

      
        </div>
   </>
  )
}

export default Footer1
