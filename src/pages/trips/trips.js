import React,{useEffect,useState} from 'react'
import { useAuth } from '../../../lib/auth';

const Trips = () => {
    const isAuth = useAuth();
  return (
    <>
        {isAuth && <div>
        This is Trips Page
        </div>}
    </>
    
  )
}

export default Trips
