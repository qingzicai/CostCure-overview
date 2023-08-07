import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import DashboardPage from "./pages/DashboardPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
