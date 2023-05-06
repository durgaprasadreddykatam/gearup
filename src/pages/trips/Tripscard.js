import React from 'react'
import Image from 'next/image'
import Popup from '../../../components/Popup';

const Tripscard = (props) => {
    const[show,setShow]=React.useState(false);
    function DisplayCompleteinfo(){
        setShow(true);
    }
    React.useEffect(() => {
        if (show) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [show]);
    const formattedDeliveryDate = new Date(props.item.Delivery_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const formattedReturnDate = new Date(props.item.Return_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    

  return (
    <div className='w-full lg:h-60 rounded-xl mb-4 border-1 p-2 bg-slate-100 lg:p-4'>
        <div className='flex  lg:flex-col justify-between'>
        <div className='flex flex-col lg:flex-row'>
            <div className='lg:w-1/4 text-sm'>
                {/* <div>TripId:{props.item.tripid}</div> */}
                <div className='text-2xl'>{props.item.car_class}</div>
                <div className='hidden lg:flex'>Coverage :{props.item.Coverage_selected}</div>
                <div className='hidden lg:flex'>Trip Duration: {props.item.no_of_days} Days</div>
                {props.item.Unlimited_miles_selected && <div className='hidden lg:flex text-blue-600'>Unlimited Miles Selected for this Trip</div>}
                <div>Amount Paid:<span className='text-green-800 font-extrabold'>${props.item.amount_paid}</span></div>
                <div className='lg:my-3'>Delivery Date: {formattedDeliveryDate}</div>
                <div className='hidden lg:flex'>Return Date:{formattedReturnDate}</div>
                
            </div>
            <div className=' lg:mt-8 lg:w-1/2 text-sm'>
                <div className='flex flex-col'>
                    <div>Delivery Address</div>
                    <div>{props.item.DeliveryAddress}</div>
                </div>
                <div className='flex hidden lg:flex flex-col'>
                    <div>Return Address</div>
                    <div>{props.item.ReturnAddress}</div>
                </div>
                <div className=''></div>
            </div>
            <div className='hidden lg:flex lg:w-1/4 flex-shrink-0'>
                <Image src={`/images/cars/subscriptioncars/${props.item.car_class}1.jpeg`} alt='' height={1000} width={1000} className='flex flex-shrink-0h-46 w-80 rounded-xl'/>
            </div>
            
        </div>
        <Image src={`/images/cars/subscriptioncars/${props.item.car_class}1.jpeg`} alt='' height={1000} width={1000} className='flex lg:hidden flex-shrink-0 h-20 sm:h-28 sm:w-40 md:h-40 md:w-60  w-32 rounded-xl'/>
        
        </div>
        <button onClick={DisplayCompleteinfo} className='h-10 w-40  lg:hidden bg-blue-600 mt-4 text-white rounded-xl'>Complete trip Info</button>
        

        <Popup trigger={show} setTrigger={setShow} onClose={()=>{setShow(false)}}>
            <div className='h-100 bg-white rounded-t-lg p-5'>
            <div className='text-2xl'>{props.item.car_class}</div>
            <div className=''>Coverage :{props.item.Coverage_selected}</div>
            <div className=''>Trip Duration: {props.item.no_of_days} Days</div>
            <div>Amount Paid:<span className='text-green-800 font-extrabold'>${props.item.amount_paid}</span></div>
            <div className='lg:my-3'>Delivery Date: {formattedDeliveryDate}</div>
            <div className=''>Return Date:{formattedReturnDate}</div>
            <div className=''>
                <div className='flex mt-5 flex-col'>
                    <div>Delivery Address</div>
                    <div>{props.item.DeliveryAddress}</div>
                </div>
                <div className='flex mt-5  flex-col'>
                    <div>Return Address</div>
                    <div>{props.item.ReturnAddress}</div>
                </div>
                <div className=''></div>
            </div>

            </div>
        </Popup>
    </div>
  )
}

export default Tripscard
