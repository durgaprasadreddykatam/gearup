import React ,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import Footer1 from '../../../components/Footer1';
import data from '../../../data/Checkoutdata';
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import Image from 'next/image.js';
import Coverage from '../../../components/checkoutcomps/Coverage';
import Deliveryprocess from '../../../components/checkoutcomps/Deliveryprocess';
import Popup from '../../../components/Popup';
import Extras from '../../../components/checkoutcomps/Extras';
import Drivers from '../../../components/checkoutcomps/Drivers';
import Deposit_policy from '../../../components/checkoutcomps/Deposit_policy';
import Minage from '../../../components/checkoutcomps/Minage';
import CancellationPolicy from '../../../components/checkoutcomps/CancellationPolicy';
import DriverInfo from '../../../components/checkoutcomps/DriverInfo';



const Checkout = () => {
  const[userdata,setUserdata]=React.useState({});
  const[authenticated,setAuthenticated]=React.useState(false);
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserdata(user);
    if(user){setAuthenticated(user.userauthenticated);}
    
    
  }, []);
    const [checkoutdata, setCheckoutdata] = React.useState({});
    const[popup,setPopup]=React.useState(false);
    function Popup(){
      setPopup(!popup);
    }

    React.useEffect(() => {
        setCheckoutdata(data);

    }, []);
    const [unlimitedmiles, setUnlimitedmiles] = React.useState(false);
    function UnlimitedMiles(){
      setUnlimitedmiles(!unlimitedmiles);
    }
    const[agemorethan25,setAgemorethan25]=React.useState(false);
    function Agemorethan25(){
      setAgemorethan25(!agemorethan25);
    };
    const[insurance,setInsurance]=React.useState('');
    function Insurance(value){

      setInsurance(value);
    }
    const router = useRouter();
    const carid  = router.query.carid;
    const searchdata=router.query;
    const fromdate = new Date(searchdata.fromDate);
    const todate = new Date(searchdata.todate);
    const formatted_fromdate = fromdate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    const formatted_todate = todate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    const days= Math.ceil((todate-fromdate)/(1000*60*60*24));
    const baseprice=Math.round(checkoutdata.price*days*100)/100;
    const salestax=Math.round(baseprice*0.07* 100) / 100;;
    let youngrenterfee=0;
    if(agemorethan25){
      youngrenterfee=Math.round(checkoutdata.young_renter_fee*days*100)/100;
    }
    let unlimitedmilesfee=0;
    if(unlimitedmiles){
      unlimitedmilesfee=Math.round(checkoutdata.unlimited_miles_per_day*days*100)/100;
    }
    let insuranceprice = 0;
    if (insurance === "Essential_Coverage") {
    insuranceprice = checkoutdata.Essential_Coverage * days;
    } else if (insurance === "Standard_Coverage") {
    insuranceprice = checkoutdata.Standard_Coverage * days;
    } else if (insurance === "I_have_my_own") {
      insuranceprice = checkoutdata.I_have_my_own * days;
    }
    const finalprice=baseprice+salestax+youngrenterfee+unlimitedmilesfee+insuranceprice;
    React.useEffect(() => {
      if (popup) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [popup]);
    const[buttontext,setButtontext]=React.useState();
    React.useEffect(() => {
      if (insurance === '') {
        setButtontext('Select Coverage');
      } else {
        setButtontext('Book & Pay');
      }
    }, [insurance]);
    const[driverinfo,setDriverinfo]=React.useState({firstname:'',lastname:'',email:'',confirmemail:'',phonenumber:''});
    function HandleDriverinfo(event){
      const{name,value}=event.target;
      setDriverinfo(prevValue=>{
        return{
          ...prevValue,
          [name]:value
        }
      })
    }
    
  return (
    <>
    <script src="https://js.stripe.com/v3/"></script>
    <div className={` ${oswald.className}  p-5 flex flex-col`}>
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
        <div className='flex'>
          <div>
                  <div className='flex lg:hidden flex-col border-b-2 border-b-gray-400 pb-5'>
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
                <Deliveryprocess Popup={Popup} userdata={userdata} popup={popup}/>
                <Coverage coverage={insurance} userdata={userdata} Insurance={Insurance} item={checkoutdata}/>
                 <Extras item={checkoutdata} userdata={userdata} unlimitedmiles={unlimitedmiles} handleunlimitedmiles={UnlimitedMiles}/>
                <Drivers agemorethan25={agemorethan25} Agemorethan25={Agemorethan25} Popup={Popup} authenticated={authenticated} userdata={userdata}  />
                <Deposit_policy/>
                <Minage Popup={Popup} userdata={userdata}/>
                <CancellationPolicy/>
                
          </div>


          {/* larger Screens */}


          <div className=' h-fit hidden lg:flex ml-10 flex-col w-100 bg-slate-50 flex-shrink-0 p-10 rounded-xl border-1 border-gray-500'>
              <div className='flex flex-col  border-b-gray-400 pb-5'>
                      <div className='text-2xl py-5 font-extrabold'>Where & When</div>
                      <div className='text-lg mb-5'>Delivery Info</div>
                      <div className='flex items-center'>
                        <div>{searchdata.address}</div>
                      </div>
                      <span className='text-blue-600'>{formatted_fromdate}</span>
                      <div className='text-lg mt-5'>Return Info</div>
                      <div>{searchdata.isSameaddress ? searchdata.address:searchdata.address1}</div>
                      <span className='text-blue-600'>{formatted_todate}</span>
                      <div className='mt-3'>Be ready to receive your Car +/- 15 min of the scheduled time</div>
                </div>
                {!authenticated && <DriverInfo driverinfo={driverinfo} HandleDriverinfo={HandleDriverinfo}/>}
                



                <div className='flex flex-col mt-5'>
                  <div className='flex justify-between'>
                    <div className='text-lg font-extrabold'>Total Price</div>
                    <div>${finalprice}</div>
                  </div>
                  <div className='mt-5 text-blue-600 font-extrabold cursor-pointer'>See Price Details</div>
                </div>
          </div>
        </div>
        
        
        <div className={`${popup ? `static `:`fixed`} flex lg:hidden justify-between items-center bottom-0 h-32 z-40 w-full p-10 bg-white`}>
          <div>
            <div className='flex items-center'>
              <div className='text-2xl'>Total Price</div>
              <Image src={`/icons/infopopup.png`} height={90} width={90} alt='' className='h-5 w-5 ml-3 cursor-pointer'/>
            </div>
            <div>${finalprice}</div>
          </div>
          <button  className='bg-blue-500 hover:bg-blue-700 text-white h-12 w-40 rounded-xl'>{buttontext}</button>
        </div>
        <Footer1/>
       
    </div>
    {/* Popup to be Implemented when user Clicks on I have My Own Insurance */}
    {/* <Popup trigger={true}>this is popup</Popup> */}
    
    </>
    
  )
}

export default Checkout
