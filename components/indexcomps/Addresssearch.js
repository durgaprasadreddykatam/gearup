import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const AddressSearch = ({ value, onChange }) => {
  const [address, setAddress] = useState(value);
  const allowedCities = ["Boston","Atlanta","New York","Chicago","Washington, D.C.","Seattle","Jersey City","Dallas","Denver","Houston","Los Angeles","Miami","Philadelphia","Phoenix","San Antonio","San Diego","San Francisco"];

  const handleSelect = async (value, suggestion) => {
    setAddress(value);
    const results = await geocodeByAddress(value);
    const { lat, lng } = await getLatLng(results[0]);
    const addressComponents = results[0].address_components;
    const cityObj = addressComponents.find(component => component.types.includes("locality"));
    const city = cityObj ? cityObj.long_name : "";
    onChange(value,city);
    
   };
  

  const shouldRenderSuggestion = (suggestion) => {
    return allowedCities.some((city) => suggestion.description.includes(city));
  };
  
  // const cities_list = allowedCities.map((city) => {
  //   return (
  //     <div key={city} className=''>
  //       <div
  //         onClick={() => handleManualSelect(city)}
  //         className="mb-2 hover:bg-gray-100 cursor-pointer p-3 items-center ">
  //         {city}
  //       </div>
  //     </div>
  //   );
  // });
  
    
      // <div className='z-50  bg-white w-full flex flex-col  h-120 overflow-scroll border-1 rounded-xl'>
      //   <div className='flex flex-col items-center justify-center p-5 mb-4 border-b-1'>
      //     <span className='text-2xl'>We are Sorry !</span>
      //     <span className='text-gray-500'>Add a City for Better Results</span>
      //   </div>
      //   <div className='p-3 text-xl font-extrabold'>We Operate in Over 10 Cities</div>
      //   <div>{cities_list}</div>
      // </div>
    
    
    
  

  return (
    <>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="">
            <input {...getInputProps()} placeholder='Type an address and city...' className="w-full bg-inherit focus:outline-none" />
            {suggestions.length > 0 && (
              <div className={` border-1 z-50 rounded-xl bg-white w-full`}>
                {loading ? <div>Loading...</div> : null}
                
                {suggestions.filter(shouldRenderSuggestion).map((suggestion) => (
                      <div
                        onClick={() => {
                          setAddress(suggestion.description);
                          setSelectedSuggestion(suggestion);
                          onChange(suggestion.description);
                        }}
                        {...getSuggestionItemProps(suggestion)}
                        key={suggestion.placeId}
                        className={`mb-2 hover:bg-gray-100  p-3 items-center`}
                      >
                        {suggestion.description}
                        
                      </div>
                    ))
                }
                </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

AddressSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

AddressSearch.defaultProps = {
  value: '',
  onChange: () => {},
};

export default AddressSearch;
