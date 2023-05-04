import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const Payementmethod = (props) => {
  

  return (
    
      <div className='flex  flex-col'>
        <div className='text-2xl my-4'>Payement Info</div>
      <input onChange={props.handlePayementinfo} name='cardnumber' value={props.payementinfo.cardnumber} className='h-12 flex items-center p-4 bottom-1 rounded-xl my-2' placeholder='Card Number'></input>
      <div  className='flex justify-between'>
        <input onChange={props.handlePayementinfo} name='expirydate' value={props.payementinfo.expirydate} className='h-12 w-40 flex items-center p-4 bottom-1 rounded-xl my-2' placeholder='MM/YY'></input>
        <input onChange={props.handlePayementinfo} name='cvc' value={props.payementinfo.cvc} className='h-12 w-32  flex items-center p-4 bottom-1 rounded-xl my-2' placeholder='CVC'></input>
      </div>
      <input onChange={props.handlePayementinfo}  name='cardname' value={props.payementinfo.cardname} className='h-12 flex items-center p-4 bottom-1 rounded-xl my-2' placeholder='Name on Card'></input>
      <input onChange={props.handlePayementinfo} name='zip' value={props.payementinfo.zip} className='h-12 flex items-center p-4 bottom-1 rounded-xl my-2' placeholder='Zip Code'></input>
    </div>
    
    
  )
}

export default Payementmethod
