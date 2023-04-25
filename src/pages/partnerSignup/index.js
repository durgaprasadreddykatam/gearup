import React ,{useState,useEffect} from 'react'
import { Oswald ,Concert_One } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
const concert_one = Concert_One({ subsets: ['latin'], weight:'400' });
import usflag from '../../../public/icons/usflag.png'
import Image from 'next/image'
import data from '../../../data/Locations'

const PartnerSignup = () => {
    const [formdata, setFormdata] = useState({});

    const formvalues = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };
    console.log(formdata);

    const [show, setShow] = useState(false);
    const buttontext= show ?  'Collapse Content':'Continue Reading';
    const dropdownvalues= data.map((item)=>{
        return(
            <option className='' value={item.name}>{item.name}</option>
        )
    })

  return (
    <>
        <div className={`p-5 w-full bg-sky-500 h-40 flex justify-center items-center relative ${oswald.className}` }>
            <div className='text-white flex flex-col items-center'>
                <div>You are Appling for:</div>
                <div className='text-4xl'>GearUp Driver Partner</div>
            </div>
            <div className='absolute flex border-2 rounded-full bg-white items-center justify-center -bottom-24 h-32 w-32'>
                <div className={`text-3xl  mb-5 pt-2 text-sky-600 ${concert_one.className} `}>GearUp</div>
            </div>
        </div>

        {/* Content */}
        <div className={`p-5 w-full mt-40  flex flex-col justify-center  items-center relative ${oswald.className}` }>
            <div className={`lg:w-160 p-5 overflow-hidden  ${show ? ``:`h-40`} ` }>
                <span className=' font-extrabold text-2xl'>Description</span>
                <div className='mt-5 text-xl font-bold'>Rental Car Delivery Driver - Flexible Earning Opportunity!</div>
                <div className='mt-5'>Looking for a flexible earning opportunity? Join Gearup's "Roamer" partner team as a Rental Car Delivery Driver! Your main responsibility will be to pick up and drop off rental cars from various locations in your city. With Gearup, you'll have the flexibility to choose your own schedule and earn up to $35 per hour by securing your fares ahead of time.</div>
                <div className='mt-5'>To be eligible for this position, you must hold a valid driver's license and be legally authorized to work in United States. You must also be 21 years or older.</div>
                <div className='mt-5'>As a Gearup Rental Car Delivery Driver, you'll be the face of the company, interacting with customers and providing exceptional service. You'll need to conduct a thorough inspection of the rental car before and after each rental, making note of any damages or maintenance issues.</div>
                <div className='mt-5'>We're looking for drivers who are efficient and resourceful, using their preferred mode of transportation to navigate between rental locations. While you can choose your own schedule, keep in mind that weekends are typically the busiest and most lucrative times of the week, so there's potential for weekend bonuses.</div>
                <div className='mt-5'>Please note that you can only drive in one location, so be sure to select the appropriate location when applying. If you're interested in driving in New York or Brooklyn, please choose the respective location. Don't sign up for Jersey City if you wish to drive in those areas.</div>
                <div className='mt-5'> <span className='font-extrabold'>Job Type: </span>Independent Contractor </div>
                <div className='mt-5'><span  className='font-extrabold'>Salary: </span>Task-based! Up to $35.00 dollars an hour.</div>
            </div>
            <button onClick={()=>{setShow(!show)}} className='mt-5 bg-blue-500 h-12 w-40 text-white text-xl hover:bg-blue-700 rounded-xl'>{buttontext}</button>
            {/* input form */}
        
        <div className={`p-5 w-full mt-10  flex flex-col justify-center  items-center relative ${oswald.className}` }>
            <div className={`lg:w-200 lg:p-5 overflow-hidden` }>
                <form className='flex lg:p-10 flex-col lg:flex-row flex-wrap'>
                    {/* first Name */}
                    <div className='pl-1  m-2 lg:m-4 lg:w-72 '>
                    <span>FirstName</span>
                    <span className='text-red-500 text-xl'> *</span>
                        <input
                        onChange={formvalues}
                        name="firstName" 
                        value={formdata.firstName}
                        className='mt-3 border-2 w-full rounded-md h-12 pl-2 ' 
                        placeholder='FirstName'></input>
                    </div>

                    {/* Last Name */}

                    <div className='pl-1  m-2 lg:m-4 lg:w-72'>
                    <span>Last Name</span>
                    <span className='text-red-500 text-xl'> *</span>
                        <input
                        onChange={formvalues}
                        name="lastName"  
                        value={formdata.lastName}
                        className='mt-3 border-2 w-full rounded-md h-12 pl-2 ' 
                        placeholder='LastName'></input>
                    </div>

                    {/* Email */}

                    <div className='pl-1  m-2 lg:m-4 lg:w-72'>
                    <span>Email</span>
                    <span className='text-red-500 text-xl'> *</span>
                        <input
                        type='email'
                        onChange={formvalues}
                        name="email"
                        value={formdata.email}  
                        className='mt-3 border-2 w-full rounded-md h-12 pl-2 ' 
                        placeholder='Email'></input>
                    </div>

                    {/* Phone Number */}

                    <div className='pl-1  m-2 lg:m-4 lg:w-72'>
                        <span>Phone Number</span>
                        <span className='text-red-500 text-xl'> *</span>
                        <div className=' border-2 rounded-md h-12 mt-3  flex items-center focus-within:border-blue-500 focus-within:border-2' >
                            <Image className='h-8 ml-2 w-8 mr-4 ' src={usflag} width={50}/>
                            <input
                            onChange={formvalues}
                            name="phoneNumber"
                            value={formdata.phoneNumber} 
                            className='focus:outline-none w-full pl-1 h-full rounded-md' 
                            placeholder='e.g. (201 555-0123)'></input>
                        </div>
                    </div> 

                    {/* City */}
                    
                    <div className=' flex flex-col pl-1  m-2 lg:m-4 lg:w-72'>
                        <div>
                            <span>WHAT CITY WILL YOU BE SURFING IN?</span>
                        <span className='text-red-500 text-xl'> *</span></div>
                        <select onChange={formvalues} name='city' value={formdata.city} className='mt-3  border-2 w-full rounded-md h-12 '>
                            {dropdownvalues}
                        </select>
                    </div>
                    
                </form>
            <div className='pl-5 pb-10'>By providing us with your phone number and clicking "Submit", you agree that we may call or text you regarding your application. Message & data rates may apply.</div>
        </div>
        <div className='h-20 border-t-2 lg:border-t-0 w-full fixed bottom-0 lg:static bg-white  '>
        <button className='absolute right-10 lg:right-80 mt-5 bg-blue-500 h-12 w-40 text-white text-xl hover:bg-blue-700 rounded-xl'>Sumbit</button>
        </div>
        
        </div>
    </div>
    </>
    
  )
}

export default PartnerSignup
