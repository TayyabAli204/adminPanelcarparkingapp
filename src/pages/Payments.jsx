import React from 'react';

const Payments= () => {
  // Sample data for the booking payments list
  const bookingPayments = [
    {
      id: 1,
      userName: 'John Doe',
      providerName: 'ABC Parking',
      parkingSpaceName: 'Parking Space 1',
      paymentMode: 'CARD',
      total: 100.0,
      status: 'Paid',
    },
    {
      id: 2,
      userName: 'Jane Smith',
      providerName: 'XYZ Parking',
      parkingSpaceName: 'Parking Space 2',
      paymentMode: 'COD',
      total: 75.0,
      status: 'Not Paid',
    },
    // Add more payment objects as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Booking Payments</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Provider Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Parking Space
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Mode
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookingPayments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{payment.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.userName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.providerName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.parkingSpaceName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.paymentMode}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.total}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;

