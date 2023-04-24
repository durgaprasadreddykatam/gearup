import Image from 'next/image'
import { Oswald } from 'next/font/google'
import main from '../../public/images/rentalpng.png'
const oswald = Oswald({ subsets: ['latin'],weight:'300'  })
import Searchbar from './indexcomps/Searchbar'
import Locations from './indexcomps/Locations'
import Howitworks from './indexcomps/Howitworks'
import Reviews from './indexcomps/Reviews'
import Faq from './indexcomps/Faq'
import Fleet from './indexcomps/Fleet'

export default function Home() {
  return (
<> 
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
</>
  )
}
