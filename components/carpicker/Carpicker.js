import React from 'react'
import Image from 'next/image'
import uparrow from '../../public/icons/uparrow.png'

const Carpicker = (props) => {
    const[car,setCar] = React.useState(1);
    const [showDetails, setShowDetails] = React.useState(false);
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
    <div className='w-full flex flex-col lg:my-10 my-3  justify-between sm:flex-row  rounded-xl'>
        <div className='flex flex-col sm:flex-row '>
        <div onMouseEnter={()=>{setDispsides(true)}} onMouseLeave={()=>{setDispsides(false)}} className='w-88 lg:h-60 flex-shrink-0 relative rounded-xl'>
                        {car ===1 && <Image src={`/images/cars/subscriptioncars/${props.name}1.jpeg`} height={500} width={500} alt='' className='h-full rounded-xl w-full' />}
                        {car ===2 && <Image src={`/images/cars/subscriptioncars/${props.name}2.jpeg`} height={500} width={500} alt=''   className='h-full rounded-xl  w-full' />}
                        {car ===3 && <Image src={`/images/cars/subscriptioncars/${props.name}3.jpeg`} height={500} width={500} alt=''    className='h-full rounded-xl  w-full' />}
                        {dispsides && <Image onClick={Clickedleft} className='hidden md:block rotate-90 absolute invert bottom-28 right-0 cursor-pointer h-10 w-10' src={uparrow} alt=''  height={100} width={100}/>}
                        {dispsides && <Image onClick={Clickedright} className='hidden md:block -rotate-90 absolute invert bottom-28 left-0 cursor-pointer h-10 w-10' src={uparrow} alt=''  height={100} width={100}/>}

                        <div className='absolute h-10 w-full bottom-0 flex justify-center items-center'>
                            <div onClick={()=>{(setCar(1))}} className={`${car=== 1 ? `bg-white`:`bg-black`} cursor-pointer rounded-full m-1 h-3  w-3`}></div>
                            <div onClick={()=>{(setCar(2))}} className={`${car=== 2 ? `bg-white`:`bg-black`}  cursor-pointer rounded-full m-1 h-3 w-3`}></div>
                            <div onClick={()=>{(setCar(3))}} className={`${car=== 3 ? `bg-white`:`bg-black`}   cursor-pointer rounded-full m-1 h-3 w-3`}></div>
                        </div>
                    </div>
                    <div className='flex justify-between p-5 max-w-xs   flex-shrink-0  flex-col' >
                        <div>
                        <div className='text-xl font-extrabold'>{props.name}</div>
                        <div className=''>{props.item.description}</div>
                        <div className='text-gray-500 text-sm'>{props.item.capacity} Seats . {props.item.luggage} suitcases</div>
                        <div onClick={()=>{props.handledetails(props.item.id)}} className='cursor-pointer text-blue-700 font-extrabold'>See Details</div>
                        </div>
                        
                        <div className='hidden lg:block text-xs'>{props.item.explain}</div>
                    </div>
        </div>
                    
                    
                    <div className='py-5 flex flex-col justify-between flex-shrink-0'>
                        <div>
                        <div className='text-blue-600 '>Starts at ${props.price} per day</div>
                        <div className='text-xs'>excl. coverage, delivery, tax</div>
                        </div>
                        
                        <button onClick={()=>{props.handleclick(props.item.id)}} className='text-white hover:bg-blue-600 h-12 w-40 bg-blue-500 rounded-xl'>Select</button>
                    </div>
                    
      
    </div>
  )
}

export default Carpicker
