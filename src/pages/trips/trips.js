import React,{useEffect,useState} from 'react'
import { useAuth } from '../../../lib/auth';
import Footer1 from '../../../components/Footer1';
import { useRouter } from 'next/router'
import axios from 'axios';
import Tripscard from '../../../components/Tripscard';
import TripscardLoading from '../../../components/TripscardLoading';
import Image from 'next/image';
import Popup from '../../../components/Popup';
import Login from '../../../components/Login';

const Trips = (props) => {
const [pasttripsadata, setPasttripsadata] = useState([]);
const [upcomingripsadata, setUpcomingtripsadata] = useState([]);
const[pastripsfound,setPastripsfound] = useState(false);
const[upcomingripsfound,setUpcomingripsfound] = useState(false);
const [popupstate,setPopupstate] = useState(false);

React.useEffect(() => {
  if (popupstate) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [popupstate]);

const router = useRouter();
const isAuth = useAuth();
const [isLoading, setIsLoading] = useState(true);
React.useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || Object.keys(user).length === 0) {
    return;
  }
  setIsLoading(true);
  axios.post('/api/TripsApi', {userid: user.id})
  
      .then((res) => {
          if(res.data.pastripsmessage==="Past Trips Found" && res.data.upcomingtripsmessage==="Upcoming Trips Found"){
              setPastripsfound(true);
              setUpcomingripsfound(true);
              setPasttripsadata(res.data.Pasttrips);
              setUpcomingtripsadata(res.data.Upcomingtrips);
              setIsLoading(false);
            }
            else if(res.data.pastripsmessage==="Past Trips Found" && res.data.upcomingtripsmessage==="No Upcoming Trips Found"){
              setPastripsfound(true);
              setUpcomingripsfound(false);
              setPasttripsadata(res.data.Pasttrips);
              setIsLoading(false);
            }
            else if(res.data.pastripsmessage==="No Past Trips Found" && res.data.upcomingtripsmessage==="Upcoming Trips Found"){
              setPastripsfound(false);
              setUpcomingripsfound(true);
              setUpcomingtripsadata(res.data.Upcomingtrips);
              setIsLoading(false);
            }
            else{
              setPastripsfound(false);
              setUpcomingripsfound(false);
              setIsLoading(false);
            }});

}, []);



const upcomingtrips =  !upcomingripsfound ? (
  <div></div>
) : (
  upcomingripsadata.map(item => <Tripscard item={item} />)
);

const pasttrips = !pastripsfound ? (
  <div></div>
) : (
  pasttripsadata.map(item => <Tripscard item={item} />)
);

return (
  <>
    {/* When User is Not Authenticated */}
    {!isAuth && 
      <div>
        <div className='h-100 flex flex-col items-center justify-center w-full p-5 lg:p-20 border-y-2 border-y-sky-600'>
          <div className='lg:text-2xl'>Have Fun Booking a car</div>
          <div className='lg:text-2xl mt-10'>Sign up or log in to plan your next trip with Us.</div>
          <button onClick={()=>{setPopupstate(true)}} className='h-12 w-60 text-white bg-blue-500 rounded-xl mt-10'>Sign Up</button>
        </div>
      </div>
    }
    {isAuth &&

    <>
      <div className={`${upcomingripsfound ? `flex flex-col p-2 lg:p-20`:``}`}>
        {upcomingripsfound && <div>
          <div className='text-3xl mb-5'>Upcoming Trips</div>
          {upcomingtrips}
        </div>}
        {pastripsfound&& <div className='text-3xl mt-10'>Past Trips</div>}
        {pasttrips}
      </div>
      {isLoading && <TripscardLoading/>}
      {!upcomingripsfound && !pastripsfound&& <div className='flex flex-col lg:flex-row'>
       
        <Image src={`/Images/nobookings.webp`} width={600} height={500} className=''/>
        <div className='flex flex-col w-full items-center lg:ml-10'>
        <div className=' text-4xl' >No trips (yet!)</div>
        <div className='text-2xl'>You haven't booked a Car yet.</div>
        <div> How about doing so for your next adventure?</div>
        <button onClick={()=>{router.push('/')}} className='h-12 w-80 bg-blue-600 text-white rounded-2xl mt-5 lg:mt-20 hover:bg-blue-500'>Book Your Car Now</button>
        </div>
        
        
        </div>}
    </>
      
       
    }
    <Popup trigger={popupstate} onClose={()=>{setPopupstate(false)}}>
      <div className='bg-white h-full md:h-fit'><Login onClick={()=>{setPopupstate(false)}}/></div>
    </Popup>
    <Footer1/>  
    
    
    
  </>
);
  }

export default Trips
