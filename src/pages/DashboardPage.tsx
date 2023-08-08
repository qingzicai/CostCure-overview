
import LocationInput from '../components/LocationInput.tsx';
import ServiceInput from '../components/ServiceInput.tsx';
import DataTable from '../components/DataTable.tsx';
import Footer from'../components/Footer.tsx'
import {PieChart} from "../components/PieChart.tsx";

function DashboardPage() {
    return (
        <div className="flex-col h-screen w-full">
            <div className="flex h-fit">
                <div className="w-1/5 space-y-8 pt-32 bg-blue-800 pl-6">
                    <LocationInput/>
                    <ServiceInput/>
                </div>
                <div className="flex-col w-4/5 pt-8">
                    <DataTable/>
                    <PieChart/>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default DashboardPage;