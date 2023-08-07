import { useState } from 'react';

function LocationInput() {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <input
      className="border-2 border-gray-300 p-2 rounded"
      type="text"
      value={location}
      onChange={handleLocationChange}
      placeholder="Enter location or zipcode"
    />
  );
}

export default LocationInput;
