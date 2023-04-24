import React,{useState} from 'react'
import Menuoptions from './Headerelements/Menuoptions'
import Image from 'next/image'
import menu from '../public/icons/Menu.png'
import { Concert_One ,Inter,Oswald} from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
const concert_one = Concert_One({ subsets: ['latin'], weight:'400' });

const Header = () => {
    const[isMenuOpen,setIsMenuOpen] = useState(false);
    function menuClick(){
        setIsMenuOpen(!isMenuOpen);
    }
    function DriverPartner(){
        console.log('Driver Partner')
    }
    function CarSubscription(){
        console.log('CarSubscription')
    }
    function SignUp(){
        console.log('SignUp')
    }
    function FAQ(){
        console.log('FAQ')
    }
  return (
    <>
        <div className='h-16 bg-sky-600 flex justify-between items-center p-5'>
            <div className={`text-3xl text-white ${concert_one.className} `}>Gear Up</div>
            <div className={`hidden lg:block cursor-pointer text-white ${oswald.className} `}>
                    <span onClick={DriverPartner} className='mt-10 m-3'>Become a Driver Partner</span>
                    <span onClick={CarSubscription} className='m-3'>Car Subscription</span>
                    <span onClick={SignUp} className='m-3'>Sign up | Login</span>
                    <span onClick={FAQ} className='m-3'>FAQ</span>
            </div>
            <Image onClick={menuClick} className='block lg:hidden h-7 w-7 cursor-pointer invert' src={menu} width={500} height={500} alt='menu'/>
        </div>
            {isMenuOpen && 
        <div className='h-full w-full z-10 absolute top-0 bg-white'>
            {<Menuoptions FAQ={FAQ} SignUp={SignUp} CarSubscription={CarSubscription} DriverPartner={DriverPartner} menuClick={menuClick}/>}
        </div>
                }
    </>

    
  )
}

export default Header
