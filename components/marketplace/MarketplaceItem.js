import { useState } from 'react';

export default function MarketplaceItem({ item, onAddToCart, onCheckAvailability }) {
  const [quantity, setQuantity] = useState(item.category === 'school' ? item.moq : 1);

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
  };

  const getStockStatus = () => {
    if (item.stock > 20) return { text: 'In Stock', color: 'text-green-600' };
    if (item.stock > 5) return { text: 'Limited Stock', color: 'text-orange-600' };
    if (item.stock > 0) return { text: 'Low Stock', color: 'text-red-600' };
    return { text: 'Out of Stock', color: 'text-gray-400' };
  };

  const stockStatus = getStockStatus();

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
      {/* Image/Icon */}
      <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl">
        {item.image}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {item.subcategory}
          </span>
          {item.popular && (
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
              🔥 Popular
            </span>
          )}
        </div>

        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-sm font-medium ${stockStatus.color}`}>
            {stockStatus.text}
          </span>
          <span className="text-xs text-gray-400">({item.stock} available)</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-gray-900">KSh {item.price}</span>
            <span className="text-xs text-gray-500 ml-1">/{item.unit}</span>
          </div>
          
          {/* Quantity Selector */}
          <div className="flex items-center border rounded">
            <button 
              onClick={() => setQuantity(Math.max(item.category === 'school' ? item.moq : 1, quantity - 1))}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              -
            </button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        {item.category === 'school' && (
          <p className="text-xs text-gray-500 mb-3">MOQ: {item.moq} units</p>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={item.stock === 0}
            className="flex-1 bg-[#d98c5f] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#c07b52] transition disabled:bg-gray-300"
          >
            🛒 Add to Cart
          </button>
          <button
            onClick={() => onCheckAvailability(item)}
            className="px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm"
            title="Check availability"
          >
            ❓
          </button>
        </div>
      </div>
    </div>
  );
}
