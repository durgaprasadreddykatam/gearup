import React from 'react'
import Image from 'next/image'

const Deposit_policy = () => {
  return (
    <div className='flex flex-col py-5 border-b-2 border-b-gray-500'>
        <div className='flex items-center mb-5'>
            <div><Image src={`/icons/creditcard.png`} height={100} width={100} alt='' className='h-10 w-10'/></div>
            <div className='text-2xl ml-4'>Deposit Policy</div>
        </div>
        <div>A deposit of $300.00 ($500.00 for debit cards) is held starting 24 hours before your booking. If your booking is greater than 6 days, we’ll release and re-hold your deposit every 7 days from when it was first held. The deposit will be released when your trip is completed</div>
    </div>
  )
}

export default Deposit_policy
