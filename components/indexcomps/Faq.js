import React from 'react'
import data from '../../data/Faqs_data'

const Faq = () => {
    const faqrender=data.map((item =>{
        return(
            <div key={item.id} className='flex flex-col mb-10'>
                <span className='text-2xl mb-4'>{item.question}</span>
                <span>{item.answer}</span>
            </div>
        )
    }))

  return (
    <div className=' mt-10 px-20'>
        <div className='border-b-2 pb-5 border-b-gray-300 w-full text-4xl'>
            <span>Frequently asked Questions</span>
        </div>
        <div className=''>
            {faqrender}
        </div>
      
    </div>
  )
}

export default Faq

