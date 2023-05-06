import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';

const PayementSucess = () => {
    const router = useRouter();
    const searchdata = router.query;
  return (
    <div className='flex h-screen bg-slate-100 p-5 lg:p-10'>
        <div className='h-80 lg:h-60 w-full bg-white border-1 rounded-xl p-5 '>
            <div className='flex items-center'>
                <Image src={`/icons/SucessTick.png`} height={500} width={500} className='h-10 w-10'/>
                <div className='text-xl ml-5 text-green-600'> Hi Your Booking has been Confirmed,  Thank You!</div>
            </div>
                <div className='text-sm mt-3 text-gray-500 lg:ml-16'>Confirmation Will be Sent to Email</div>
                <div className='text-sm mt-3 text-gray-500 lg:ml-16'>
                    <div>Delivery date:{searchdata.fromDate}<span></span></div>
                    <div>Delivery Location:{searchdata.address}<span></span></div>
                    <div>Return date:{searchdata.todate}<span></span></div>
                    <div>Return Location:{searchdata.isSameaddress ? `searchdata.address`:`searchdata.address1`}<span></span></div>
                </div>
                
            
            
        
        </div>
      
    </div>
  )
}

export default PayementSucess
