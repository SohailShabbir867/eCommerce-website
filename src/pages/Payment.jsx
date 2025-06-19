import React from 'react';

const paymentMethods = [
  {
    id: 'credit-card',
    label: 'Credit Card',
    icons: ['Visa', 'MasterCard', 'AMEX', 'Diners Club'],
    description: 'Pay by Credit Card - 100% Secure',
  },
  { id: 'zapper', label: 'Zapper' },
  { id: 'visa-checkout', label: 'VISA Checkout' },
  { id: 'snapscan', label: 'SnapScan' },
  { id: 'bank-transfer', label: 'Bank Transfer' },
  { id: 'ebucks', label: 'eBucks' },
  { id: 'discovery-miles', label: 'Discovery Miles' },
];


const PaymentPage = () => {
  const [selected, setSelected] = React.useState('credit-card');

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md font-sans">
      <h2 className="text-xl font-bold text-[#0B1D51] mb-4">
        CHOOSE PAYMENT METHOD: <span className="text-gray-700">R134.00</span>
      </h2>

      <form className="space-y-4">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className="flex items-center p-3 border rounded-lg hover:shadow-sm transition-all cursor-pointer"
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
              className="form-radio text-[#0B1D51] mr-4"
            />
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">{method.label}</span>
              {method.description && (
                <span className="text-xs text-gray-500">{method.description}</span>
              )}
            </div>
          </label>
        ))}

        <button
          type="submit"
          className="w-full bg-[#0B1D51] hover:bg-[#132a74] text-white py-3 px-6 rounded-lg mt-6 font-semibold transition duration-300"
            onClick={(e) => {
                e.preventDefault();
                alert(`Payment method selected: ${selected}`);
            }}  
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
