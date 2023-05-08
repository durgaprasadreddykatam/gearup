import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
export const unstable_staticPage = false;
const SecureCheckout = () => {
    const router = useRouter();
    const Stripedata = router.query;
    React.useEffect(() => {
        if (Object.keys(router.query).length === 0) {
          
          return;
        }
        axios.post('/api/UpdatePayements', {Stripedata:Stripedata})
        .then(function (response) {
            if(response.data.message==='success'){
                router.push({
                    pathname: '/PayementSucess',
                    query: {
                        DeliveryDate:Stripedata.DeliveryDate,
                        DeliveryAddress:Stripedata.DeliveryAddress,
                        returnDate:Stripedata.returnDate,
                        returnAddress:Stripedata.returnAddress,

                    },
                });
            }
            }
        )
        .catch(function (error) {
            console.log(error);
        }
        );
    }, [router.query]);

  return (
    <div className='flex p-5 justify-center flex-col items-center'>
        <span className=' text-2xl mb-10 lg:text-4xl'>Please do not Refresh this Page</span>
        <div className='h-80  animate-pulse w-full bg-slate-100 p-10 rounded-2xl border-1 border-gray-100'>
            <div className='flex'>
                <div className='w-full lg:w-1/2'>
                    <div className='h-10 w-1/2 m-5 bg-slate-200 rounded-full'></div>
                    <div className='h-10  m-5 bg-slate-200 rounded-full'></div>
                    <div className='h-10 w-1/2 m-5 bg-slate-200 rounded-full'></div>
                    <div className='h-10 m-5 bg-slate-200 rounded-full'></div>
                </div>
                <div className='hidden lg:block w-1/2'>
                    <div className='h-10  m-5 bg-slate-200 rounded-full'></div>
                    <div className='h-10 w-1/2 m-5 bg-slate-200 rounded-full'></div>
                    <div className='h-10  m-5 bg-slate-200 rounded-full'></div>
                    <div className='h-10 w-1/2  m-5 bg-slate-200 rounded-full'></div>
                </div>
                
                
            </div>
            

        </div>
      
    </div>
  )
}

export default SecureCheckout
