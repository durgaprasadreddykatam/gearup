import React from 'react'
import Reviewcard from './Reviewcard'
import reviews from '../../../data/reviewdata'

const Reviews = () => {
    const cardrender = reviews.map((review) => {
        return(
            <Reviewcard
            key={review.id}
            item={review}
        />
        )
        
    })
  return (
    <div className=''>
      <span className='ml-20 text-3xl'>Reviews</span>
            <div className='mt-10 px-20 sm:p-5 flex flex-wrap flex-col sm:flex-row'>
                {cardrender}
                
            </div>
    </div>
  )
}

export default Reviews
