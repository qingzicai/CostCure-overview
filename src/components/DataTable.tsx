function DataTable() {
  const rows = [
    ['Hospital 1', '23423 Loe road', '5342343958', '$1,657,870,986', '$543,638,043', '$1,114,232,943', '$260,000,000'],
    ['Hospital 2', '23423 Loe road', '5342343958', '$1,657,870,986', '$543,638,043', '$1,114,232,943', '$260,000,000'],
    ['Hospital 3', '23423 Loe road', '5342343958', '$1,657,870,986', '$543,638,043', '$1,114,232,943', '$260,000,000'],
    ['Hospital 4', '23423 Loe road', '5342343958', '$1,657,870,986', '$543,638,043', '$1,114,232,943', '$260,000,000']
  ];

  return (
    <div className="container mx-auto py-4 font-mono">
      <table className="table-auto w-full text-left">
        <caption className="mb-6 font-extrabold text-center text-2xl text-blue-700">Price Compare of the Services</caption>
        <thead>
          <tr className={'bg-gray-500 text-white'}>
            <th className="px-4 py-2">Health Service Provider</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Service 1</th>
            <th className="px-4 py-2">Service 2</th>
            <th className="px-4 py-2">Service 3</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr className={i % 2 === 0 ? 'bg-gray-200' : ''} key={i}>
              {row.map((cell, j) => (
                <td className="border px-4 py-2" key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="7" className="px-4 py-2 italic text-sm">Data is current as of Aug 6, 2023.</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default DataTable;
