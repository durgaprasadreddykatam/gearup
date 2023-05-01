import React from 'react'
import data from '../../data/Carpickerdata.js';
import Image from 'next/image.js';
import Carpicker from '../../components/carpicker/Carpicker.js'
import Footer1 from '../../components/Footer1.js';

const CarPickerPage = () => {
  function HandleSelect(id){
    console.log(id)
  }

  const rendercats = data.map((cat) => {
    return(
      <>
        <div className=' lg:border-y-1  border-top-sky-500 flex flex-col lg:flex-row'>
          <Carpicker key={cat.id} handleclick={HandleSelect}  item={cat} price={cat.price} name={cat.catogary}/>
        </div>
      </>
    )
    

  });

  return (
    <>
    <div key="car-picker-page" className='md:p-20 p-5  w-full h-10'>
      <div>Address</div>
      <div>From date-To date</div>
      {rendercats}
    </div>
    <div>
    </div>
    </>
    
  )
}

export default CarPickerPage
