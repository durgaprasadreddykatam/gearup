import React,{useState} from 'react'
import Image from 'next/image'
import calender from '../../public/icons/calender.png'
import Location from '../../public/icons/location.png'
import Addresssearch from './Addresssearch'
import Sameaddresstoggle from './Sameaddresstoggle'
import { useRouter } from 'next/router'

const Searchbar = () => {
    const router=useRouter();
    const[sameAddress,setSameAddress] = useState(true);
    const [address, setAddress] = useState('');
    const [address1, setAddress1] = useState('');
    const [city,setCity] = useState('');
    const [city1,setCity1] = useState('');
    const handleAddressChange = (value,city) => {
        setAddress(value);
        setCity(city);
      };
      const handleAddressChange1 = (value,city) => {
        setAddress1(value);
        setCity1(city);
      };
      
    function toggleSameAddress(){
        setSameAddress(!sameAddress);
    }
    const [fromDate, setFromDate] = useState(getCurrentDate());

  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  const minToDate = new Date(fromDate);
  minToDate.setDate(minToDate.getDate() + 1);

  const minToDateStr = minToDate.toISOString().substr(0, 10);
    const addresstext = sameAddress ? 'Delivery & Return location' : 'Delivery location'
    const[todate,setToDate] = useState('');

    const [errormessage, setErrorMessage] = useState('');

    const handleSearch = () => {
        const fromDateObj = new Date(fromDate);
        const toDateObj = new Date(todate);

    if (sameAddress) {
        if (city === '' || fromDate === '' || todate === '') {
        setErrorMessage('Please fill in all the required fields');
        } else if (fromDateObj >= toDateObj) {
        setErrorMessage('Please select a valid return date');
        } else {
        router.push('/CarPickerPage');
        }
    } else {
        if (city === '' || city1 === '' || fromDate === '' || todate === '') {
        setErrorMessage('Please fill in all the required fields');
        } else if (fromDateObj >= toDateObj) {
        setErrorMessage('Please select a valid return date');
        } else {
        router.push('/CarPickerPage');
        }
    }
    };
    

    
    

  return (
    <>
     
        <div className='flex mt-16 p-5 flex-col'>

            <div className={`border-1 ${sameAddress ? `h-20`: `h-40`}lg:h-20 flex flex-col items-center lg:flex-row rounded-xl`}>

                <div className='w-full z-30 h-20 rounded-xl cursor-pointer px-5 py-2 focus-within:border-1 focus-within:border-sky-500'>
                    <span className='text-blue-500 font-extrabold'>{addresstext}</span>
                    <Addresssearch value={address} onChange={handleAddressChange}/>
                </div>
                {!sameAddress && <div className='w-full z-20 h-20 rounded-xl cursor-pointer px-5 py-2 focus-within:border-1 focus-within:border-sky-500'>
                    <span className='text-blue-500 font-extrabold'>Return location</span>
                    <Addresssearch value={address1} onChange={handleAddressChange1}/>
                </div>}
                <div className='hidden lg:block focus-within:border-sky-500 h-20 p-1 rounded-xl w-64 focus-within:border-1'>
                    <span className='hidden lg:block text-blue-500 font-extrabold'>From Date</span>
                    <input  value={fromDate} min={getCurrentDate()} onChange={(event)=>{setFromDate(event.target.value)}}   className=' focus:outline-none bg-inherit' type='date'></input>
                </div>
                <div className='hidden lg:block focus-within:border-sky-500 h-20 p-1 rounded-xl w-64 focus-within:border-1'>
                    <span className='hidden lg:block text-blue-500 font-extrabold'>To Date</span>
                    <input value={todate} min={minToDateStr}  onChange={(event)=>{setToDate(event.target.value)}} className='bg-inherit focus:outline-none' type='date'></input>
                </div>
                <div className=' hidden lg:flex w-56 ml-7  flex-shrink-0 rounded-lg items-center h-full'>
                    <button onClick={handleSearch}  className='bg-blue-500 text-white h-10 rounded-xl w-28  hover:bg-blue-600'>Search</button>
                </div>
            </div>
            <Sameaddresstoggle toggleSameAddress={toggleSameAddress}/>
        </div>
        <div className='flex border-1 mx-5 rounded-xl lg:hidden px-5 flex-col'>
            <div className='flex p-3 flex-col'>
            <span className='text-blue-500 font-extrabold'>From Date </span>
            <input value={fromDate} min={getCurrentDate()} onChange={(event)=>{setFromDate(event.target.value)}} className='mt-2 bg-inherit focus:outline-none' type='date'></input>
            </div>
            <div className='flex p-3 flex-col'>
            <span className='text-blue-500 font-extrabold'>To Date</span>
            <input value={todate} min={minToDateStr}  onChange={(event)=>{setToDate(event.target.value)}} className='mt-2 bg-inherit focus:outline-none' type='date'></input>
            </div>
        </div>
        <div className='flex  lg:hidden px-5 flex-col'>
        <button onClick={handleSearch} className='w-full mt-5 h-14 bg-blue-500 rounded-lg text-2xl text-white font-extrabold'>Search</button>
        </div>
    
    </>

  )}
  export default Searchbar

