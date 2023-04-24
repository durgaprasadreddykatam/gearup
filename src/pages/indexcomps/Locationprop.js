import React from 'react'
import Image from 'next/image'
import testimage from '../../../public/images/washington dc.jpeg'

const Locationprop = (props) => {
    return (
        <div onClick={() => props.handleClick(props.item.id)} className='relative flex-shrink-0 overflow-x-auto'>
            <Image className='w-80 h-60 rounded-xl cursor-pointer m-3' src={props.item.image} alt=''/>
            <span className='absolute left-5 bottom-10 text-white font-extrabold text-3xl'>{props.item.name}</span>
            <span className='absolute left-5 bottom-3 text-white font-extrabold text-lg'>Show Service Area</span>
        </div>
    )
}

export default Locationprop
