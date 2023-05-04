import React from 'react'
import ToggleButton from '../buttons/Togglebutton'

const Extras = (props) => {
  return (
    <>
    <div className='py-10  flex flex-col border-b-2 border-b-gray-500'>
        <div className='text-2xl font-extrabold'>Extras</div>
        <div className='flex justify-between items-center'>
            <div>
                <div>Unlimited Miles</div>
                <div className='text-sm text-gray-500'>${props.item.unlimited_miles_per_day} | day</div>
            </div>
            <div><ToggleButton defaultChecked={props.unlimitedmiles} isChecked={props.unlimitedmiles} onChange={props.handleunlimitedmiles}/></div>
        </div>
        <div className='mt-10'>Your trip includes {props.item.miles_total} miles. You'll pay ${props.item.Extra_Miles_price}/mile thereafter.</div>
      
    </div>
    </>
    
  )
}

export default Extras
