import React,{useEffect,useState}  from 'react'
import { useAuth } from '../../../lib/auth';

const Account = () => {
    const isAuth = useAuth();

  return (
    <>
            {isAuth&& <div>
            This is Accounts Page
            </div>}
    </>
    
  )
}

export default Account
