import React from 'react'
import Image from 'next/image'
import uparrow from '../../public/icons/uparrow.png'

const Fleetsub = (props) => {
    const[car,setCar] = React.useState(1);
    const[dispsides,setDispsides] = React.useState(false);
    function Clickedleft(){
        if(car===1){
            setCar(3)
        }else{
            setCar(car-1)
        }

    }
    function Clickedright(){
        if(car===3){
            setCar(1)
        }else{
            setCar(car+1)
        }

    }
    
  return (
    <div className='sm:w-120  rounded-xl m-1'>
                    <div onMouseEnter={()=>{setDispsides(true)}} onMouseLeave={()=>{setDispsides(false)}} className='sm:w-120 h-80 lg:h-80 relative rounded-xl'>
                        {car ===1 && <Image src={`/images/cars/subscriptioncars/${props.name}1.jpeg`} height={500} width={500} className='h-full rounded-xl w-full' />}
                        {car ===2 && <Image src={`/images/cars/subscriptioncars/${props.name}2.jpeg`} height={500} width={500}  className='h-full rounded-xl  w-full' />}
                        {car ===3 && <Image src={`/images/cars/subscriptioncars/${props.name}3.jpeg`} height={500} width={500}   className='h-full rounded-xl  w-full' />}
                        {dispsides && <Image onClick={Clickedleft} className='hidden md:block rotate-90 absolute invert bottom-40 right-0 cursor-pointer h-10 w-10' src={uparrow} height={100} width={100}/>}
                        {dispsides && <Image onClick={Clickedright} className='hidden md:block -rotate-90 absolute invert bottom-40 left-0 cursor-pointer h-10 w-10' src={uparrow} height={100} width={100}/>}

                        <div className='absolute h-10 w-full bottom-0 flex justify-center items-center'>
                            <div onClick={()=>{(setCar(1))}} className={`${car=== 1 ? `bg-white`:`bg-black`} cursor-pointer rounded-full m-1 h-3  w-3`}></div>
                            <div onClick={()=>{(setCar(2))}} className={`${car=== 2 ? `bg-white`:`bg-black`}  cursor-pointer rounded-full m-1 h-3 w-3`}></div>
                            <div onClick={()=>{(setCar(3))}} className={`${car=== 3 ? `bg-white`:`bg-black`}   cursor-pointer rounded-full m-1 h-3 w-3`}></div>
                        </div>
                    </div>
                

                    <div className='mt-3 text-2xl font-extrabold'>{props.name}</div>
                    <div className='text-lg'>{props.description}</div>
                    <div className='text-blue-600'>Starts at ${props.price} per month</div>
      
    </div>
  )
}

export default Fleetsub
