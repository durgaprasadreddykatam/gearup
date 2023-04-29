import React from 'react'
import ToggleButton from '../buttons/Togglebutton'

const Sameaddresstoggle = (props) => {
  return (
    <div className='flex p-5 justify-between lg:justify-normal'>
        <div className='hidden lg:block mr-5'><ToggleButton defaultChecked={true} onChange={props.toggleSameAddress} /></div>
        <span>Same Delivery and return address</span>
        <div className='block lg:hidden'><ToggleButton defaultChecked={true} onChange={props.toggleSameAddress} /></div>
        
    </div>
      
    
  )
}

export default Sameaddresstoggle
