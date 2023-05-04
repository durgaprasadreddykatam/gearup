import React, { useEffect } from 'react'
import Popup from '../Popup'
import Image from 'next/image.js';

const Drivers = (props) => {
  const[thispopup,setThispopup]=React.useState(false);
  function HandlePopup(){
    setThispopup(!thispopup);
    props.Popup();
  }
  const userdata=props.userdata;
  const authenticated=userdata.authenticated;
  let name;
  if(userdata.username){
      name=(userdata.username.substring(0, 1));}
  
  return (
    <div className='flex flex-col border-b-2 py-5 border-b-gray-500'>
      <div className='text-2xl mb-5'>Drivers</div>
      <div className='flex items-center'>
        <div className='flex h-12 w-12 rounded-full items-center justify-center bg-red-200 font-extrabold' >{name}</div>
        <div className='ml-5'>
            <div><div>{authenticated ? userdata.username : 'You'}</div></div>
            <div className='text-red-500'>{authenticated ? 'Authenticated' : 'Please Authenticate to continue'}</div>
        </div>
      </div>
      <div className='flex items-center mt-4'>
        <input onChange={props.Agemorethan25} isChecked='props.agemorethan25' type='checkbox'></input>
        <div className='ml-3'>I am under 25 years old</div>
      </div>
      <div className='text-sm text-gray-600 mt-2'>Driver’s License verification is required, you’ll receive instructions after payment.</div>
      <div className='text-sm text-gray-600 mt-2'>Add more drivers free of charge after payment.</div>
      <div onClick={HandlePopup} className='mt-4 text-blue-600 font-extrabold cursor-pointer hover:underline'>SEE DETAILS</div>
      <Popup onClose={HandlePopup} trigger={thispopup}>
          <div className='bg-white w-full h-140  md:w-200  flex p-10 px-10 justify-center items-center relative rounded-xl overflow-scroll flex-col'>
              <Image onClick={HandlePopup}  src={`/icons/close.png`} height={100} width={100} alt='' className='h-5 w-5 absolute top-5 right-5 cursor-pointer'/>
              <div className='text-2xl'>Driver License Verification</div>
              <div className=' mt-6'>Driver’s License verification is required, you’ll receive instructions after payment.</div>
              <div className=' mt-3'>You must verify your driver's license at least 2 hours before your trip starts.</div>
              <div className=' mt-3'>For non-US driver’s licenses, please have your passport ready as well.</div>
              <div className='mt-3'>Additional drivers can be added free of charge. They will also be asked to verify their driver's license.</div>
              <div className=' mt-3'>Stripe is our verification partner</div>
              <button onClick={HandlePopup} className='h-10 w-80 bg-blue-500 mt-10 text-white rounded-xl'>Understood</button>
              
            </div></Popup>
        
    </div>
  )
}

export default Drivers
