import React from 'react'

const DriverInfo = (props) => {
    const driverinfo=props.driverinfo;
    
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between'>
            <div className='text-2xl'>Driver Info</div>
            <div className='text-sm text-blue-600 hover:underline cursor-pointer'>Already a customer? Log in</div>
        </div>
        <input onChange={props.HandleDriverinfo} name='firstname' value={driverinfo.firstname} className='h-12 flex items-center p-4 bottom-1 rounded-xl my-2' placeholder='First Name'></input>
        <input onChange={props.HandleDriverinfo} name='lastname' value={driverinfo.lastname} className='h-12 flex items-center p-4 bottom-1 rounded-xl my-2' placeholder='Last name'></input>
        <input onChange={props.HandleDriverinfo} name='email' value={driverinfo.email} className='h-12 flex items-center p-4 bottom-1 rounded-xl my-2' placeholder='Email'></input>
        <input onChange={props.HandleDriverinfo} name='confirmemail' value={driverinfo.confirmemail} className='h-12 flex items-center p-4 bottom-1 rounded-xl my-2' placeholder='Confirm Email'></input>
        <input onChange={props.HandleDriverinfo} name='phonenumber' value={driverinfo.phonenumber} className='h-12 flex items-center p-4 bottom-1 rounded-xl my-2' placeholder='Phone Number'></input>
      
    </div>
  )
}

export default DriverInfo
