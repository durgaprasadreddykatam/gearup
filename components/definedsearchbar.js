import React,{useState} from 'react'
import Addresssearch from './indexcomps/Addresssearch'
import Sameaddresstoggle from './indexcomps/Sameaddresstoggle'
import { useRouter } from 'next/router'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })

const DefinedSearchbar = (props) => {
    const router=useRouter();
    const[sameAddress,setSameAddress] = useState(true);
    const [address, setAddress] = useState(props.item.address);
    const [address1, setAddress1] = props.item.isSameaddress ? useState(props.address1): useState('');
    const [city,setCity] = useState(props.item.city);
    const [city1,setCity1] = props.item.isSameaddress ? useState(props.item.city1): useState('');
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
    const [fromDate, setFromDate] =props.item.fromDate ? useState(props.item.fromDate) :useState(getCurrentDate());

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
    const[todate,setToDate] = props.item.todate ? useState(props.item.todate) :useState('');
    const[fromDateObj,setFromdateobj] = useState(new Date(fromDate));
    const[toDateObj,setTodateobj] = useState(new Date(fromDate));
    fromDateObj.setMinutes(fromDateObj.getMinutes() + fromDateObj.getTimezoneOffset());
    toDateObj.setMinutes(toDateObj.getMinutes() + toDateObj.getTimezoneOffset());
    function FromdateChange(event){
        setFromDate(event.target.value);
        setFromdateobj(new Date(event.target.value));
    }
    function TodateChange(event){
        setToDate(event.target.value)
        setTodateobj(new Date(event.target.value));
    }
    const [errormessage, setErrorMessage] = useState('');
    const handleSearch = () => {
        if (sameAddress) {
            if (city === '' || fromDate === '' || todate === '') {
                setErrorMessage('Please fill in all the required fields');
            } else if (fromDateObj >= toDateObj) {
                setErrorMessage('Please select a valid return date');
            } else {
                router.push({
                    pathname: '/CarPickerPage',
                    query: {
                        address: address,
                        city: city,
                        fromDate: fromDate,
                        todate: todate,
                        isSameaddress: sameAddress,
                        fromDateObj: fromDateObj.toISOString(),
                        toDateObj: toDateObj.toISOString(),
                        no_of_days: Math.ceil((toDateObj - fromDateObj) / (1000 * 3600 * 24)) 
                    },
                });
            }
        } else {
            if (city === '' || city1 === '' || fromDate === '' || todate === '') {
                setErrorMessage('Please fill in all the required fields');
            } else if (fromDateObj >= toDateObj) {
                setErrorMessage('Please select a valid return date');
            } else {
                router.push({
                    pathname: '/CarPickerPage',
                    query: {
                        address: address,
                        address1: address1,
                        city: city,
                        city1: city1,
                        fromDate: fromDate,
                        todate: todate,
                        isSameaddress: sameAddress,
                        fromDateObj: fromDateObj.toISOString(),
                        toDateObj: toDateObj.toISOString(),
                        no_of_days: Math.ceil((toDateObj - fromDateObj) / (1000 * 3600 * 24)) 
                    },
                });
            }
        }
    };
return (
    <>
     
        <div className={`${oswald.className} flex mt-16 p-5 flex-col`}>

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
                    <input  value={fromDate} min={getCurrentDate()} onChange={FromdateChange}   className=' focus:outline-none bg-inherit' type='date'></input>
                </div>
                <div className='hidden lg:block focus-within:border-sky-500 h-20 p-1 rounded-xl w-64 focus-within:border-1'>
                    <span className='hidden lg:block text-blue-500 font-extrabold'>To Date</span>
                    <input value={todate} min={minToDateStr}  onChange={TodateChange}  className='bg-inherit focus:outline-none' type='date'></input>
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
            <input value={fromDate} min={getCurrentDate()} onChange={FromdateChange}  className='mt-2 bg-inherit focus:outline-none' type='date'></input>
            </div>
            <div className='flex p-3 flex-col'>
            <span className='text-blue-500 font-extrabold'>To Date</span>
            <input value={todate} min={minToDateStr}  onChange={TodateChange}  className='mt-2 bg-inherit focus:outline-none' type='date'></input>
            </div>
        </div>
        <div className='flex  lg:hidden px-5 flex-col'>
        <button onClick={handleSearch} className='w-full mt-5 h-14 bg-blue-500 rounded-lg text-2xl text-white font-extrabold'>Search</button>
        </div>
    
    </>

  )}
  export default DefinedSearchbar

