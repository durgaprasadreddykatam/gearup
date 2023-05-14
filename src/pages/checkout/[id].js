import React ,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import Footer1 from '../../../components/Footer1';
import data from '../../../data/Checkoutdata';
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import Image from 'next/image.js';
import Coverage from '../../../components/checkoutcomps/Coverage';
import Deliveryprocess from '../../../components/checkoutcomps/Deliveryprocess';
import Extras from '../../../components/checkoutcomps/Extras';
import Drivers from '../../../components/checkoutcomps/Drivers';
import Deposit_policy from '../../../components/checkoutcomps/Deposit_policy';
import Minage from '../../../components/checkoutcomps/Minage';
import CancellationPolicy from '../../../components/checkoutcomps/CancellationPolicy';
import DriverInfo from '../../../components/checkoutcomps/DriverInfo';
import Indexcomp from '../../../components/stripe/Indexcomp';
import axios from 'axios';
import Popup from '../../../components/Popup';
import Login from '../../../components/Login';
import { set } from 'lodash';

const Checkout = () => {
  const router = useRouter();
  const searchdata=router.query;
  const[userdata,setUserdata]=React.useState({});
  const[authenticated,setAuthenticated]=React.useState(false);
  // initial load and getting data from local storage
  const[loginuserinfo,setLoginuserinfo]=React.useState({});
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserdata(user);
    if(user){
      setAuthenticated(user.userauthenticated);
      axios.post('/api/Checkout', {userid:user.id})
      .then((res) => {
        if(res.data.message==="success"){
        setLoginuserinfo(res.data.data);}
      },
      (error) => {
        console.log(error);
      }


      );
    }
  }, []);
  

    const [checkoutdata, setCheckoutdata] = React.useState({});
    const[popupv,setPopup]=React.useState(false);
    function Popupfunction(){
      setPopup(!popupv);
    }
    
    useEffect(() => {
      if(searchdata!==undefined){
        axios.post('/api/Checkoutcarsdata',{searchdata:searchdata})
      .then((res) => {
        if(res.data.message==="success"){
          setCheckoutdata(res.data.data);
        }
        else{
          
        }
      }
      )
      .catch(function (error) {
        console.log(error);
      }
      );
      }
    }, [searchdata]);
    
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
    const fromdate = new Date(searchdata.fromDate);
    const todate = new Date(searchdata.todate);
    const formatted_fromdate = fromdate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    const formatted_todate = todate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    const days= searchdata.no_of_days;
    const baseprice=Math.round(checkoutdata.price*days*100)/100;
    const salestax=Math.round(baseprice*0.07* 100) / 100;
    
    const [youngrenterfee,setYoungrenterfee]=React.useState(0);
    const [unlimitedmilesfee,setUnlimitedmilesfee]=React.useState(0);
    const[insuranceprice,setInsuranceprice]=React.useState(0);
    useEffect(() => {
      if(agemorethan25){
        setYoungrenterfee(Math.round(checkoutdata.young_renter_fee*days*100)/100);
      }else if(!agemorethan25){
        setYoungrenterfee(0);
      }
      if(unlimitedmiles){
        setUnlimitedmilesfee(Math.round(checkoutdata.unlimited_miles_per_day*days*100)/100);
      }else if(!unlimitedmiles){
        setUnlimitedmilesfee(0);
      }
      if (insurance === "Essential_Coverage") {
        setInsuranceprice(Math.round((checkoutdata.Essential_Coverage * days)*100)/100);
      } else if (insurance === "Standard_Coverage") {
        setInsuranceprice(Math.round((checkoutdata.Standard_Coverage * days)*100)/100);
      } else if (insurance === "I_have_my_own") {
        setInsuranceprice(Math.round((checkoutdata.I_have_my_own * days)*100)/100);
      } else if (insurance === "") {
        setInsuranceprice(0);
      }

    }, [agemorethan25,unlimitedmiles,insurance]);
    const [payementpopup,setPayementpopup]=React.useState(false);
    const [totalpricepopup,setTotalpricepopup]=React.useState(false);
    
    React.useEffect(() => {
      if (popupv || payementpopup ||totalpricepopup) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, [popupv,payementpopup,totalpricepopup]);

const [finalprice, setFinalprice] = React.useState(Math.round((baseprice+salestax+youngrenterfee+unlimitedmilesfee+insuranceprice)*100)/100);
const [stripefinalprice, setStripeFinalprice] = React.useState(Math.round((baseprice+salestax+youngrenterfee+unlimitedmilesfee+insuranceprice)*100));

useEffect(() => {
  setFinalprice(Math.round((baseprice+salestax+youngrenterfee+unlimitedmilesfee+insuranceprice)*100)/100);
  setStripeFinalprice(Math.round((baseprice+salestax+youngrenterfee+unlimitedmilesfee+insuranceprice)*100));
}, [baseprice,salestax,youngrenterfee,unlimitedmilesfee,insuranceprice]);

const stripedata = authenticated ? {
                                    email:loginuserinfo.email,
                                    name:loginuserinfo.first_name+" "+loginuserinfo.last_name,
                                    DeliveryAddress:searchdata.address,
                                    DeliveryCity:searchdata.city,
                                    DeliveryDate:searchdata.fromDate,
                                    DeliveryDateObj:searchdata.fromDateObj,
                                    PhoneNumber:loginuserinfo.mobile,
                                    DeliveryCity:searchdata.city,
                                    returnAddress:searchdata.isSameaddress ? searchdata.address:searchdata.address1,
                                    returnCity:searchdata.isSameaddress ? searchdata.city:searchdata.city1,
                                    returnDate:searchdata.todate,
                                    returnDateObj:searchdata.toDateObj,
                                    car_class:checkoutdata.catogary,
                                    Coverage_selected:insurance,
                                    userid:userdata.id,
                                    Drivers:userdata.id,
                                    isSameaddress:searchdata.isSameaddress,
                                    no_of_days:days,
                                    Unlimited_miles_selected:unlimitedmiles,
                                    amount:finalprice,
                                    stripeamount:stripefinalprice,
                                  }:{};
                                  
    function Changecar(){
      router.push({pathname:'/CarPickerPage',query:searchdata});
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
                <div onClick={Changecar} className='mt-5 text-blue-500 font-extrabold cursor-pointer hover:underline'>Change Car</div>
            </div>
            <div className='h-24 w-36  flex lg:w-full lg:px-10  justify-between lg:h-100 rounded-xl'>
                <Image src={`/images/cars/subscriptioncars/${checkoutdata.catogary}1.jpeg`} className='h-24 w-36 lg:w-2/3 lg:h-100 rounded-xl' width={1000} height={1000} alt=''/>
                <div className='hidden lg:flex   flex-col'>
                <div className='text-5xl'>{checkoutdata.catogary}</div>
                <div className='text-sm text-slate-500'>{checkoutdata.capacity} Seats.{checkoutdata.luggage} suitcases</div>
                
                <div onClick={Changecar} className='text-white h-12 w-44 rounded-xl bg-blue-500 flex items-center justify-center mt-20 cursor-pointer'>Change Car</div>
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
                <Deliveryprocess Popup={Popupfunction} userdata={userdata} popupv={popupv}/>
                <Coverage coverage={insurance} userdata={userdata} Insurance={Insurance} item={checkoutdata}/>
                 <Extras item={checkoutdata} userdata={userdata} unlimitedmiles={unlimitedmiles} handleunlimitedmiles={UnlimitedMiles}/>
                <Drivers agemorethan25={agemorethan25} Agemorethan25={Agemorethan25} Popup={Popupfunction} authenticated={authenticated} userdata={userdata}  />
                <Deposit_policy/>
                <Minage Popup={Popupfunction} userdata={userdata}/>
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
                {!authenticated && <button onClick={()=>{setPopup(true)}} className='w-full h-14 rounded-xl border-1 hover:bg-blue-600 hover:text-white'>Sign Up or Login To Continue</button>}
                {/* {!authenticated && <DriverInfo driverinfo={driverinfo} HandleDriverinfo={HandleDriverinfo}/>} */}
                {authenticated && finalprice !== 0 ? <Indexcomp  stripedata={stripedata} /> : null}



                



                <div className='flex flex-col mt-5'>
                  <div className='flex justify-between'>
                    <div className='text-lg font-extrabold'>Total Price</div>
                    <div>${finalprice}</div>
                  </div>
                  <div onClick={()=>{setTotalpricepopup(true)}} className='mt-5 text-blue-600 font-extrabold cursor-pointer'>See Price Details</div>
                </div>
          </div>
        </div>
        
        
        <div className={`${popupv ? `static `:`fixed`} flex lg:hidden justify-between items-center bottom-0 h-32 z-40 w-full p-10 bg-white`}>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col w-60'>
              <div className='text-2xl flex items-center'>Total Price
                <Image onClick={()=>{setTotalpricepopup(true)}} src={`/icons/infopopup.png`} height={90} width={90} alt='' className='h-5 w-5 ml-3 cursor-pointer'/>
              </div>
              <div>${finalprice}</div>
            </div>
            
            {!authenticated && <button onClick={()=>{setPopup(true)}} className='w-44 h-14 rounded-xl border-1 hover:bg-blue-600 hover:text-white'>Sign Up or Login To Continue</button>}
            {authenticated && <button onClick={()=>{setPayementpopup(true)}} className='w-44 h-14 rounded-xl border-1 bg-blue-600 text-white'>Book and Pay</button>}
          </div>
          
        </div>
        <Popup trigger={popupv} onClose={()=>{setPopup(false)}}>
              <div className='bg-white h-full md:h-fit'><Login onClick={()=>{setPopup(false)}}/></div>
        </Popup>
        <Popup trigger={payementpopup} onClose={()=>{setPayementpopup(false)}}>
              <div className='bg-white p-4 h-full relative md:h-fit'>
                <Image onClick={()=>{setPayementpopup(false)}} className='h-8 w-8 mt-5 cursor-pointer top-5'  src={`/icons/close.png`} width={100} height={100} alt=''/>
                {/* {authenticated && finalprice !== 0 ? <Indexcomp searchdata={searchdata} amount={stripefinalprice} stripedata={stripedata} /> : null} */}
              </div>
        </Popup>
        <Popup trigger={totalpricepopup} onClose={()=>{setTotalpricepopup(false)}}>
              <div className='flex flex-col items-center relative h-120 w-screen  lg:w-120 lg:h-80 rounded-xl bg-white '>
                <Image onClick={()=>{setTotalpricepopup(false)}} className='h-7 absolute top-0 left-3 w-7 mt-5 cursor-pointer'  src={`/icons/close.png`} width={100} height={100} alt=''/>
                <div className='text-2xl mt-5'>Price Details</div>
                <div className=' mt-5 flex w-screen px-10 justify-between lg:w-80'>
                  <div>Your Car</div>
                  <div>${checkoutdata.price} x {days} Days</div>
                </div>
                
                {insuranceprice >0 && <div className='w-screen px-10  flex justify-between lg:w-80'>
                  <div>{insurance==='Essential_Coverage' ? `Essential Coverage`:`Standard Coverage`}</div>
                  <div>${insurance==='Essential_Coverage' ? `${checkoutdata.Essential_Coverage}`:`${checkoutdata.Standard_Coverage}`} x {days} Days</div>
                  </div>}
                {unlimitedmilesfee>0 && <div className='w-screen px-10  flex justify-between lg:w-80'>
                  <div>Unlimited Miles</div>
                  <div>${checkoutdata.unlimited_miles_per_day} x {days} Days</div>
                </div>}
                {youngrenterfee>0 && <div className='w-screen px-10  flex justify-between lg:w-80'>
                  <div>Young Renter Fee</div>
                  <div>${checkoutdata.young_renter_fee} x {days} Days</div>
                </div>}
                <div className='w-screen px-10  pb-10 border-b-1 flex justify-between lg:w-80'>
                  <div>Sales Tax</div>
                  <div>${salestax}</div>
                </div>
                <div className='w-screen px-10 mt-3   flex justify-between lg:w-80'>
                  <div className='text-xl font-extrabold'>Total Price</div>
                  <div className='text-xl font-extrabold'>${finalprice}</div>
                </div>
              </div>
        </Popup>
        <Footer1/>
       
    </div>
    {/* Popup to be Implemented when user Clicks on I have My Own Insurance */}
    {/* <Popup trigger={true}>this is popup</Popup> */}
    
    </>
    
  )
}

export default Checkout
