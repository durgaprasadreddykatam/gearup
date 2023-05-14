import React,{useEffect,useState}  from 'react'
import { useAuth } from '../../../lib/auth';
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import axios from 'axios'
import Footer1 from '../../../components/Footer1';
import Button1 from '../../../components/buttons/Button';
import {motion as m} from 'framer-motion';
import Ls from '../../../components/animations/ls';
import { AnimatePresence } from 'framer-motion';
import Skeleton from '../../../components/animations/skeleton';

const Account = () => {
    const isAuth = useAuth();
    const [userdata, setUserdata] = useState({mobile: '',firstname: '',lastname: ''});
    const [userid, setUserid] = useState('');
    const Changeuserdata = (e) => {
        setUserdata({...userdata,[e.target.name]:e.target.value});
    }
    function SaveChanges(){
      axios.post('/api/userdataupdate' , {id:userid,userdata:userdata,isActive:true})
      .then((response) => {
        setTimeout(()=>{
          setIsActive(false);
          RenderNotification();
        },2000);
        
    }, (error) => {
      console.log(error);
      setTimeout(()=>{
        setIsActive(false);
      },2000);
    });
    }
    function deleteuser(){
      axios.post('/api/userdataupdate' , {id:userid,userdata:userdata,isActive:false})
      .then((response) => {
        if(response.data.acknowledged){
          localStorage.removeItem('user');
          window.location.href='/';
        }
    }, (error) => {
      console.log(error);
    });
    }
    useEffect(() => {
        const storagedata=JSON.parse(localStorage.getItem('user'));
        if (storagedata && storagedata.userauthenticated) {
            setUserid(storagedata.id);
            axios.post('/api/fetchaccountdetails' , {id:storagedata.id})
            .then((response) => {
              const data1 = {email:response.data.email,mobile:response.data.mobile,firstname:response.data.firstname,lastname:response.data.lastname};
            setUserdata(data1);
            setTimeout(()=>{
              setIsSkeleton(false);
            },1300);
            
           }, (error) => {
            console.log(error);
            });
        }
    }, []);
   // functions for rotating Button
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
      setIsActive(!isActive);
    };

    //function for notification
    const [isNotification, setIsNotification] = useState(false);
    function RenderNotification(){
      setIsNotification(true);
      setTimeout(()=>{
        setIsNotification(false);
      },2000);
    }

    const [isSkeleton, setIsSkeleton] = useState(true);
    
  
   
    
    
    

  return (
    <>
            {isAuth&& 
            
            <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1,ease: "easeOut" }}
             className={`p-5 mb-20  ${oswald.className}`}>
              <AnimatePresence>
                {isNotification && <Ls key={isNotification} message="Sucess" text="Your Account Information has been Sucessfully Updated"></Ls>}
              </AnimatePresence>
              
              
              
              <div className='p-5 relative flex flex-col lg:items-center lg:justify-center'>
                  
                  <div className='flex   flex-col lg:w-200  lg:flex-row flex-wrap'>
                      <span className='top-0 w-full lg:mx-3 text-2xl left-0 lg:text-left'>Account</span>
                      {/* normal */}
                      
                      {!isSkeleton && <div className='h-14  lg:w-88 lg:m-3 flex items-center pl-5 rounded-lg cursor-not-allowed bg-gray-200 text-gray-400  w-full border-2 mt-4'>{userdata.email}</div>}
                      
                      {/* animate */}
                      {isSkeleton && <div className='h-14 animate-pulse border-blue-300   lg:w-88 lg:m-3 flex items-center pl-5 rounded-lg cursor-not-allowed bg-slate-200 text-gray-400  w-full border-2 mt-4'></div>}
                      {/* normal */}
                      {!isSkeleton && <input onChange={Changeuserdata} name='mobile' value={userdata.mobile} className='h-14 lg:w-88 lg:m-3  flex items-center pl-5 rounded-lg w-full border-2 mt-4'></input>}
                      {/* animate */}
                      {isSkeleton && <input className='h-14 bg-slate-200 animate-pulse border-blue-300  lg:w-88 lg:m-3  flex items-center pl-5 rounded-lg w-full border-2 mt-4'></input>}
                      {/* normal */}
                      {!isSkeleton && <input onChange={Changeuserdata} name='firstname' value={userdata.firstname} className='h-14 lg:w-88 lg:m-3  flex items-center pl-5 rounded-lg  w-full border-2 mt-4'></input>}
                      {/* animate */}
                      {isSkeleton && <input className='h-14 bg-slate-200 animate-pulse border-blue-300  lg:w-88 lg:m-3  flex items-center pl-5 rounded-lg  w-full border-2 mt-4'></input>}
                      {/* normal */}
                      {!isSkeleton && <input onChange={Changeuserdata} name='lastname' value={userdata.lastname} className='h-14 lg:w-88 lg:m-3  flex items-center pl-5 rounded-lg   w-full border-2 mt-4'></input>}
                      {/* animate */}
                      {isSkeleton && <input className='h-14 bg-slate-200 animate-pulse border-blue-300  lg:w-88 lg:m-3  flex items-center pl-5 rounded-lg   w-full border-2 mt-4'></input>}

                      <div className='w-full lg:mx-3 mt-5 lg:w-184 flex justify-between'>
                        {isActive && <Button1 isActive={isActive}/>}
                        {!isActive && <button onClick={()=>{handleClick();SaveChanges()}} className='h-12 w-40 bg-blue-600 rounded-xl text-white'>Save Changes</button>}
                        <button  onClick={deleteuser}  className=' h-12 w-40 lg:mr-2 bg-red-600 rounded-xl text-white'>Delete Account</button>

                        {/* Loader Button */}
                        
                        
                        
                      </div>
                      
                  </div>
              </div>
              
              
              
            
            </m.div>}
            <Footer1/>
    </>
    
  )
}

export default Account
