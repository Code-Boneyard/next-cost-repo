const transactions = [
  {
    id: '221854',
    project: 'Vantage AZ11',
    type: 'Data Center',
    location: 'Goodyear, AZ',
    price: '$3,509.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  },
  {
    id: '221775',
    project: 'Databank SLC6',
    type: 'Data Center',
    location: 'Salt Lake City, UT',
    price: '$3,509.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  },
  {
    id: '221856',
    project: 'Aligned SLC03',
    type: 'Data Center',
    location: 'West Jordan, UT',
    price: '$3,509.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  },
  // More transactions...
];

export default function Analytics() {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto  py-6 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 uppercase">Projects</h3>
        </div>
      </header>
      <main>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          #
                        </th>
                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Project
                        </th>
                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Type
                        </th>
                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Location
                        </th>
                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Total ($)
                        </th>
                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Quantity
                        </th>
                        <th scope="col" className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Net amount
                        </th>
                        <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">{transaction.id}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">{transaction.project}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.type}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.location}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.price}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.quantity}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.netAmount}</td>
                          <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit<span className="sr-only">, {transaction.id}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
