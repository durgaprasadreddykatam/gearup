import React,{useEffect} from 'react'
import { Oswald ,Concert_One } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
const concert_one = Concert_One({ subsets: ['latin'], weight:'400' });
import Image from 'next/image';
import Approved from '../../../public/icons/Approved.png'
import Link from 'next/link'

const Sucess = () => {
    const [getname,setname]=React.useState('');
    useEffect(()=>{
        const name=sessionStorage.getItem('name');
        setname(name);
    },[])

    
    
  return (
    <>
        <div className={`p-5 w-full bg-sky-500 h-40 flex  items-center relative ${oswald.className}` }>
            <div className='absolute flex border-2 rounded-full bg-white items-center justify-center  h-32 w-32'>
                <Link href='/'><div className={`text-3xl  mb-5 pt-2 text-sky-600 ${concert_one.className} `}>GearUp</div></Link>
            </div>
        </div>
        <div className={`flex p-10 items-center justify-center flex-col ${oswald.className}`}>
                <Image src={Approved} height={80} width={80}/>
                <div className='text-4xl'>Thank You for Submitting Request</div>
                <div className='text-2xl'>Mr.{getname}</div>
                <div className='text-xl'>Your request has been processed, and we will get back to you on the mobile number you provided</div>

        </div>
    </>
  )
}

export default Sucess

Sucess.getLayout = function getLayout(page) {
    return (
        <>
        {page}
        </>
        
    )
    }