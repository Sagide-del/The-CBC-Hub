import { useState } from 'react';
import Head from 'next/head';

export default function TestMpesa() {
  const [amount, setAmount] = useState('30');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const testPayment = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const response = await fetch('/api/mpesa/stkpush', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseInt(amount),
          itemName: 'Test Payment',
          itemId: 'TEST-001'
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setResult(data);
      } else {
        setError(data.error || 'Payment failed');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>M-Pesa Test - CBC Hub</title>
      </Head>
      
      <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-6">M-Pesa Test Page</h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Amount (KSh)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border rounded-lg"
            min="10"
          />
          <p className="text-sm text-gray-500 mt-2">
            STK will be sent to: <strong>0748519923</strong>
          </p>
        </div>
        
        <button
          onClick={testPayment}
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {loading ? 'Processing...' : 'Test STK Push'}
        </button>
        
        {result && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-green-700">✅ Success</h3>
            <p className="text-sm mt-2">{result.message}</p>
            {result.checkoutRequestID && (
              <p className="text-xs text-gray-500 mt-2">
                Checkout ID: {result.checkoutRequestID}
              </p>
            )}
          </div>
        )}
        
        {error && (
          <div className="mt-6 p-4 bg-red-50 rounded-lg">
            <h3 className="font-bold text-red-700">❌ Error</h3>
            <p className="text-sm mt-2">{error}</p>
          </div>
        )}
        
        <div className="mt-6 text-sm text-gray-500 border-t pt-4">
          <h4 className="font-bold mb-2">Debug Checklist:</h4>
          <ul className="space-y-1">
            <li>✓ Phone: 0748519923 (formatted as 254748519923)</li>
            <li>✓ Till: 345670</li>
            <li>✓ Transaction Type: CustomerBuyGoodsOnline</li>
            <li>⚠️ Check browser console for detailed logs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
