import React from 'react'
import Image from 'next/image'



const Locationprop = (props) => {
    return (
        <div onClick={() => props.handleClick(props.item.id)} className='relative flex-shrink-0 overflow-x-auto'>
            {props.item.image ? (<Image src={props.item.image.src} width={500} height={500} alt="" className="w-80 h-60 rounded-xl cursor-pointer m-3" />) :(<div className="w-80 h-60 rounded-xl cursor-pointer m-3 bg-gray-300"></div>)}
            <span className='absolute left-5 bottom-10 text-white font-extrabold text-3xl'>{props.item.name}</span>
            <span className='absolute left-5 bottom-3 text-white font-extrabold text-lg'>Show Service Area</span>
        </div>
    )
}

export default Locationprop
