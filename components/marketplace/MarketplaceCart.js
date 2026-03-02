import { useState } from 'react';
import MpesaPaymentModal from '../MpesaPaymentModal';

export default function MarketplaceCart({ isOpen, onClose, cart, onUpdateQuantity, onRemove, onClear, total }) {
  const [showPayment, setShowPayment] = useState(false);

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    // Here you would process the order
    alert('Payment successful! Your order will be processed.');
    onClear();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Your Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-6xl block mb-4">🛒</span>
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 border-b pb-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">KSh {item.price} x {item.quantity}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 border rounded hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 border rounded hover:bg-gray-100"
                        >
                          +
                        </button>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="ml-auto text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold">KSh {item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span className="font-semibold">KSh {total}</span>
                </div>
                <div className="flex justify-between mb-2 text-sm text-gray-500">
                  <span>Delivery</span>
                  <span>{total > 20000 ? 'Free' : 'KSh 350'}</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-[#d98c5f]">KSh {total + (total > 20000 ? 0 : 350)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition mb-3"
              >
                Checkout with M-Pesa
              </button>

              <button
                onClick={onClear}
                className="w-full text-gray-500 py-2 text-sm hover:text-gray-700"
              >
                Clear Cart
              </button>
            </>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <MpesaPaymentModal
          isOpen={showPayment}
          onClose={() => setShowPayment(false)}
          item={{
            name: `Cart (${cart.length} items)`,
            price: total + (total > 20000 ? 0 : 350),
            id: 'cart-checkout'
          }}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </>
  );
}
