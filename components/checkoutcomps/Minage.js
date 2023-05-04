import React from 'react'
import Popup from '../Popup'
import Image from 'next/image.js';

const Minage = (props) => {
  const[thispopup,setThispopup]=React.useState(false);
  function HandlePopup(){
    setThispopup(!thispopup);
    props.Popup();

  }
  return (
    <div className='flex flex-col py-5 border-b-2 border-b-gray-500'>
      <div className='text-2xl'>Minimum age requirement</div>
      <div  onClick={HandlePopup}  className='text-blue-600 mt-5 hover:underline cursor-pointer'>Open minimum age requirement</div>
      <Popup onClose={HandlePopup} trigger={thispopup}>
          <div className='bg-white w-full h-140  md:w-200  flex p-10 px-10  relative rounded-xl overflow-scroll flex-col'>
              <Image onClick={HandlePopup}  src={`/icons/close.png`} height={100} width={100} alt='' className='h-5 w-5 absolute top-5 right-5 cursor-pointer'/>
              <div className=' font-extrabold text-3xl'>How old do I need to be to book a Car?</div>
              <div className='font-extrabold text-2xl  mt-6'>Age requirements for daily rentals (excludes Car Subscriptions)</div>
              <div className=' mt-3'>Our minimum required age in California, Florida, Illinois, Pennsylvania, Colorado, Washington, Massachusetts, Georgia, Oregon, Washington D.C. and New Jersey is 21.</div>
              <div className=' mt-3'>Our minimum required age in New York is 18 years old. </div>
              <div className='mt-3'>Drivers under the age of 25 will be charged an additional "Young Renter Fee" of $14.99 per day of rental. The value of the fee may vary by region</div>
              <div className=' mt-3'>Please note, age requirements apply to all drivers.</div>
              <div className='font-extrabold text-2xl mt-3'>Age requirements for Car Subscriptions</div>
              <div className=' mt-3'>Our minimum required age in California, Florida, Illinois, Pennsylvania, Colorado, Washington, Georgia, Oregon and Washington D.C., New Jersey is 25</div>
              <div className=' mt-3'>Our minimum required age in Massachusetts is 21 years old. </div>
              <div className=' mt-3'>Our minimum required age in New York is 18 years old. </div>
              
              
        </div></Popup>
    </div>
  )
}

export default Minage
