import {useState} from 'react';

function ServiceInput() {
    const [service, setService] = useState('');

    const handleServiceChange = (event) => {
        setService(event.target.value);
    };

    return (
        <div>
            <label className={'text-white text-left font-mono'}>Services you need</label>
            <input
                className="border-2 focus:border-indigo-700 p-2 rounded"
                type="text"
                value={service}
                onChange={handleServiceChange}
                placeholder="Enter health service"
            />
        </div>
    );
}

export default ServiceInput;
