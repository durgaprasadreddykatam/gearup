import React from 'react'
import { useRouter } from 'next/router'
import Footer1 from '../../../components/Footer1';
import data from '../../../data/Checkoutdata';
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import Image from 'next/image.js';
import Coverage from '../../../components/checkoutcomps/Coverage';
import Deliveryprocess from '../../../components/checkoutcomps/Deliveryprocess';


const Checkout = () => {
    const [checkoutdata, setCheckoutdata] = React.useState({});
    React.useEffect(() => {
        setCheckoutdata(data);

    }, []);
    const router = useRouter();
    const carid  = router.query.carid;
    const searchdata=router.query;
    console.log(searchdata);
    const fromdate = new Date(searchdata.fromDate);
    const todate = new Date(searchdata.todate);
    const formatted_fromdate = fromdate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    const formatted_todate = todate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <>
    <div className={` ${oswald.className} p-5 flex flex-col`}>
         {/* only for small screens */}
        <div className='flex justify-between pb-5 border-b-gray-400 border-b-2 lg:border-b-0'>
           <div className='flex lg:hidden flex-col'>
                <div className='text-xl'>{checkoutdata.catogary}</div>
                <div className='text-sm text-slate-500'>{checkoutdata.capacity} Seats.{checkoutdata.luggage} suitcases</div>
                <div className='mt-5 text-blue-500 font-extrabold cursor-pointer hover:underline'>Change Car</div>
            </div>
            <div className='h-24 w-36  flex lg:w-full lg:px-10  justify-between lg:h-100 rounded-xl'>
                <Image src={`/images/cars/subscriptioncars/${checkoutdata.catogary}1.jpeg`} className='h-24 w-36 lg:w-2/3 lg:h-100 rounded-xl' width={1000} height={1000} alt=''/>
                <div className='hidden lg:flex   flex-col'>
                <div className='text-5xl'>{checkoutdata.catogary}</div>
                <div className='text-sm text-slate-500'>{checkoutdata.capacity} Seats.{checkoutdata.luggage} suitcases</div>
                
                <div className='text-white h-12 w-44 rounded-xl bg-blue-500 flex items-center justify-center mt-20 cursor-pointer'>Change Car</div>
            </div>

            </div>
        </div>
        <div className='flex flex-col border-b-2 border-b-gray-400 pb-5'>
          <div className='text-2xl py-5 font-extrabold'>Where & When</div>
          <div className='flex items-center'>
            <Image src={`/icons/pickuplocation.png`} alt='' width={90} height={90} className='h-5 mr-4 w-5'/>
            <div>{searchdata.address}</div>
          </div>
          <Image src={`/icons/verical.png`} alt='' width={90} height={90} className='h-5 w-5'/>
          <div className='flex items-center'>
            <Image src={`/icons/droplocation.png`} alt='' width={90} height={90} className='h-5 mr-4 w-5'/>
            <div>{searchdata.isSameaddress ? searchdata.address:searchdata.address1}</div>
          </div>
          <div className='mt-10 flex items-center'>
            <Image src={`/icons/calender.png`} alt='' height={90} width={90} className='h-8 w-8'/>
            <div className='flex ml-4 flex-col'>
              <div>From <span className='text-blue-600'>{formatted_fromdate}</span></div>
              <div> To   <span className='text-blue-600 ml-4'>{formatted_todate}</span></div>
            </div>
          </div>
          <div className='mt-3'>Be ready to receive your Car +/- 15 min of the scheduled time</div>
        </div>
        <Deliveryprocess/>
        <Coverage item={checkoutdata}/>
        <div>Extras</div>
        <div>Drivers</div>
        <div>Deposit policy</div>
        <div>Minimum age requirement</div>
        <div>Cancellation policy</div>
        <div>Payment method</div>
        
    </div>
    <Footer1/>
    </>
    
  )
}

export default Checkout
