import React,{useState} from 'react'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })


const CarSubscription = () => {
  
  
  return (
    <>
    <div className={`${oswald.className}`}>
      This is Car Subscription page

    </div>
      
    </>
    
  )
}

export default CarSubscription;
