import React, { Fragment } from 'react'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import data from '../../data/Carpickerdata.js';
import Image from 'next/image.js';
import Carpicker from '../../components/carpicker/Carpicker.js'
import Footer1 from '../../components/Footer1.js';
import Popup from '../../components/Popup.js';
import bluetooth from '../../public/icons/icons8-bluetooth-100.png';
import winter from '../../public/icons/icons8-winter-100.png';
import gear from '../../public/icons/icons8-gear-stick-100.png';
import gas from '../../public/icons/icons8-gas-100.png';
import luggage from '../../public/icons/icons8-luggage-64.png';
import carseat from '../../public/icons/icons8-car-seat-100.png';
import close from '../../public/icons/close.png';
import DefinedSearchbar from '../../components/definedsearchbar.js';
const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const url=`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`
import { useRouter } from 'next/router'

const CarPickerPage = () => {
  const router = useRouter();
  const searchdata=router.query;
  const [cardetails, setCardetails] = React.useState(null);
  const [carselected, setCarselected] = React.useState({});

  const[popupstate,setPopupstate] = React.useState(false);
  function showPopup(){
    setPopupstate(true);
  }
  function HandleSelect(id) {
    console.log(id);
    router.push({
      pathname: `/checkout/${id}`,
      query: {
        ...searchdata,
        carid: id,
      }
    });
  }
  
  function handledetails(id) {
    setPopupstate(true);
    setCarselected(data[id-1]);
    
  }
  
  React.useEffect(() => {
    if (popupstate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [popupstate]);

  const rendercats = data.map((cat) => {
    return(
      <>
        <div className={` ${oswald.className} lg:border-y-1  border-top-sky-500 flex flex-col lg:flex-row`} >
          <Carpicker handledetails={handledetails} key={cat.id} handleclick={HandleSelect}  item={cat} price={cat.price} name={cat.catogary}/>
        </div>
      </>
    )
    

  });
  const[editdates,setEditdates] = React.useState(false);
  console.log(searchdata);






  return (
    <>
    <script src={url}></script>
      {editdates && <DefinedSearchbar  isSameaddress='true' item={searchdata}/>}
        <div key="car-picker-page" className={`${oswald.className} md:p-20 p-5 relative  w-full`}>
          {!editdates && <div className='mb-10'>
          <div className='flex justify-center items-center text-xl text-blue-600'>{searchdata.address}</div>
          <div  className='flex justify-center items-center'>{searchdata.fromDate} to {searchdata.todate}</div>
          <div className='flex justify-center items-center'><button onClick={()=>{setEditdates(true)}} className='h-12 w-40 bg-blue-500 rounded-xl text-white text-extrabold '>Edit details</button></div>
          </div>}
          {rendercats}
        </div>
        <Footer1/>
        {/* Popup */}
        <Popup trigger={popupstate} onClose={()=>{(setPopupstate(false))}}>
          <div className={`${oswald.className} md:rounded-xl rounded-t-2xl h-100 md:h-80 w-screen md:w-120  bg-white flex flex-col relative  p-5`}>
            <Image onClick={()=>{(setPopupstate(false))}} src={close} height={15} width={15} className='absolute cursor-pointer' alt='' />
            <div className='font-extrabold text-xl flex flex-col items-center'>Details</div>
            <div className='flex items-center h-16'>
              <Image src={carseat} height={25} width={25} alt=''/>
              <div className='ml-2 text-lg font-bold'>{carselected.capacity} Seats</div>
            </div>
            <div className='flex items-center h-16'>
              <Image src={luggage} height={25} width={25} alt=''/>
              <div className='ml-2 text-lg font-bold'>{carselected.luggage} suit case</div>
            </div>
            <div className='flex items-center h-16'>
              <Image src={gear} height={25} width={25} alt=''/>
              <div className='ml-2 text-lg font-bold'>{carselected.transmission} Transmission</div>
            </div>
            <div className='flex items-center h-16'>
              <Image src={gas} height={25} width={25} alt=''/>
              <div className='ml-2 text-lg font-bold'>{carselected.fuel_Type}</div>
            </div>
            <div className='flex items-center h-16'>
              <Image src={winter} height={25} width={25} alt=''/>
              <div className='ml-2 text-lg font-bold'>{carselected.ac}</div>
            </div>
            <div className='flex items-center h-16'>
              <Image src={bluetooth} height={25} width={25} alt=''/>
              <div className='ml-2 text-lg font-bold'>{carselected.bluetooth}</div>
            </div>
          </div>
                  
        </Popup>
        
        
    </>
    
  )
}

export default CarPickerPage
