import {motion as m} from 'framer-motion';
import Image from 'next/image';
import tick from '../../public/icons/bluetick.png';
export default function Ls({ children,message,text }) {

    return (
            <>
                   <m.div
                   initial={{ x:"100%" }}
                   animate={{ x:"0%"  }}
                   transition={{ duration: 0.5,ease: "easeInOut" }}
                   exit={{ x:"100%" }}
                    className=' p-3 rounded-xl fixed h-20 bg-neutral-100 flex-col flex w-80 z-10 right-5 justify-around'>
                        <div className='text-sky-600 flex items-center font-extrabold'>
                            <Image src={tick} alt='' height={96} width={96} className='h-8 w-8'></Image>
                        <div>{message}</div>
                        </div>
                        
                        <div className='text-xs'>{text}</div>
                    </m.div>
            </>
            )
    
  }
