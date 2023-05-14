import React from 'react'
import {useAuth} from '../../lib/auth';
import Footer1 from '../../components/Footer1';
import Image from 'next/image';
import Searchbar from '../../components/indexcomps/Searchbar';
import Popup from '../../components/Popup';
import Login from '../../components/Login';
import axios from 'axios';

const Referrals = () => {
    const isAuth = useAuth();
    const [popupstate,setPopupstate] = React.useState(false);
    const[isFirstbooking,setIsFirstbooking] = React.useState(true);
    React.useEffect(() => {
      if (popupstate) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [popupstate]);
    const[referralcode,setReferralcode] = React.useState('');
    React.useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user || Object.keys(user).length === 0) {
        return;
      }
      axios.post('/api/TripsApi', {userid: user.id})
          .then((res) => {
            if(res.data.pastripsmessage==="Past Trips Found" || res.data.upcomingtripsmessage==="Upcoming Trips Found"){
              setIsFirstbooking(false);
              axios.post('/api/fertchreferralCode', {userid: user.id})
              .then((res) => {
                setReferralcode(res.data.Refferralcode);
      }) }
             });
    
    }, []);
    

    
  return (
    <>
        {isAuth &&
        <div className='flex flex-col mb-10  items-center'>
          <div className='p-10 md:w-140   flex flex-col  items-center'>
            <div className='h-20 w-20 rounded-full bg-red-300 flex justify-center items-center '>
                <Image src={`/icons/giftbox.png`} height={50} width={50} alt=''/>
            </div>
            <div className='text-5xl font-extrabold'>Invite Your Friends</div>
            <div className='text-5xl font-extrabold text-green-700'>Give $50, Get $50</div>
            <div className='flex items-center justify-center'>Your friend gets a $50 discount on their first booking and you earn $50 in GearUp credits.</div>
            <div onClick={()=>{setPopupstate(true)}} className='text-green-700 w-full flex items-center justify-center mt-3 cursor-pointer pb-5 border-b-1 border-b-gray-300'>Referral Terms & Conditions</div>
            {isFirstbooking && <div className='flex flex-col  items-center'>
              <div className='text-2xl mt-5'>Complete a Trip to Get Your Referral Code</div>
              <div className=' mt-4 text-gray-400'>Book your trip today!</div>
              <div><Searchbar/></div>
            </div>}
            {!isFirstbooking && <div className='flex flex-col mt-5  items-center'>
              <div className='text-xl font-extrabold'>Hey there! We've got some exciting news for you.</div>
              <div>Share your unique referral code with your friends and family </div>
              <div className='text-blue-600 mt-3 font-extrabold text-xl'>{referralcode}</div>
              <div className='mt-3 text-sm flex items-center justify-center'>When they use your code to book their first trip with us, you'll receive $50 GearUp credit. And the best part? Your friends will also receive a $50 discount on their first booking!</div>
              <div className='mt-5 text-green-700 font font-extrabold'>So why not share the love and start spreading the word?</div>
              <div className='text-xs mt-5'>Share your referral code with as many people as you can, and watch your GearUp credit grow. The more you share, the more you earn. It's that simple! Start sharing your referral code now and enjoy your next adventure with us.</div>
            </div>}
            
            <Popup trigger={popupstate} onClose={()=>{setPopupstate(false)}}>
              <div className='bg-white lg:w-200 rounded-2xl p-5 relative h-140 md:h-100'>
                <Image onClick={()=>{setPopupstate(false)}} src={`/icons/close.png`} height={100} width={100} className='h-6 w-6 absolute cursor-pointer'/>
                <div className='flex items-center justify-center text-lg font-extrabold text-gray-500'>Referral Terms & Conditions</div>
                <div className='ml-5 mt-5'>
                  <li>Applicable for car deliveries, pickups, or free fuel.</li>
                  <li className='mt-2'>Referrals can only be redeemed by new customers.</li>
                  <li className='mt-2'>This offer cannot be applied to previous bookings/referrals.</li>
                  <li className='mt-2'>Referral codes cannot be redeemed by members of the same household.</li>
                  <li className='mt-2'>GearUP reserves the right to change referral value at any time.</li>
                  <li className='mt-2'>Sharing referral codes on coupon aggregator websites is strictly prohibited and will result in referral credit being revoked at GearUP's discretion.</li>
                  <li className='mt-2'>Using a GearUP referral code to refer new accounts created by the same individual is strictly prohibited and will result in referral credit being revoked.</li>
                  <li className='mt-2'>GearUP reserves the right to revoke any referral credit where fraudulent behavior is detected.</li>
                </div>
                
              </div>
            </Popup>
            
          </div>
        </div>
        } 
        {!isAuth &&
        <div className=' p-10 flex flex-col md:h-100 items-center justify-center'>
          <div className='w-108'>
          <div className='flex items-center justify-center text-2xl font-extrabold'>Kyte is better with friends</div>
          <div className='mt-5 text-gray-500'>Sign up or log in to refer Kyte to your friends and family! Have fun together and get discounts on their first booking.</div>
          <button onClick={()=>{setPopupstate(true)}} className='h-12 w-full mt-10 bg-blue-600 hover:bg-blue-500 rounded-xl text-white'>Sign Up or Login</button>
        
          </div>
          <Popup trigger={popupstate} onClose={()=>{setPopupstate(false)}}>
            <div className='bg-white'><Login onClick={()=>{setPopupstate(false)}}/></div>
          </Popup>
          </div>
          
          }
          <Footer1/>
    </>
    
  )
}

export default Referrals
