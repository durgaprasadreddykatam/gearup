import React,{useState,useEffect} from 'react'
import Howitworks_sub from './Howitworks_sub'
import data from '../../data/howitworks.js'

const Howitworks = () => {
  const[propsdata,setpropsdata]=useState([]);

  useEffect(() => {
    setpropsdata(data)
  }, []);
  console.log(propsdata);

    const renderprocedure = propsdata.map((item) => {
        return(
            <Howitworks_sub
            key={item.id}
            image={item.image}
            item={item}
            
            />
        )
    })
  return (
    <div className='p-5'>
        <span className='text-blue-500 text-2xl'>Here's the procedure</span>
        <div className=' flex flex-col flex-wrap md:flex-row items-center justify-around'>{renderprocedure}</div>
        
    </div>
  )
}

export default Howitworks
