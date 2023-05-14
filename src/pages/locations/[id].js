import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import data from '../../../data/Locationpagesdata'
import searchbar from '../../../components/indexcomps/Searchbar'
import Searchbar from '../../../components/indexcomps/Searchbar'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const url=`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`
import Location from '../../../public/icons/kindpnglocation.png'
import shock from '../../../public/icons/electricy.png'
import cal from '../../../public/icons/kindpngcalender.png'

const LocationDetails = () => {
    const router = useRouter();
    const id  = router.query.id;
    const[pageload,setpageload]=useState(true);
    useEffect(()=>{
        setpageload(false);
    },[])

    const renderpage=data[id-1] ? data[id-1].map(item=>{
        return(
            <div className='flex flex-col'>
                <div className='relative w-full flex flex-col items-center  justify-center'>
                <Image src={item.image} className=' hidden lg:block w-full h-140'/>
                <div className='lg:absolute top-10 rounded-xl md:text-3xl text-xl   lg:text-4xl text-white'>
                        <span className='hidden lg:inline'>The Best Road Trips From</span>
                        <span className='font-extrabold text-blue-600 whitespace-nowrap'> {item.name},{item.state}</span>
                </div>
                <div className='lg:absolute w-full lg:w-min top-20 md:top-20 lg:top-40 rounded-xl opacity-70  bg-white'><Searchbar/></div>
                </div>
            </div>
            
            
        )
    }):null;
    const rendertrips=data[id-1] ? data[id-1].map(item=>{
        return(
            <>
            <div className='flex flex-col lg:px-20'>
                <div><span className='text-blue-600'>LOCAL TIP</span></div>
                <div className='text-3xl'>Best 6 Road Trips</div>
                <div className='text-3xl text-blue-600 font-extrabold'>From {item.name} City</div>
                <div className='mt-4'>{item.para1}</div>
                <div className='mt-4'>{item.para2}</div>
                
            </div>
            </>
        )
    }):null;

    const rendersuggestion=data[id-1] ? data[id-1].map(item=>{
        return(
            <div className='h-50 w-full'>
                {item.Best_6_Road_Trips.map(best6=>{
                    return(
                        <div className='flex flex-col p-5 lg:p-20 lg:flex-row '>
                           {pageload &&  <div className='w-full border-blue-500 border-1 bg-slate-600 animate-pulse my-5 h-120 rounded-2xl  lg:my-0 lg:mx-5 lg:w-1/2'>
                                
                                </div>}
                            {!pageload && <div className='w-full my-5 h-120 rounded-2xl  lg:my-0 lg:mx-5 lg:w-1/2 '>
                                <Image src={`/images/${id}/${best6.id}.jpeg`} height={500} width={500} alt=''className='w-full h-120 rounded-2xl '/>
                                </div>}
                            <div className='w-full relative flex flex-col bg-green-600 text-white my-5 h-120 rounded-2xl p-3 lg:my-0 lg:mx-5 lg:w-1/2'>
                                <div className='font-extrabold text-4xl'>{best6.name}</div>
                                <div className='mt-5 text-xl font-bold'>Travel Time: {best6.Travel_time}</div>
                                <div className='mt-5'>{best6.description}</div>
                                <div className='absolute flex justify-around items-center bottom-7 w-5/6'>
                                    <buton className='h-12 flex hover:bg-blue-400 cursor-pointer items-center justify-center rounded-xl w-32 bg-blue-600'>Book a Car</buton>
                                    <span className='text-black  text-xl font-black'>Recommended Car: <span className=''>{best6.recommended_car}</span> </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        )
    }):null;


  return (
    <>
    <script src={url}></script>
        <div className={`${oswald.className} flex flex-col`}> 
            <div className='h-160 lg:h-140 '>
                {renderpage}
            </div>
            <div className={` ${oswald.className} flex flex-col --5 lg:p-10 lg:px-20 border-b-2 items-center  bg-green-50`}>
                <span className='text-3xl m-4'>How It Works</span>
                <div className='flex flex-col mt-10 lg:flex-row'>
                    <div className='flex w-100 m-4 p-4 justify-center items-center flex-col'>
                    <div className='h-40 flex items-center'><Image src={Location} alt='' height={120} width={120}/></div>
                        <div className='flex flex-col items-center justify-around mt-3'><span className='text-2xl font-extrabold'>1.Tell Us Where & When</span>
                        <span className='text-xl'>You decide where and when your new and clean rental car will be delivered and picked up — Search an address to get started.</span></div>
                        <div></div>
                        

                    </div>
                    <div className='flex w-100  m-4 p-4  justify-center items-center flex-col'>
                        <div className='h-40 flex items-center'><Image src={shock} alt='' height={50} width={50}/></div>
                        
                        <div className='flex flex-col items-center justify-around mt-3'><span className='text-2xl font-extrabold'>2. We Deliver and Pick Up Your Car</span>
                        <span className='text-xl'>Easy and convenient hand-off. We will text you updates with our ETA. We will also refuel the car for you.</span></div>
                        <div></div>
                        

                    </div>
                    <div className='flex w-100  m-4 p-4  justify-center items-center flex-col'>
                    <div className='h-40 flex items-center'><Image src={cal} alt='' height={60} width={60}/></div>
                        <div className='flex flex-col items-center justify-around mt-3'><span className='text-2xl font-extrabold'>3. Flexibility to Adjust or Cancel</span>
                        <span className='text-xl'>We know plans change — you can adjust the delivery and pickup locations or times without hassle..</span></div>
                        <div></div>
                        

                    </div>
                    
                </div>
            </div>
            {/* Trips */}
            <div className='p-10'>{rendertrips}</div>
            <div>{rendersuggestion}</div>
    </div>
    </>
    
  )
}

export default LocationDetails
