import React from 'react'

const Popup = ({children,trigger,onClose}) => {
    function HandleClose(event){
        if(event.target.id === 'wrapper' )
        onClose();
        
    }
  return trigger ? (
  <div onClick={HandleClose} id='wrapper' className='fixed inset-0 bg-black bg-opacity-25 z-50 justify-end  flex flex-col  md:justify-center md:items-center'>
    <div className=' flex flex-col '>
        {/* <div onClick={onClose} className='text-blue-500 cursor-pointer place-self-end'>Close</div> */}
        <div className=''>{children}</div>
    </div>
  </div>
  ): null;
}

export default Popup
