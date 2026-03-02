import { useState } from 'react';

export default function AvailabilityChecker({ item, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(item.category === 'school' ? item.moq : 1);
  const [checking, setChecking] = useState(false);
  const [availability, setAvailability] = useState(null);

  const checkAvailability = () => {
    setChecking(true);
    
    // Simulate checking stock (in real app, this would call an API)
    setTimeout(() => {
      const available = item.stock >= quantity;
      setAvailability({
        available,
        message: available 
          ? `✅ ${quantity} units available! Ready to ship.`
          : `❌ Only ${item.stock} units available. Please reduce quantity.`
      });
      setChecking(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Check Availability</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
            {item.image}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity needed
          </label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min={item.category === 'school' ? item.moq : 1}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="flex-1 p-3 border border-gray-300 rounded-lg"
            />
            <button
              onClick={checkAvailability}
              disabled={checking}
              className="bg-[#1a5f7a] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#0e4a63] transition disabled:bg-gray-400"
            >
              {checking ? 'Checking...' : 'Check'}
            </button>
          </div>
          {item.category === 'school' && (
            <p className="text-xs text-gray-500 mt-1">Minimum order: {item.moq} units</p>
          )}
        </div>

        {availability && (
          <div className={`mb-6 p-4 rounded-lg ${
            availability.available ? 'bg-green-50' : 'bg-red-50'
          }`}>
            <p className={availability.available ? 'text-green-700' : 'text-red-700'}>
              {availability.message}
            </p>
            {availability.available && (
              <p className="text-sm text-gray-600 mt-2">
                Stock: {item.stock} units available
              </p>
            )}
          </div>
        )}

        <div className="flex gap-3">
          {availability?.available && (
            <button
              onClick={() => {
                onAddToCart(item, quantity);
                onClose();
              }}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Add to Cart ({quantity} units)
            </button>
          )}
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
