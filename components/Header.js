import React,{useState,useEffect,useCallback } from 'react'
import Menuoptions from './Headerelements/Menuoptions'
import Image from 'next/image'
import menu from '../public/icons/Menu.png'
import { Concert_One ,Inter,Oswald} from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
const concert_one = Concert_One({ subsets: ['latin'], weight:'400' });
import Link from 'next/link'
import { useRouter } from 'next/router'
import Signup from '@/pages/signup'
import close from '../public/icons/close.png'


const Header = () => {
    const[isMenuOpen,setIsMenuOpen] = useState(false);
     const[isauth,setIsauth] = useState(false);
     const[username,setUsername] = useState('');
     
     useEffect(() => {
        const storagedata=JSON.parse(localStorage.getItem('user'));
        if (storagedata && storagedata.userauthenticated) {
            setUsername(storagedata.username);
            setIsauth(true);
        }
    }, []);
    const router = useRouter();
    const Signout = () =>{
        localStorage.removeItem('user');
        setIsauth(false);
        setUsername('');
        router.push('/');
    }
    const handleWindowResize = useCallback(() => {
        if (window.innerWidth >= 1024) {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }
      }, []);
      useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
      
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, [handleWindowResize]);



    function menuClick(){
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            document.body.style.overflow = '';
          } else {
            document.body.style.overflow = 'hidden';
          }
    }
    
  return (
    <>
    
        <div className='h-16 bg-sky-600 flex justify-between items-center p-5'>
            <div className={`text-3xl text-white ${concert_one.className} `}><Link href='/'>GearUp</Link></div>
            <div className={`hidden lg:block cursor-pointer text-white ${oswald.className} `}>
                    <span className='mt-10 m-3 hover:underline hover:underline-offset-2'><Link target='_blank' href='/driverpartner'>Become a Driver Partner</Link></span>
                    <span className='m-3 hover:underline hover:underline-offset-2'><Link href='/carsubscription'>Car Subscription</Link></span>
                    {!isauth && <span className='m-3 hover:underline hover:underline-offset-2'><Link href='/signup'>Sign up | Login</Link></span>}
                    {isauth && <span className='m-3 hover:underline hover:underline-offset-2'><Link href='/account/Account'>{username}</Link></span>}
                    {isauth && <span className='m-3 hover:underline hover:underline-offset-2'><Link href='/trips/trips'>My Trips</Link></span>}
                    {isauth && <span onClick={Signout} className='m-3 hover:underline hover:underline-offset-2'>Sign Out</span>}
                    <span className='m-3 hover:underline hover:underline-offset-2'><Link href='/Faqs'>FAQ</Link></span>
            </div>
            <Image onClick={menuClick} className='block lg:hidden h-7 w-7 cursor-pointer invert' src={menu} width={500} height={500} alt='menu'/>
        </div>
            {isMenuOpen && 
        <div className='h-full w-full z-10 absolute top-0 bg-white'>
            {/* {<Menuoptions  menuClick={menuClick} isauth={isauth} username={username} />} */}
                <div className={`flex cursor-pointer flex-col p-5 ${oswald.className}`}>
                    <Image  onClick={menuClick}  src={close} alt='' height={100} width={100} className=' h-8 w-8 absolute cursor-pointer right-8 top-8'/>
                    
                    <div className={`m-3 text-3xl text-sky-600 ${concert_one.className} `}>GearUp</div>
                    <div className='m-3 text-xl text-amber-500'>{username}</div>
                    <span onClick={menuClick} className='mt-5 m-3 hover:underline hover:underline-offset-2'><Link href='/driverpartner'   target='_blank' >Become a Driver Partner</Link></span>
                    <span onClick={menuClick} className='m-3 hover:underline hover:underline-offset-2'><Link href='/carsubscription'>Car Subscription</Link></span>
                    <span onClick={menuClick} className='m-3 hover:underline hover:underline-offset-2'><Link href='/Faqs'>FAQ</Link></span>
                    {!isauth && <span onClick={menuClick}   className='m-3 hover:underline hover:underline-offset-2'><Link href='/signup'>Sign up | Login</Link></span>}
                    {isauth &&  <span onClick={menuClick}   className='m-3 hover:underline hover:underline-offset-2'><Link href='/signup'>My Trips</Link></span>}
                    {isauth &&  <span onClick={Signout}   className='m-3 hover:underline hover:underline-offset-2'>Log Out</span>}
                    {isauth &&  <span className='m-3  hover:underline hover:underline-offset-2'><Link href='/account/Account'>Account Settings</Link></span>}
                </div>
        </div>

                }
        
    </>

    
  )
}

export default Header
