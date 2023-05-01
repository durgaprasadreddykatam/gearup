import React from 'react'
const Test = () => {
  const[city,setCity] = React.useState('');
  const allowedCities = ["Boston","Atlanta","New York","Chicago","Washington, D.C.","Seattle","Jersey City","Dallas","Denver","Houston","Los Angeles","Miami","Philadelphia","Phoenix","San Antonio","San Diego","San Francisco"];
  function SelectedCity(city){
    setCity(city);
  }
  const cities_list = allowedCities.map((city) => {
    return (
      <div key={city}>
        <div
          onClick={() => SelectedCity(city)}
          className="mb-2 hover:bg-gray-100 cursor-pointer p-3 items-center"
        >
          {city}
        </div>
      </div>
    );
  });
  

  return (
    <>
      <div className='flex h-10 w-72 bg-amber-500 mb-2'>{city}</div>
      <div className='flex  flex-col w-120 ml-10'>
        <div className='z-50  bg-white w-full flex flex-col  h-120 overflow-scroll border-1 rounded-xl'>
            <div className='flex flex-col items-center justify-center p-5 mb-4 border-b-1'>
              <span className='text-2xl'>We are Sorry !</span>
              <span className='text-gray-500'>Add a City for Better Results</span>
            </div>
            <div  className='p-3 text-xl font-extrabold'>We Operate in Over 10 Cities</div>
            <div>{cities_list}</div>
        </div>
      </div>
      
      
    </>
    
  )
}

export default Test
