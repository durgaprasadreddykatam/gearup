import React,{useState} from 'react'
import Image from 'next/image'
import calender from '../../../public/icons/calender.png'
import Location from '../../../public/icons/location.png'



const Searchbar = () => {
    const[sameAddress,setSameAddress] = useState(true);
    console.log(sameAddress);

  return (
    <>
        {/* Smaller Screens */}
            <div className='block lg:hidden relative'>
               
                <div className='flex flex-col rounded-lg mt-7 p-1 border-2'>
                    {sameAddress && <div className='rounded-lg w-full flex'>
                        <Image className='h-5 w-5 mt-1 mr-2' src={Location} alt="" height={100} width={100}/>
                        <div className='flex flex-col'>
                        <span>Delivery and Return location</span>
                        <input className='h-12 focus:outline-none' placeholder='Type an Address and City'/>
                        </div>
                        
                        </div>}
                    {!sameAddress && <div className='rounded-lg flex flex-col'>
                        <div className='flex'>
                        <Image className='h-5 w-5 mt-1 mr-2' src={Location} alt="" height={100} width={100}/>
                        <div className='rounded-lg flex flex-col'>
                            <span>Delivery location</span>
                            <input  className='h-12 focus:outline-none' placeholder='Type an Address and City'/>
                        </div>
                        </div>
                        
                        <div className='flex'>
                        <Image className='h-5 w-5 mt-1 mr-2' src={Location} alt="" height={100} width={100}/>
                        <div className='rounded-lg flex flex-col'>
                            <span>Return location</span>
                            <input  className='h-12 focus:outline-none' placeholder='Type an Address and City'/>
                        </div>
                        </div>
                    </div>}
                    
                        <div className='w-full h-10 flex items-center'>
                                <label className="relative inline-flex items-center cursor-pointer">
                                <input onChange={()=>{setSameAddress(!sameAddress)}} type="checkbox" checked={sameAddress} className="sr-only peer"/>
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Same Delivery and Return locations</span>
                            </label>
                        </div>
                </div>
                {/* dates*/ }
                <div className='flex rounded-lg mt-7  p-1 items-center border-2'>
                    <Image src ={calender} alt='' className='h-7 w-7'/>
                    <div className='flex flex-col'>
                        <div className=''>{/* Clicking this div schould display calender*/}
                            <span>From</span>
                            <input type='date' className='h-10 ml-3  focus:outline-none'></input>
                        </div>
                        <div className='mt-2'>{/* Clicking this div schould display calender*/}
                            <span>To</span>
                            <input type='date' className='h-10 ml-8 focus:outline-none'></input>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-5 h-14 bg-blue-500 rounded-lg text-2xl text-white font-extrabold'>Search</button>
            </div>



        {/* Larger Screens */}
            <div className='lg:pl-28 hidden lg:block lg:mt-16 flex text-blue-500 flex-col items-center lg:pr-28'>
                <div className='w-full h-20 rounded-lg border-2  flex items-center'>
                    {sameAddress && <div className='w-140 pl-2 rounded-lg flex flex-col h-full focus-within:border-blue-500 focus-within:border-2 ' >
                        <span>Delivery and Return location</span>
                        <input  className='h-10  focus:outline-none' placeholder='Type an Address and City'/>
                        </div>}
                    {!sameAddress && <div className='w-140 p-0 m-0  rounded-lg  flex h-full'>
                        <div className='w-70 rounded-lg pl-2 flex focus-within:border-blue-500 focus-within:border-2 flex-col h-full'>
                            <span>Delivery location</span>
                            <input className='h-10  focus:outline-none' placeholder='Type an Address and City'/>
                        </div>
                        <div className='w-70  flex flex-col focus-within:border-blue-500 focus-within:border-2 rounded-lg h-full'>
                            <span>Return location</span>
                            <input  className='h-10 focus:outline-none' placeholder='Type an Address and City'/>
                        </div>
                    </div>}
                    {/* Dates */}
                    <div className='w-48 flex flex-col focus-within:border-blue-500 focus-within:border-2 rounded-lg h-full'>
                        <span>From</span>
                        <input type='date' className='w-24 h-10 focus:outline-none'></input>
                    </div>
                    <div className='w-48 focus-within:border-blue-500 focus-within:border-2 flex flex-col rounded-lg h-full'>
                        <span>To</span>
                        <input type='date' className='w-24 h-10 focus:outline-none'></input>
                        
                    </div>
                    {/* Search Button */}
                    <div className='w-48 ml-7 flex-shrink-0 rounded-lg flex items-center h-full'>
                        <button className='bg-blue-500 text-white h-10 rounded-xl w-28  hover:bg-blue-600'>Search</button>
                    </div>
                </div>
                <div className='w-full h-10 flex items-center'>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input onChange={()=>{setSameAddress(!sameAddress)}} type="checkbox" checked={sameAddress} className="sr-only peer"/>
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Same Delivery and Return locations</span>
                    </label>
                </div>
            </div>
    </>
    
  )
}

export default Searchbar
