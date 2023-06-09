import React,{useState,useEffect} from 'react'
import Locationprop from './Locationprop'
import data from '../../data/Locations'
import { useRouter } from 'next/router'

const Locations = () => {
    const router=useRouter();
    const[viewallcities,setviewallcities]=useState(false)
    const[propsdata,setpropsdata]=useState([]);
    useEffect(() => {
        setpropsdata(data)
    }, []);

    function handleClick(id){
        router.push(`/locations/${id}`)
    }
    
    const topFourLocations = propsdata.slice(0, 3);
    const rendermin=topFourLocations.map(item => (
        <Locationprop
            key={item.id}
            item={item}
            handleClick={handleClick}
        />
    ))
    const renderall=propsdata.map(item => (
        <Locationprop
        key={item.id}
            item={item}
            handleClick={handleClick}
        />
    ))


    return (
        <div className=' flex flex-col items-center lg:pl-28'>
            {!viewallcities && <div className='flex flex-wrap justify-center '>{rendermin}</div>}
            {viewallcities && <div className='flex flex-wrap justify-center '>{renderall}</div>}
            
        {!viewallcities && <button onClick={()=>{setviewallcities(true)}} className='h-12 text-blue-500 font-extrabold rounded-xl border-blue-500 border-2 w-40 hover:bg-blue-500 hover:text-white'>View all cities</button>}
        </div>
    )
}

export default Locations
