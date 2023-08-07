import  { useState } from 'react';

function ServiceInput() {
  const [service, setService] = useState('');

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  return (
    <input
      className="border-2 border-gray-300 p-2 rounded"
      type="text"
      value={service}
      onChange={handleServiceChange}
      placeholder="Enter health service"
    />
  );
}

export default ServiceInput;
