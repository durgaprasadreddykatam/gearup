import React,{useState} from 'react'
import Addresssearch from './indexcomps/Addresssearch'
import Sameaddresstoggle from './indexcomps/Sameaddresstoggle'
import { useRouter } from 'next/router'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import Popup from './Popup'
import { DateRangePicker } from 'react-date-range';

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
    const addresstext = sameAddress ? 'Delivery & Return location' : 'Delivery location'
    const [fromDate, setFromDate] = props.item.fromDateObj ? useState(new Date(props.item.fromDateObj)) : useState(new Date());
        const formattedfromDate = fromDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        });

      
      const [dispfromCalendar, setDispfromCalendar] = useState(false);
      
      function FromdateChange(item) {
        setFromDate(item);
        setDispfromCalendar(false);
      }
  
      // handling Todates
      
      const currentDate = new Date();
      const fiveDaysFromNow = new Date();
      fiveDaysFromNow.setDate(currentDate.getDate() + 5);
      
      const [todate, setToDate] = useState(fiveDaysFromNow);
      const formattedtoDate = todate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      
      const minToDate = new Date(fromDate);
      minToDate.setDate(minToDate.getDate() + 1);
      
      const [disptoCalendar, setDisptoCalendar] = useState(false);
      
      function TodateChange(item) {
        setToDate(item);
        setDisptoCalendar(false);
      }
      const [errormessage, setErrorMessage] = useState('');
      const handleSearch = () => {
          if (sameAddress) {
              if (city === '' || fromDate === '' || todate === '') {
                  setErrorMessage('Please fill in all the required fields');
              } else if (fromDate >= todate) {
                  setErrorMessage('Please select a valid return date');
              } else {
                  router.push({
                      pathname: '/CarPickerPage',
                      query: {
                          address: address,
                          city: city,
                          fromDate: formattedfromDate,
                          todate: formattedtoDate,
                          isSameaddress: sameAddress,
                          fromDateObj: fromDate.toISOString(),
                          toDateObj: todate.toISOString(),
                          no_of_days:Math.ceil((todate - fromDate) / (1000 * 3600 * 24)) 
                      },
                  });
              }
          } else {
              if (city === '' || city1 === '' || fromDate === '' || todate === '') {
                  setErrorMessage('Please fill in all the required fields');
              } else if (fromDate >= todate) {
                  setErrorMessage('Please select a valid return date');
              } else {
                  router.push({
                      pathname: '/CarPickerPage',
                      query: {
                          address: address,
                          address1: address1,
                          city: city,
                          city1: city1,
                          fromDate: formattedfromDate,
                          todate: formattedtoDate,
                          isSameaddress: sameAddress,
                          fromDateObj: fromDate.toISOString(),
                          toDateObj: todate.toISOString(),
                          no_of_days:Math.ceil((todate - fromDate) / (1000 * 3600 * 24)) 
                      },
                  });
              }
          }
      };
      const[popupstate,setPopupstate]=useState(false);
      React.useEffect(() => {
          if (popupstate) {
              document.body.style.overflow = 'hidden';
              } else {
              document.body.style.overflow = 'auto';
              }
          }, [popupstate]);
  
          const selectionRange = {
              startDate:fromDate ,
              endDate: todate,
              key: 'selection',
            }
            function handleSelect(ranges){
              setFromDate(ranges.selection.startDate);
              setToDate(ranges.selection.endDate);
          }
return (
    <>
     
        <div className={`${oswald.className} flex mt-16 p-5 flex-col`}>

            <div className={`border-1 ${sameAddress ? `h-20`: `h-40`}md:h-20 flex flex-col items-center md:flex-row rounded-xl`}>

                <div className='w-full z-30 h-20 rounded-xl cursor-pointer px-5 py-2 focus-within:border-1 focus-within:border-sky-500'>
                    <span className='text-blue-500 font-extrabold'>{addresstext}</span>
                    <Addresssearch value={address} onChange={handleAddressChange}/>
                </div>
                {!sameAddress && <div className='w-full z-20 h-20 rounded-xl cursor-pointer px-5 py-2 focus-within:border-1 focus-within:border-sky-500'>
                    <span className='text-blue-500 font-extrabold'>Return location</span>
                    <Addresssearch value={address1} onChange={handleAddressChange1}/>
                </div>}
                <div onClick={() => {
                        setDisptoCalendar(false);
                        setDispfromCalendar(true);
                        }} 
                        className={` ${dispfromCalendar ? `border-sky-500 border-1`:``}  hidden md:block h-20 p-1 rounded-xl shrink-0 w-40 cursor-pointer relative `}>
                    <span className='hidden md:block text-blue-500 font-extrabold'>DeliveryDate</span>
                    <span>{formattedfromDate}</span>


                    {dispfromCalendar && <Calendar 
                    date={fromDate}
                    minDate={new Date()}
                    color='#4A83C4'
                    onChange={FromdateChange}
                    className=' absolute top-20 bg-white z-10 -left-2'
                    />}



                   
                </div>
                <div onClick={() => {
                        setDisptoCalendar(true);
                        setDispfromCalendar(false);
                        }} 
                        className={` ${disptoCalendar ? `border-sky-500 border-1`:``} hidden md:block h-20 p-1 shrink-0 rounded-xl w-40 cursor-pointer relative `}>
                    <span className='hidden md:block text-blue-500 font-extrabold'>Return Date</span>
                    <span>{formattedtoDate}</span>


                    {disptoCalendar && <Calendar 
                    date={todate}
                    minDate={minToDate}
                    color='#4A83C4'
                    onChange={TodateChange}
                    className=' absolute top-20 bg-white z-10 -left-2'
                    />}


                    
                </div>
                <div className=' hidden md:flex w-56 ml-7  flex-shrink-0 rounded-lg items-center h-full'>
                    <button onClick={handleSearch}  className='bg-blue-500 text-white h-10 rounded-xl w-28  hover:bg-blue-600'>Search</button>
                </div>
            </div>
            <Sameaddresstoggle toggleSameAddress={toggleSameAddress}/>
        </div>
        <div onClick={()=>{setPopupstate(true)}}  className='flex border-1 mx-5 rounded-xl md:hidden px-5 flex-col'>
            <div className='flex p-3 flex-col'>
            <span className='text-blue-500 font-extrabold'>Delivery Date </span>
            <span>{formattedfromDate}</span>
            </div>
            <div className='flex p-3 flex-col'>
            <span className='text-blue-500 font-extrabold'>To Date</span>
            <span>{formattedtoDate}</span>
            </div>
        </div>
        <div className='flex  md:hidden px-5 flex-col'>
        <button onClick={handleSearch} className='w-full mt-5 h-14 bg-blue-500 rounded-lg text-2xl text-white font-extrabold'>Search</button>
        <Popup onClose={()=>{setPopupstate(false)}} trigger={popupstate}>
            <div className='bg-white h-100 md:h-fit flex flex-col items-center rounded-xl'>
            
                <DateRangePicker
                showMonthAndYearPickers={false}
                staticRanges={[]} 
                inputRanges={[]}
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#4A83C4']}
                    onChange={handleSelect}
                    className='w-80 h-80 border-0'
                />
                <button onClick={()=>{setPopupstate(false)}} className='h-10 w-80 rounded-xl bg-blue-600 mt-4 text-white'>Save</button>

            </div>
            
        </Popup>
        </div>
    
    </>

  )}
  export default DefinedSearchbar

