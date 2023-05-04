import React from 'react'
import Image from 'next/image'

const CancellationPolicy = () => {
  return (
    <div className='flex flex-col border-b-2 py-5 border-b-gray-500'>
        <div className='flex items-center'>
            <Image src={`/icons/cancellation.png `} alt='' height={90} width={90} className='h-7 w-7 mr-4'/>
            <div className='text-2xl'>Cancellation policy</div>
        </div>
        <div className='mt-5'>Free cancellation until 48hrs before the start. By closing the booking, you confirm that you've read and accepted the trip information and the <span className='text-blue-600 hover:underline cursor-pointer'>terms and conditions.</span> </div>
      
    </div>
  )
}

export default CancellationPolicy
