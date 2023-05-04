import React from 'react'

const Coverage = (props) => {
    const coverage=props.coverage;
    console.log(coverage);
    
    
  return (
        <>
        <div className='py-10 flex-col border-b-2 border-b-gray-500'>
            <div className='text-2xl font-extrabold'>Coverage</div>
            <div className='flex justify-around flex-col sm:flex-row'>
                <div onClick={()=>{props.Insurance('Essential_Coverage')}} id='Essential_Coverage' className={`flex flex-col cursor-pointer justify-between  sm:w-1/3 sm:rounded-xl ${coverage=== 'Essential_Coverage' ? `border-blue-500`:`border-gray-500` }  sm:border-2 sm:m-2 sm:p-4 mt-5`}>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <div>Essential Coverage</div>
                            <div className='text-sm'>$ {props.item.Essential_Coverage} | day</div>
                        </div>
                        <div className={`flex ${coverage=== 'Essential_Coverage' ? `bg-blue-400`:`bg-wjite` } sm:hidden h-5 w-5 justify-center items-center rounded-full items-center justify-center text-xs border-1 border-black`}>{coverage === 'Essential_Coverage' && <span className='text-xs text-white'>&#10004;</span>}</div>
                    </div>
                    <div className='flex sm:hidden text-xs text-gray-500'>Liability Coverage (RCLI), covers up to State Minimums if claims are made by third parties against you</div>
                </div>
                <div onClick={()=>{props.Insurance('Standard_Coverage')}}  id='Standard_Coverage'  className={`flex flex-col cursor-pointer justify-between  sm:w-1/3 sm:rounded-xl  ${coverage=== 'Standard_Coverage' ? `border-blue-500`:`border-gray-500` } sm:border-2 sm:m-2 sm:p-4 mt-5`}>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <div>Standard Coverage</div>
                            <div className='text-sm'>$ {props.item.Standard_Coverage} | day</div>
                        </div>
                        <div className={`flex ${coverage === 'Standard_Coverage' ? `bg-blue-400`:`bg-wjite` } justify-center items-center  sm:hidden h-5 w-5 rounded-full border-1 border-black`}>{coverage === 'Standard_Coverage' && <span className='text-xs text-white'>&#10004;</span>}</div>
                    </div>
                    <div className='flex  sm:hidden text-xs text-gray-500'>Damage Coverage (CDW), covers your car (deductible up to $500); Liability Coverage (RCLI), covers up to State Minimums if claims are made by third parties against you</div>
                </div>
                <div onClick={()=>{props.Insurance('I_have_my_own')}} id='I_have_my_own' className={`flex flex-col cursor-pointer justify-between  sm:w-1/3 sm:rounded-xl  ${coverage=== 'I_have_my_own' ? `border-blue-500`:`border-gray-500` } sm:border-2 sm:m-2 sm:p-4 mt-5`}>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <div>I have my own</div>
                            <div className='text-sm'>$ {props.item.I_have_my_own} | day</div>
                        </div>
                        <div className={`flex ${coverage === 'I_have_my_own' ? `bg-blue-400`:`bg-wjite` } items-center justify-center  sm:hidden h-5 w-5 rounded-full border-1 border-black`}>{coverage === 'I_have_my_own' && <span className='text-xs text-white'>&#10004;</span>}</div>
                    </div>
                    <div className='flex sm:hidden text-xs text-gray-500'>If you have your own liability coverage meeting minimum State Law requirements.</div>
                </div>
            </div>
                
        </div>

        </>
  )
}

export default Coverage
