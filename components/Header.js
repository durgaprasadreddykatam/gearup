import React,{useState} from 'react'
import Menuoptions from './Headerelements/Menuoptions'
import Image from 'next/image'
import menu from '../public/icons/Menu.png'
import { Concert_One ,Inter,Oswald} from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
const concert_one = Concert_One({ subsets: ['latin'], weight:'400' });
import Link from 'next/link'


const Header = () => {
    const[isMenuOpen,setIsMenuOpen] = useState(false);
    function menuClick(){
        setIsMenuOpen(!isMenuOpen);
    }
    
  return (
    <>
        <div className='h-16 bg-sky-600 flex justify-between items-center p-5'>
            <div className={`text-3xl text-white ${concert_one.className} `}><Link href='/'>GearUp</Link></div>
            <div className={`hidden lg:block cursor-pointer text-white ${oswald.className} `}>
                    <span className='mt-10 m-3 hover:underline hover:underline-offset-2'><Link target='_blank' href='/driverpartner'>Become a Driver Partner</Link></span>
                    <span className='m-3 hover:underline hover:underline-offset-2'><Link href='/carsubscription'>Car Subscription</Link></span>
                    <span className='m-3 hover:underline hover:underline-offset-2'><Link href='/signup'>Sign up | Login</Link></span>
                    <span className='m-3 hover:underline hover:underline-offset-2'><Link href='/Faqs'>FAQ</Link></span>
            </div>
            <Image onClick={menuClick} className='block lg:hidden h-7 w-7 cursor-pointer invert' src={menu} width={500} height={500} alt='menu'/>
        </div>
            {isMenuOpen && 
        <div className='h-full w-full z-10 absolute top-0 bg-white'>
            {<Menuoptions  menuClick={menuClick}/>}
        </div>
                }
    </>

    
  )
}

export default Header
