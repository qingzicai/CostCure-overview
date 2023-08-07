import LocationInput from '/src/components/LocationInput';
import ServiceInput from '/src/components//ServiceInput';
import DataTable from '/src/components//DataTable';
import Footer from "../components/Footer.tsx";

function DashboardPage() {
    return (
        <div className="flex flex-col h-screen w-screen">
            <div className="flex h-screen w-screen">
                <div className="w-1/5 space-y-8 pt-20 bg-blue-800">
                    <LocationInput/>
                    <ServiceInput/>
                </div>
                <div className="w-4/5 p-4">
                    <DataTable/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DashboardPage;