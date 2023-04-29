import React from 'react'
import {useAuth} from '../../lib/auth';
import Footer1 from '../../components/Footer1';

const Referrals = () => {
    const isAuth = useAuth();
    
  return (
    <>
        {isAuth &&<div>
      This is referral
     </div>}
     <Footer1/>
    </>
    
  )
}

export default Referrals
