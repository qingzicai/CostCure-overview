import LocationInput from '/src/components/LocationInput';
import ServiceInput from '/src/components//ServiceInput';
import DataTable from '/src/components//DataTable';

function DashboardPage() {
  return (
    <div className="flex">
      <div className="w-1/5 space-y-4 p-4">
        <LocationInput />
        <ServiceInput />
      </div>
      <div className="w-4/5 p-4">
        <DataTable />
      </div>
    </div>
  );
}

export default DashboardPage;