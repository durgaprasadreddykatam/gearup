import React,{useEffect,useState} from 'react'
import { useAuth } from '../../../lib/auth';
import Footer1 from '../../../components/Footer1';
import { useRouter } from 'next/router'
import axios from 'axios';
import Tripscard from './Tripscard';
import TripscardLoading from './TripscardLoading';

const Trips = (props) => {
const [pasttripsadata, setPasttripsadata] = useState([]);
const [upcomingripsadata, setUpcomingtripsadata] = useState([]);
const [user, setUser] = useState('');
const router = useRouter();
const isAuth = useAuth();

useEffect(() => {
  localStorage.getItem('user')
    ? setUser(JSON.parse(localStorage.getItem('user')))
    : setUser(null);
}, []);

useEffect(() => {
  axios.post('/api/TripsApi', {userid: user.id})
    .then((res) => {
      setPasttripsadata(res.data.Pasttrips);
      setUpcomingtripsadata(res.data.Upcomingtrips);
    });

},[user]);

const isLoading = pasttripsadata.length === 0 || upcomingripsadata.length === 0;

const upcomingtrips = isLoading ? (
  <div><TripscardLoading/></div>
) : (
  upcomingripsadata.map(item => <Tripscard item={item} />)
);

const pasttrips = isLoading ? (
  <div><TripscardLoading/></div>
) : (
  pasttripsadata.map(item => <Tripscard item={item} />)
);

return (
  <>
    {/* When User is Not Authenticated */}
    {!isAuth && 
      <div>
        <div className='h-100 flex flex-col items-center justify-center w-full p-5 lg:p-20 border-y-2 border-y-sky-600'>
          <div className='text-2xl'>Have Fun Booking a car</div>
          <div className='text-2xl mt-10'>Sign up or log in to plan your next trip with Us.</div>
          <button onClick={()=>{router.push('/signup')}} className='h-12 w-60 text-white bg-blue-500 rounded-xl mt-10'>Sign Up</button>
        </div>
        <Footer1/>
      </div>
    }
    {isAuth &&

      <div className='flex flex-col p-2 lg:p-20'>
        <div>
          <div className='text-3xl mb-5'>Upcoming Trips</div>
          {upcomingtrips}
        </div>
        <div className='text-3xl mt-10'>Past Trips</div>
        {pasttrips}
        
      </div>
    }
  </>
);
  }

export default Trips
