import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import MarketplaceCart from '../../components/marketplace/MarketplaceCart';
import MarketplaceItem from '../../components/marketplace/MarketplaceItem';
import AvailabilityChecker from '../../components/marketplace/AvailabilityChecker';

export default function Marketplace() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [checkingAvailability, setCheckingAvailability] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // School Items (Bulk/Educational)
  const schoolItems = [
    // Robotics & Coding
    { id: 's1', name: 'Basic Robot Kit (Solar Powered)', category: 'school', subcategory: 'robotics', price: 1250, moq: 10, unit: 'kit', image: '🤖', description: 'Build a simple solar-powered robot', age: '8-12 years', stock: 45, popular: true },
    { id: 's2', name: 'Arduino Starter Kit', category: 'school', subcategory: 'robotics', price: 3450, moq: 5, unit: 'kit', image: '🔌', description: 'Complete Arduino board with sensors', age: '12+ years', stock: 28, popular: true },
    { id: 's3', name: 'Motor & Gear Set (10 pcs)', category: 'school', subcategory: 'robotics', price: 2300, moq: 5, unit: 'set', image: '⚙️', description: 'Small motors and gears for projects', age: '10+ years', stock: 32 },
    
    // Beads & Jewelry
    { id: 's4', name: 'Wooden Beads Assorted (500 pcs)', category: 'school', subcategory: 'beads', price: 650, moq: 10, unit: 'pack', image: '🪵', description: 'Natural wooden beads, various shapes', age: '5+ years', stock: 120, popular: true },
    { id: 's5', name: 'Plastic Pony Beads (1000 pcs)', category: 'school', subcategory: 'beads', price: 450, moq: 20, unit: 'pack', image: '📿', description: 'Bright colors, perfect for bracelets', age: '4+ years', stock: 200 },
    { id: 's6', name: 'Letter Beads (500 pcs)', category: 'school', subcategory: 'beads', price: 550, moq: 15, unit: 'pack', image: '🔤', description: 'A-Z alphabet beads for name bracelets', age: '5+ years', stock: 85 },
    
    // Art Supplies
    { id: 's7', name: 'Paint Brushes Set (50 pcs)', category: 'school', subcategory: 'art', price: 1200, moq: 10, unit: 'set', image: '🖌️', description: 'Assorted sizes, synthetic bristles', age: 'All ages', stock: 60, popular: true },
    { id: 's8', name: 'Acrylic Paint Set (12 colors x 100ml)', category: 'school', subcategory: 'art', price: 2400, moq: 5, unit: 'set', image: '🎨', description: '12 vibrant colors, non-toxic', age: '4+ years', stock: 42 },
    { id: 's9', name: 'Drawing Paper A4 (500 sheets)', category: 'school', subcategory: 'art', price: 850, moq: 20, unit: 'ream', image: '📄', description: '120gsm, suitable for all media', age: 'All ages', stock: 150 },
    
    // Science Kits
    { id: 's10', name: 'Magnifying Glass Set (30 pcs)', category: 'school', subcategory: 'science', price: 2800, moq: 5, unit: 'set', image: '🔍', description: '3x magnification, plastic frame', age: '5+ years', stock: 35 },
    { id: 's11', name: 'Test Tubes with Stand (50 tubes)', category: 'school', subcategory: 'science', price: 3500, moq: 3, unit: 'set', image: '🧪', description: 'Glass test tubes with rack', age: '10+ years', stock: 18, popular: true },
    
    // Math Manipulatives
    { id: 's12', name: 'Counting Bears (1000 pcs)', category: 'school', subcategory: 'math', price: 3200, moq: 5, unit: 'set', image: '🧸', description: '6 colors, 3 sizes', age: '3-7 years', stock: 25 },
    { id: 's13', name: 'Pattern Blocks (500 pcs)', category: 'school', subcategory: 'math', price: 2800, moq: 5, unit: 'set', image: '🔷', description: 'Wooden geometric shapes', age: '4-10 years', stock: 30 },
    
    // Stationery
    { id: 's14', name: 'Pencils HB (500 pcs)', category: 'school', subcategory: 'stationery', price: 2200, moq: 10, unit: 'pack', image: '✏️', description: 'Graphite pencils with eraser', age: 'All ages', stock: 200 },
    { id: 's15', name: 'Exercise Books (100 pcs)', category: 'school', subcategory: 'stationery', price: 4500, moq: 5, unit: 'pack', image: '📓', description: '80 pages, ruled', age: 'All ages', stock: 75 },
  ];

  // Home/DIY Items (Individual/Family)
  const homeItems = [
    // DIY Kits
    { id: 'h1', name: 'DIY Robot Making Kit', category: 'home', subcategory: 'diy', price: 850, unit: 'kit', image: '🤖', description: 'Build your own robot at home', age: '8+ years', stock: 25, popular: true },
    { id: 'h2', name: 'Bead Jewelry Making Kit', category: 'home', subcategory: 'diy', price: 450, unit: 'kit', image: '📿', description: 'Make bracelets and necklaces', age: '6+ years', stock: 40, popular: true },
    { id: 'h3', name: 'Paint Your Own Pottery Kit', category: 'home', subcategory: 'diy', price: 650, unit: 'kit', image: '🏺', description: 'Includes pottery pieces and paints', age: '5+ years', stock: 18 },
    
    // Science Experiments
    { id: 'h4', name: 'Volcano Science Kit', category: 'home', subcategory: 'science', price: 550, unit: 'kit', image: '🌋', description: 'Make your own erupting volcano', age: '7-12 years', stock: 22, popular: true },
    { id: 'h5', name: 'Crystal Growing Kit', category: 'home', subcategory: 'science', price: 480, unit: 'kit', image: '💎', description: 'Grow your own crystals', age: '8+ years', stock: 15 },
    { id: 'h6', name: 'Magnet Science Kit', category: 'home', subcategory: 'science', price: 390, unit: 'kit', image: '🧲', description: '10 magnetic experiments', age: '6+ years', stock: 30 },
    
    // Art & Craft
    { id: 'h7', name: 'Beginner Paint Set', category: 'home', subcategory: 'art', price: 350, unit: 'set', image: '🎨', description: '12 colors, 3 brushes, paper', age: '4+ years', stock: 50, popular: true },
    { id: 'h8', name: 'Origami Paper Pack (100 sheets)', category: 'home', subcategory: 'art', price: 180, unit: 'pack', image: '🦢', description: 'Assorted colors and patterns', age: '6+ years', stock: 65 },
    { id: 'h9', name: 'Clay Modeling Set', category: 'home', subcategory: 'art', price: 420, unit: 'set', image: '🏺', description: '8 colors of clay with tools', age: '5+ years', stock: 28 },
    
    // Educational Games
    { id: 'h10', name: 'Math Board Game', category: 'home', subcategory: 'games', price: 580, unit: 'game', image: '🎲', description: 'Learn math through play', age: '6-10 years', stock: 20 },
    { id: 'h11', name: 'Spelling Puzzle', category: 'home', subcategory: 'games', price: 320, unit: 'puzzle', image: '🧩', description: '50 word puzzles', age: '5-8 years', stock: 35 },
    { id: 'h12', name: 'Memory Card Game', category: 'home', subcategory: 'games', price: 250, unit: 'game', image: '🃏', description: 'Improve memory skills', age: '4+ years', stock: 42, popular: true },
    
    // Outdoor Play
    { id: 'h13', name: 'Kite Making Kit', category: 'home', subcategory: 'outdoor', price: 290, unit: 'kit', image: '🪁', description: 'Build and fly your own kite', age: '6+ years', stock: 25 },
    { id: 'h14', name: 'Nature Explorer Kit', category: 'home', subcategory: 'outdoor', price: 520, unit: 'kit', image: '🔍', description: 'Binoculars, magnifier, guide', age: '5-10 years', stock: 18 },
    { id: 'h15', name: 'Gardening Kit for Kids', category: 'home', subcategory: 'outdoor', price: 380, unit: 'kit', image: '🌱', description: 'Seeds, tools, and pots', age: '4+ years', stock: 22, popular: true },
  ];

  const allItems = [...schoolItems, ...homeItems];

  // Filter items based on category and search
  const filteredItems = allItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Add to cart function
  const addToCart = (item, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  };

  // Update quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(prev => prev.map(i => 
        i.id === itemId ? { ...i, quantity: newQuantity } : i
      ));
    }
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate cart total
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Check availability
  const checkAvailability = (item) => {
    setCheckingAvailability(item);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Head>
        <title>Marketplace - School & Home DIY - CBC Hub</title>
      </Head>

      {/* Header */}
      <div className="bg-[#d98c5f] text-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-white/80 hover:text-white">
              ← Back to Home
            </Link>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowCart(true)}
                className="relative bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition flex items-center gap-2"
              >
                <span>🛒</span>
                <span>Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-light mt-4">
            School & Home<span className="font-semibold"> Marketplace</span>
          </h1>
          <p className="text-lg text-white/80 mt-2">Educational supplies for schools and DIY fun at home</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-2 flex items-center border border-gray-200">
          <span className="text-gray-400 px-3">🔍</span>
          <input 
            type="text" 
            placeholder="Search for robot kits, beads, art supplies..." 
            className="flex-1 outline-none p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex gap-3 border-b border-gray-200 pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-t-lg font-medium ${
              selectedCategory === 'all' 
                ? 'bg-[#d98c5f] text-white' 
                : 'text-gray-600 hover:text-[#d98c5f]'
            }`}
          >
            All Items ({allItems.length})
          </button>
          <button
            onClick={() => setSelectedCategory('school')}
            className={`px-6 py-2 rounded-t-lg font-medium ${
              selectedCategory === 'school' 
                ? 'bg-[#1a5f7a] text-white' 
                : 'text-gray-600 hover:text-[#1a5f7a]'
            }`}
          >
            🏫 School ({schoolItems.length})
          </button>
          <button
            onClick={() => setSelectedCategory('home')}
            className={`px-6 py-2 rounded-t-lg font-medium ${
              selectedCategory === 'home' 
                ? 'bg-[#2c6e63] text-white' 
                : 'text-gray-600 hover:text-[#2c6e63]'
            }`}
          >
            🏠 Home DIY ({homeItems.length})
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6">
        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MarketplaceItem 
              key={item.id}
              item={item}
              onAddToCart={addToCart}
              onCheckAvailability={checkAvailability}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your search.</p>
          </div>
        )}

        {/* Category Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <span className="text-4xl block mb-3">🏫</span>
            <h3 className="text-xl font-semibold mb-2">School Supplies</h3>
            <p className="text-gray-600 mb-4">Bulk ordering for schools and institutions. Minimum order quantities apply.</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>✓ MOQ: 5-20 units per item</li>
              <li>✓ School quotes available</li>
              <li>✓ Delivery within 3-5 days</li>
              <li>✓ LPO/LSO accepted</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <span className="text-4xl block mb-3">🏠</span>
            <h3 className="text-xl font-semibold mb-2">Home DIY</h3>
            <p className="text-gray-600 mb-4">Individual kits for fun learning at home. Single items available.</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>✓ Single item purchase</li>
              <li>✓ Perfect for parents</li>
              <li>✓ Fun weekend projects</li>
              <li>✓ Delivery within 2-3 days</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Cart Sidebar */}
      <MarketplaceCart
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
        total={cartTotal}
      />

      {/* Availability Checker Modal */}
      {checkingAvailability && (
        <AvailabilityChecker
          item={checkingAvailability}
          onClose={() => setCheckingAvailability(null)}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}
