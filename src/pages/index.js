import Image from 'next/image'
import Footer1 from '../../components/Footer1'
import { Oswald } from 'next/font/google'
import main from '../../public/images/rentalpng.png'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import Searchbar from '../../components/indexcomps/Searchbar'
import Locations from '../../components/indexcomps/Locations'
import Howitworks from '../../components/indexcomps/Howitworks'
import Reviews from '../../components/indexcomps/Reviews'
import Faq from '../../components/indexcomps/Faq'
import Fleet from '../../components/indexcomps/Fleet'
const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const url=`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`



export default function Home() {
 
  return (
<> 
  <script src={url}></script>
    <div className={`${oswald.className} relative p-5 `}>
        {/* <CalenderforSearch/> */}
        <div className='lg:flex lg:justify-between'>
          <div>
          <div className=' lg:p-10 lg:pl-28 lg:pr-20 '>
              <span className='text-5xl  font-extrabold'>Say goodbye to car rental hassles with our on-demand delivery service, right to your doorstep!</span>
          </div>
          <div className='mt-5 lg:pl-28 '>
            <span className='mt-10 text-2xl'>Our fully flexible service means no lines, no paperwork, and no refueling on return</span>
          </div>
          </div>
          <div className='hidden lg:block w-200'>
          <Image src={main} alt='' className=' flex-shrink-0 h-72 w-100  mr-10'/>
          </div>
        
          
        </div>
        <Searchbar/>

        <div className='mt-5'>
            <Locations/>
        </div>

        <div className='mt-5'>
            <Fleet/>
        </div>

        <div className='mt-5'>
            <Howitworks/>
        </div>
       
  </div>

  <div className={`bg-blue-600 text-white ${oswald.className}`}>
    <Reviews/>
  </div>
  <div className={`  ${oswald.className}`}>
    <Faq/>
  </div>
  <Footer1/>
</>
  )
}
