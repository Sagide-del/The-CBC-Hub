import { useState } from 'react';

export default function MpesaPaymentModal({ isOpen, onClose, item, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [checkoutRequestID, setCheckoutRequestID] = useState('');

  const handlePayment = async () => {
    setLoading(true);
    setStatus('Initiating payment to 0748519923...');

    try {
      const response = await fetch('/api/mpesa/stkpush', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: item.price,
          itemName: item.name,
          itemId: item.id
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('✅ STK push sent! Check phone 0748519923 to complete payment.');
        setCheckoutRequestID(data.checkoutRequestID);
        
        // Start polling for payment status
        startPolling(data.checkoutRequestID);
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setStatus('❌ Failed to initiate payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const startPolling = (checkoutID) => {
    // Poll for payment status every 5 seconds for 2 minutes
    let attempts = 0;
    const maxAttempts = 24; // 2 minutes (5s * 24 = 120s)
    
    const interval = setInterval(async () => {
      attempts++;
      
      try {
        const response = await fetch(`/api/mpesa/query?checkoutRequestID=${checkoutID}`);
        const data = await response.json();
        
        if (data.ResultCode === '0') {
          // Payment successful
          clearInterval(interval);
          setStatus('✅ Payment successful! Redirecting...');
          setTimeout(() => {
            onSuccess();
            onClose();
          }, 2000);
        } else if (attempts >= maxAttempts) {
          clearInterval(interval);
          setStatus('⏱️ Payment timeout. Please check M-Pesa messages on 0748519923.');
        }
      } catch (error) {
        console.error('Polling error:', error);
      }
    }, 5000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">M-Pesa Payment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Item:</p>
          <p className="font-semibold text-gray-900">{item?.name}</p>
          <p className="text-2xl font-bold text-[#1a5f7a] mt-2">KSh {item?.price}</p>
          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-medium text-blue-800">📱 Payment will be sent to:</p>
            <p className="text-lg font-bold text-blue-600">0748519923</p>
            <p className="text-xs text-blue-600 mt-1">(You will receive the STK push)</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">Till Number: <span className="font-mono">345670</span></p>
        </div>

        {status && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${
            status.includes('✅') ? 'bg-green-50 text-green-700' :
            status.includes('❌') ? 'bg-red-50 text-red-700' :
            status.includes('⏱️') ? 'bg-yellow-50 text-yellow-700' :
            'bg-blue-50 text-blue-700'
          }`}>
            {status}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            disabled={loading}
            className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : 'Send STK Push'}
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">STK push will be sent to 0748519923</p>
          <img 
            src="https://www.safaricom.co.ke/images/m-pesa/logo-mpesa.png" 
            alt="M-Pesa" 
            className="h-8 inline-block mt-2 opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
