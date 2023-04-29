import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const AddressSearch = ({ value, onChange }) => {
  const [address, setAddress] = useState(value);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const handleSelect = async (value, suggestion) => {
    setAddress(value);
    setSelectedSuggestion(suggestion);
    onChange(value);
  };

  return (
    <>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="">
            <input {...getInputProps()} placeholder='Type an address and city...' className="w-full bg-inherit focus:outline-none" />
            {suggestions.length > 0 && (
              <div className={` border-1 z-50 rounded-xl bg-white w-full`}>
                {loading ? <div>Loading...</div> : null}
                {suggestions.map((suggestion) => (
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
                ))}
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
