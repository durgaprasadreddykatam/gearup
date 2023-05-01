import React from 'react'
import data from '../../data/carsubfleetdata.js'
import Fleetsub from './Fleetsub'

const Fleetpreview = () => {
    const renderfleet=data.map(item=>{
        return(
            <Fleetsub name={item.name} description={item.description} price={item.price}/>
        )
    });
    
  return (
    <>
        <div className='flex mt-10 flex-col'>
           <div className='font-extrabold text-sm'>PREVIEW</div>
           <div className='text-3xl'>Preview Our Fleet</div>
           <div className='flex flex-wrap flex-col md:flex-row justify-around'>
                {renderfleet}
            </div>
        </div>
    </>
    
  )
}

export default Fleetpreview;
