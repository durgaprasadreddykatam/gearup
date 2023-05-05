import React,{useEffect,useState} from 'react'
import { useAuth } from '../../../lib/auth';
import data from '../../../data/Trips'
import Footer1 from '../../../components/Footer1';
import { useRouter } from 'next/router'
import axios from 'axios';
import Tripscard from './Tripscard';

const Trips = (props) => {
  const router = useRouter();
    const isAuth = useAuth();
    useEffect((

    ) => {}, [isAuth]);

    const upcomingtrips=data[0].upcomingtrips.map(item=>{
      return(
        <Tripscard item={item}/>
      )
    });
  return (

    <>
        {/* When User is Not Authenticated */}
        {!isAuth && 
          <div>
            <div className='h-100 flex flex-col items-center justify-center w-full p-5 lg:p-20 border-y-2 border-y-sky-600'>
              <div className='text-2xl'>Have Fun Booking a car</div>
              <div className='text-2xl mt-10'>Sign up or log in to plan your next trip with Us.</div>
              <button onClick={()=>{router.push('/signup')}} className='h-12 w-60 text-white bg-blue-500 rounded-xl mt-10'>Sign Up</button>


            </div>

            <Footer1/>
          </div>
      }
    {isAuth && 
    <div className='flex flex-col p-2 lg:p-20'>
      <div>
        <div className='text-3xl mb-5'>Upcoming Trips</div>
        {upcomingtrips}
        
      </div>
      
      <div className='text-3xl mt-10'>Past Trips</div>

    </div>
    }
    </>
    
  )
}

export default Trips
