import React from 'react'
import Image from 'next/image.js';
import Popup from '../Popup';

const Deliveryprocess = (props) => {
  const[thispopup,setThispopup]=React.useState(false);
  function HandlePopup(){
    setThispopup(!thispopup);
    props.Popup();

  }
  return (
    <div className='flex flex-col py-5 pb-10 border-b-2 border-b-gray-500'>
        <div className='flex items-center'>
            <Image src={`/icons/timer.png`} alt='' height={90} width={90} className='h-8 w-8'/>
            <div className='ml-4 text-2xl font-extrabold'>Delivery process</div>
        </div>
        <div className='mt-3'>Your  Delivery Partner will wait 10 minutes upon arrival . We will keep you updated on your Delivery Partner's estimated arrival time through text and/or push notifications. Enjoy your trip!</div>
        <div onClick={HandlePopup} className='mt-5 text-blue-500 text-extrabold cursor-pointer text-lg'> See Details</div>
        <Popup onClose={HandlePopup} trigger={thispopup}>
          <div className='bg-white w-full h-140  md:w-200  flex p-10 px-10 relative rounded-xl overflow-scroll flex-col'>
              <Image onClick={HandlePopup}  src={`/icons/close.png`} height={100} width={100} alt='' className='h-5 w-5 absolute top-5 right-5 cursor-pointer'/>
              <div className='text-2xl'>How does the delivery work?</div>
              <div className='text-xl mt-3'>Pre Delivery</div>
              <div className=' mt-3'>Your assigned Delivery Partner will retrieve your cleaned and sanitized vehicle from our lot and transport it to the delivery address of your choice. Please note that while we make every effort to be punctual, there may be a window of +/- 15 minutes around the selected time. To facilitate the delivery process and help you find your Delivery Partner, you will receive updates via SMS about the driver's progress, as well as the make, model, color, and license plate of your vehicle. Additionally, you can track the driver's live location through our app.</div>
              <div className='text-xl mt-3'>The Handover</div>
              <div className='mt-3'>Upon reaching the desired delivery address, the Delivery Partner will take photos of the vehicle and verify your driver's license. The final step before the handover of keys is for you to sign the rental agreement. Yep... that’s really it - you're good to go!</div>
              <div className='text-xl mt-3'>Post Delivery</div>
              <div className=' mt-3'>After the handover, we would greatly appreciate your feedback. If you were satisfied with the delivery, you may also leave a tip for the Delivery Partner, which will be given to them in full.</div>
              <div className=' mt-3'> Please note that Delivery Partners typically only wait for 10 minutes after the scheduled time before they may need to depart for their next trip - they're busy people! Pick up from the lot is not possible.</div>
            </div></Popup>
      
    </div>
  )
}

export default Deliveryprocess
