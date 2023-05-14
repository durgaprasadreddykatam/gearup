import React, { Fragment, useEffect } from 'react'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
// import data from '../../data/Carpickerdata.js';
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
import axios from 'axios';
import TripscardLoading from '../../components/TripscardLoading.js';

const CarPickerPage = () => {
  const router = useRouter();
  const searchdata=router.query;
  const[isLoaing,setIsLoading] = React.useState(true);
  
  const [data, setData] = React.useState([]);
  // fetching data from mongo db for the selected city

  useEffect(() => {
    if(searchdata.city!==undefined){
      axios.post('/api/CarsDataforCarPicker' , {city:searchdata.city})
    .then((res) => {
      if(res.data.message==="success"){
        setData(res.data.data);
        setIsLoading(false);
        
      }
      else{
        setIsLoading(false);
        
      }
    }
    )
    .catch(function (error) {
      console.log(error);
    }
    );
    }

    

  }, [searchdata]);


  const [cardetails, setCardetails] = React.useState(null);
  const [carselected, setCarselected] = React.useState({});

  const[popupstate,setPopupstate] = React.useState(false);
  function showPopup(){
    setPopupstate(true);
  }
  function HandleSelect(id) {
    router.push({
      pathname: `/checkout/${id}`,
      query: {
        ...searchdata,
        id: id,
      }
    });
  }
  
  function handledetails(carid) {
    const cardata=data.filter((car)=>car.combinedCars.carid===carid);
    setPopupstate(true);
    setCarselected(cardata);
    console.log(carselected);
    
  }
  
  React.useEffect(() => {
    if (popupstate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [popupstate]);

 

  const rendercats = data.length > 0 ? (
    data.map((cat) => {
      return (
        <div key={cat.combinedCars.id} className={`${oswald.className} lg:border-y-1 border-top-sky-500 flex flex-col lg:flex-row`}>
          <Carpicker handledetails={handledetails} handleclick={HandleSelect} item={cat.combinedCars} price={cat.combinedCars.price} name={cat.combinedCars.catogary} />
        </div>
      );
    })
  ) : (
    <div className='flex justify-center flex-col items-center text-2xl'>
      <div className='text-3xl'>We're Sorry!</div>
      <div className='lg:w-160 text-lg mt-10'>Unfortunately, we have not yet expanded our car rental services to your selected city. We apologize for the inconvenience and appreciate your interest in our services. Please check back with us periodically as we continue to grow and expand our offerings.</div>
    </div>
  );
  
  const[editdates,setEditdates] = React.useState(false);






  return (
    <>
    <script src={url}></script>
    {!isLoaing && <div>
    
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
        {carselected.length>0 && <div className={`${oswald.className} md:rounded-xl rounded-t-2xl h-100 md:h-80 w-screen md:w-120  bg-white flex flex-col relative  p-5`}>
          <Image onClick={()=>{(setPopupstate(false))}} src={close} height={15} width={15} className='absolute cursor-pointer' alt='' />
          <div className='font-extrabold text-xl flex flex-col items-center'>Details</div>
          <div className='flex items-center h-16'>
            <Image src={carseat} height={25} width={25} alt=''/>
            <div className='ml-2 text-lg font-bold'>{carselected[0].combinedCars.capacity} Seats</div>
          </div>
          <div className='flex items-center h-16'>
            <Image src={luggage} height={25} width={25} alt=''/>
            <div className='ml-2 text-lg font-bold'>{carselected[0].combinedCars.luggage} suit case</div>
          </div>
          <div className='flex items-center h-16'>
            <Image src={gear} height={25} width={25} alt=''/>
            <div className='ml-2 text-lg font-bold'>{carselected[0].combinedCars.transmission} Transmission</div>
          </div>
          <div className='flex items-center h-16'>
            <Image src={gas} height={25} width={25} alt=''/>
            <div className='ml-2 text-lg font-bold'>{carselected[0].combinedCars.fuel_Type}</div>
          </div>
          <div className='flex items-center h-16'>
            <Image src={winter} height={25} width={25} alt=''/>
            <div className='ml-2 text-lg font-bold'>{carselected[0].combinedCars.ac}</div>
          </div>
          <div className='flex items-center h-16'>
            <Image src={bluetooth} height={25} width={25} alt=''/>
            <div className='ml-2 text-lg font-bold'>{carselected[0].combinedCars.bluetooth}</div>
          </div>
        </div>}
                  
        </Popup>
    </div>}
   {isLoaing && <div className='flex flex-col p-10'>
    <TripscardLoading/>
    <TripscardLoading/>
    <TripscardLoading/>
    <TripscardLoading/>

    </div>}
        
        
    </>
    
  )
}

export default CarPickerPage
