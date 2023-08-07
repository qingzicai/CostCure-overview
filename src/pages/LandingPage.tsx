import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleCompareNowClick = () => {
    navigate('/dashboard');
  };
  const handleLoginClick = ()=>{
      navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-blue-900">
      <h1 className="text-8xl text-center mb-2 font-mono text-white">CareCompare</h1>
      <p className="text-2xl text-center text-gray-200 mb-8 font-mono">DISCOVER AFFORDABLE CHILD-BIRTH SERVICES</p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-gray-200 font-sans rounded" onClick={handleCompareNowClick}>Compare now</button>
        <button className="px-4 py-2 bg-red-800 text-gray-200 font-sans rounded" onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default LandingPage;
