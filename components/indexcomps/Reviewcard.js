import React from 'react'

const Reviewcard = (props) => {
    function getStars(rating) {
        const roundedRating = Math.round(rating);
        let stars = '';
        for (let i = 0; i < roundedRating; i++) {
            stars += "\u2605";
        }
        return stars;
      }
    
      const stars = getStars(props.item.rating);
  return (
    <div className=' p-2 m-3 bg-white text-blue-600 rounded-xl sm:w-60 flex-shrink-0'>
      <div className='mb-3 text-black'>{stars}</div>
      <div className='h-40 text-black'>{props.item.review}</div>
      <div className='mt-5 text-xs font-extrabold text-black'>{props.item.username}</div>
    </div>
  )
}

export default Reviewcard
