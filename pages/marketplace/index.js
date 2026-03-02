import Link from 'next/link';
import { useState } from 'react';

export default function MarketplaceSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState(null);

  const categories = [
    { id: 'robotics', name: 'Robotics & Coding', icon: '🤖', count: 18 },
    { id: 'beads', name: 'Beadwork & Jewelry', icon: '📿', count: 24 },
    { id: 'art', name: 'Art & Craft Supplies', icon: '🎨', count: 32 },
    { id: 'science', name: 'Science Kits', icon: '🔬', count: 15 },
    { id: 'math', name: 'Math Manipulatives', icon: '🧮', count: 21 },
    { id: 'sensory', name: 'Sensory Tools', icon: '🌈', count: 14 },
    { id: 'writing', name: 'Writing & Stationery', icon: '✏️', count: 28 },
    { id: 'construction', name: 'Construction Toys', icon: '🧱', count: 12 },
  ];

  // Detailed products with prices
  const products = [
    // Robotics & Coding
    { id: 1, name: 'Basic Robot Kit (Solar Powered)', category: 'robotics', price: 1250, moq: 10, image: '🤖', description: 'Build a simple solar-powered robot', age: '8-12 years', inStock: true },
    { id: 2, name: 'Arduino Starter Kit', category: 'robotics', price: 3450, moq: 5, image: '🔌', description: 'Complete Arduino board with sensors', age: '12+ years', inStock: true },
    { id: 3, name: 'Motor & Gear Set (10 pcs)', category: 'robotics', price: 2300, moq: 5, image: '⚙️', description: 'Small motors and gears for projects', age: '10+ years', inStock: true },
    { id: 4, name: 'LED Light Kit (100 pcs)', category: 'robotics', price: 850, moq: 20, image: '💡', description: 'Assorted LEDs for circuit projects', age: '8+ years', inStock: true },
    { id: 5, name: 'Battery Holder Set (30 pcs)', category: 'robotics', price: 1200, moq: 15, image: '🔋', description: 'AA battery holders with wires', age: 'All ages', inStock: true },
    { id: 6, name: 'Robot Wheels & Tracks (20 sets)', category: 'robotics', price: 2800, moq: 5, image: '🛞', description: 'Assorted wheels and tank tracks', age: '10+ years', inStock: true },
    
    // Beads & Jewelry Making
    { id: 7, name: 'Wooden Beads Assorted (500 pcs)', category: 'beads', price: 650, moq: 10, image: '🪵', description: 'Natural wooden beads, various shapes', age: '5+ years', inStock: true },
    { id: 8, name: 'Plastic Pony Beads (1000 pcs)', category: 'beads', price: 450, moq: 20, image: '📿', description: 'Bright colors, perfect for bracelets', age: '4+ years', inStock: true },
    { id: 9, name: 'Glass Seed Beads (500g)', category: 'beads', price: 1200, moq: 5, image: '✨', description: 'Czech glass beads, assorted colors', age: '10+ years', inStock: true },
    { id: 10, name: 'Letter Beads (500 pcs)', category: 'beads', price: 550, moq: 15, image: '🔤', description: 'A-Z alphabet beads for name bracelets', age: '5+ years', inStock: true },
    { id: 11, name: 'Elastic String (100m roll)', category: 'beads', price: 350, moq: 10, image: '🪢', description: 'Stretchy beading cord', age: 'All ages', inStock: true },
    { id: 12, name: 'Metal Charms (50 pcs)', category: 'beads', price: 750, moq: 10, image: '⭐', description: 'Assorted metal charms: stars, hearts, animals', age: '8+ years', inStock: true },
    { id: 13, name: 'Beading Needles (100 pcs)', category: 'beads', price: 250, moq: 20, image: '🪡', description: 'Fine beading needles', age: '10+ years', inStock: true },
    { id: 14, name: 'Jewelry Clasp Set (100 sets)', category: 'beads', price: 950, moq: 10, image: '🔒', description: 'Lobster clasps with jump rings', age: '10+ years', inStock: true },
    
    // Art & Craft Supplies
    { id: 15, name: 'Paint Brushes Set (50 pcs)', category: 'art', price: 1200, moq: 10, image: '🖌️', description: 'Assorted sizes, synthetic bristles', age: 'All ages', inStock: true },
    { id: 16, name: 'Acrylic Paint Set (12 colors x 100ml)', category: 'art', price: 2400, moq: 5, image: '🎨', description: '12 vibrant colors, non-toxic', age: '4+ years', inStock: true },
    { id: 17, name: 'Watercolor Pans (50 sets)', category: 'art', price: 1800, moq: 10, image: '💧', description: 'Portable watercolor sets with brush', age: '5+ years', inStock: true },
    { id: 18, name: 'Drawing Paper A4 (500 sheets)', category: 'art', price: 850, moq: 20, image: '📄', description: '120gsm, suitable for all media', age: 'All ages', inStock: true },
    { id: 19, name: 'Construction Paper (500 sheets)', category: 'art', price: 950, moq: 15, image: '🌈', description: '10 assorted colors, 80gsm', age: '3+ years', inStock: true },
    { id: 20, name: 'Glue Sticks (100 pcs)', category: 'art', price: 1500, moq: 10, image: '🖇️', description: 'Washable, non-toxic glue sticks', age: '3+ years', inStock: true },
    { id: 21, name: 'Safety Scissors (50 pcs)', category: 'art', price: 2200, moq: 5, image: '✂️', description: 'Blunt-tip, stainless steel', age: '4+ years', inStock: true },
    { id: 22, name: 'Modeling Clay (10kg block)', category: 'art', price: 1800, moq: 5, image: '🏺', description: 'Air-dry clay, natural white', age: '5+ years', inStock: true },
    { id: 23, name: 'Colored Pencils (50 packs of 12)', category: 'art', price: 3200, moq: 5, image: '🖍️', description: '12 vibrant colors per pack', age: '3+ years', inStock: true },
    { id: 24, name: 'Markers (100 packs of 10)', category: 'art', price: 4500, moq: 3, image: '🖊️', description: 'Washable markers, 10 colors', age: '3+ years', inStock: true },
    
    // Science Kits
    { id: 25, name: 'Magnifying Glass Set (30 pcs)', category: 'science', price: 2800, moq: 5, image: '🔍', description: '3x magnification, plastic frame', age: '5+ years', inStock: true },
    { id: 26, name: 'Test Tubes with Stand (50 tubes)', category: 'science', price: 3500, moq: 3, image: '🧪', description: 'Glass test tubes with rack', age: '10+ years', inStock: true },
    { id: 27, name: 'Safety Goggles (30 pcs)', category: 'science', price: 4200, moq: 3, image: '🥽', description: 'Adjustable, impact-resistant', age: '8+ years', inStock: true },
    { id: 28, name: 'Magnets Set (100 pcs)', category: 'science', price: 1800, moq: 10, image: '🧲', description: 'Assorted shapes and strengths', age: '6+ years', inStock: true },
    
    // Math Manipulatives
    { id: 29, name: 'Counting Bears (1000 pcs)', category: 'math', price: 3200, moq: 5, image: '🧸', description: '6 colors, 3 sizes', age: '3-7 years', inStock: true },
    { id: 30, name: 'Pattern Blocks (500 pcs)', category: 'math', price: 2800, moq: 5, image: '🔷', description: 'Wooden geometric shapes', age: '4-10 years', inStock: true },
    { id: 31, name: 'Number Rods (10 sets)', category: 'math', price: 4500, moq: 3, image: '📏', description: 'Cuisenaire rods, wooden', age: '5-12 years', inStock: true },
    { id: 32, name: 'Fraction Circles (30 sets)', category: 'math', price: 3600, moq: 5, image: '🥧', description: 'Magnetic fraction tiles', age: '8-14 years', inStock: true },
    { id: 33, name: 'Geoboards (30 pcs)', category: 'math', price: 4200, moq: 3, image: '🔲', description: 'With rubber bands', age: '6-12 years', inStock: true },
    
    // Sensory Tools
    { id: 34, name: 'Fidget Toy Pack (50 pcs)', category: 'sensory', price: 3500, moq: 3, image: '🌀', description: 'Assorted fidgets: pop tubes, spinners', age: 'All ages', inStock: true },
    { id: 35, name: 'Weighted Lap Pad (5 pcs)', category: 'sensory', price: 5800, moq: 2, image: '🛏️', description: '1.5kg, washable cover', age: '6+ years', inStock: true },
    { id: 36, name: 'Sensory Balls (30 pcs)', category: 'sensory', price: 2400, moq: 5, image: '⚽', description: 'Textured, different sizes', age: '3+ years', inStock: true },
    { id: 37, name: 'Chewable Jewelry (20 pcs)', category: 'sensory', price: 2800, moq: 3, image: '🍬', description: 'Safe silicone chew pendants', age: '4+ years', inStock: true },
    
    // Writing & Stationery
    { id: 38, name: 'Pencils HB (500 pcs)', category: 'writing', price: 2200, moq: 10, image: '✏️', description: 'Graphite pencils with eraser', age: 'All ages', inStock: true },
    { id: 39, name: 'Exercise Books (100 pcs)', category: 'writing', price: 4500, moq: 5, image: '📓', description: '80 pages, ruled', age: 'All ages', inStock: true },
    { id: 40, name: 'Erasers (200 pcs)', category: 'writing', price: 1500, moq: 20, image: '🧼', description: 'White, latex-free', age: 'All ages', inStock: true },
    { id: 41, name: 'Rulers (100 pcs)', category: 'writing', price: 2800, moq: 10, image: '📐', description: '30cm, clear plastic', age: 'All ages', inStock: true },
    
    // Construction Toys
    { id: 42, name: 'Building Blocks (500 pcs)', category: 'construction', price: 5200, moq: 3, image: '🧱', description: 'Classic interlocking blocks', age: '3-8 years', inStock: true },
    { id: 43, name: 'Magnetic Tiles (100 pcs)', category: 'construction', price: 6800, moq: 2, image: '🧲', description: 'Magnetic building squares/triangles', age: '4-10 years', inStock: true },
    { id: 44, name: 'Straw Connectors (500 pcs)', category: 'construction', price: 3200, moq: 5, image: '🥤', description: 'Build structures with straws', age: '5-12 years', inStock: true },
    { id: 45, name: 'Gear Set (200 pcs)', category: 'construction', price: 4500, moq: 3, image: '⚙️', description: 'Interlocking gears and cranks', age: '6-12 years', inStock: true },
  ];

  // School Bundles (bulk packages)
  const bundles = [
    {
      id: 'b1',
      name: 'Complete Robotics Lab (Class of 40)',
      description: 'Everything needed to start a robotics program',
      image: '🤖',
      items: [
        { name: 'Robot Kits (40 pcs)', price: 1250, qty: 40, total: 50000 },
        { name: 'Motors & Gears (40 sets)', price: 2300, qty: 2, total: 4600 },
        { name: 'Battery Holders (120 pcs)', price: 1200, qty: 3, total: 3600 },
        { name: 'LED Kits (40 sets)', price: 850, qty: 40, total: 34000 },
        { name: 'Teacher Training Guide', price: 0, qty: 1, total: 0 },
      ],
      subtotal: 92200,
      discount: 12200,
      total: 80000,
      savings: 12200,
      suitableFor: ['Grade 5-9', 'Robotics Club'],
      minOrder: 1
    },
    {
      id: 'b2',
      name: 'Beadwork Class Pack (40 students)',
      description: 'Traditional Kenyan beadwork supplies',
      image: '📿',
      items: [
        { name: 'Assorted Beads (10kg)', price: 6500, qty: 1, total: 6500 },
        { name: 'Letter Beads (500 pcs)', price: 550, qty: 2, total: 1100 },
        { name: 'Elastic String (5 rolls)', price: 350, qty: 5, total: 1750 },
        { name: 'Metal Charms (200 pcs)', price: 750, qty: 4, total: 3000 },
        { name: 'Beading Needles (200 pcs)', price: 250, qty: 2, total: 500 },
        { name: 'Jewelry Clasps (200 sets)', price: 950, qty: 2, total: 1900 },
      ],
      subtotal: 14750,
      discount: 2750,
      total: 12000,
      savings: 2750,
      suitableFor: ['Grade 4-9', 'Art Club', 'Cultural Studies'],
      minOrder: 1
    },
    {
      id: 'b3',
      name: 'Art Supply Mega Pack (Class of 40)',
      description: 'Complete art supplies for a full term',
      image: '🎨',
      items: [
        { name: 'Paint Brushes (200 pcs)', price: 1200, qty: 4, total: 4800 },
        { name: 'Acrylic Paint Sets (10 sets)', price: 2400, qty: 4, total: 9600 },
        { name: 'Watercolor Sets (40 sets)', price: 1800, qty: 1, total: 1800 },
        { name: 'Drawing Paper (1000 sheets)', price: 850, qty: 2, total: 1700 },
        { name: 'Construction Paper (1000 sheets)', price: 950, qty: 2, total: 1900 },
        { name: 'Glue Sticks (200 pcs)', price: 1500, qty: 2, total: 3000 },
        { name: 'Safety Scissors (100 pcs)', price: 2200, qty: 1, total: 2200 },
        { name: 'Modeling Clay (20kg)', price: 1800, qty: 2, total: 3600 },
        { name: 'Colored Pencils (200 packs)', price: 3200, qty: 4, total: 12800 },
      ],
      subtotal: 41400,
      discount: 6400,
      total: 35000,
      savings: 6400,
      suitableFor: ['All Grades', 'Art Club'],
      minOrder: 1
    },
    {
      id: 'b4',
      name: 'Early Years Manipulatives Kit',
      description: 'Hands-on learning for PP1-Grade 3',
      image: '🧸',
      items: [
        { name: 'Counting Bears (2000 pcs)', price: 3200, qty: 2, total: 6400 },
        { name: 'Pattern Blocks (1000 pcs)', price: 2800, qty: 2, total: 5600 },
        { name: 'Number Rods (20 sets)', price: 4500, qty: 2, total: 9000 },
        { name: 'Building Blocks (1000 pcs)', price: 5200, qty: 2, total: 10400 },
        { name: 'Sensory Balls (60 pcs)', price: 2400, qty: 2, total: 4800 },
        { name: 'Magnetic Tiles (200 pcs)', price: 6800, qty: 1, total: 6800 },
      ],
      subtotal: 43000,
      discount: 6000,
      total: 37000,
      savings: 6000,
      suitableFor: ['PP1', 'PP2', 'Grade 1-3'],
      minOrder: 1
    },
    {
      id: 'b5',
      name: 'Science Lab Starter Kit',
      description: 'Basic science equipment for experiments',
      image: '🔬',
      items: [
        { name: 'Magnifying Glasses (60 pcs)', price: 2800, qty: 2, total: 5600 },
        { name: 'Test Tubes (100 tubes)', price: 3500, qty: 2, total: 7000 },
        { name: 'Safety Goggles (60 pcs)', price: 4200, qty: 2, total: 8400 },
        { name: 'Magnets Set (300 pcs)', price: 1800, qty: 3, total: 5400 },
        { name: 'LED Kits (40 sets)', price: 850, qty: 1, total: 850 },
        { name: 'Battery Holders (60 pcs)', price: 1200, qty: 2, total: 2400 },
      ],
      subtotal: 29650,
      discount: 4650,
      total: 25000,
      savings: 4650,
      suitableFor: ['Grade 4-9', 'Science Club'],
      minOrder: 1
    },
    {
      id: 'b6',
      name: 'Sensory & Inclusive Learning Kit',
      description: 'Tools for special needs education',
      image: '🌈',
      items: [
        { name: 'Fidget Toy Pack (200 pcs)', price: 3500, qty: 4, total: 14000 },
        { name: 'Weighted Lap Pads (10 pcs)', price: 5800, qty: 2, total: 11600 },
        { name: 'Sensory Balls (60 pcs)', price: 2400, qty: 2, total: 4800 },
        { name: 'Chewable Jewelry (60 pcs)', price: 2800, qty: 3, total: 8400 },
        { name: 'Visual Schedule Cards', price: 1200, qty: 1, total: 1200 },
        { name: 'Social Stories Books (20 titles)', price: 4000, qty: 1, total: 4000 },
      ],
      subtotal: 44000,
      discount: 7000,
      total: 37000,
      savings: 7000,
      suitableFor: ['Special Needs', 'Inclusive Classes'],
      minOrder: 1
    },
  ];

  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Calculate category totals
  const categoryTotals = {};
  products.forEach(p => {
    categoryTotals[p.category] = (categoryTotals[p.category] || 0) + 1;
  });

  const ProductModal = ({ bundle, onClose }) => {
    if (!bundle) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">{bundle.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl bg-[#d98c5f]/10 w-20 h-20 rounded-xl flex items-center justify-center">
                {bundle.image}
              </span>
              <div>
                <p className="text-gray-600 mb-2">{bundle.description}</p>
                <div className="flex gap-2">
                  {bundle.suitableFor.map(level => (
                    <span key={level} className="text-xs bg-gray-100 px-2 py-1 rounded">{level}</span>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-3">Items Included:</h3>
            <table className="w-full mb-6">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-2 text-sm">Item</th>
                  <th className="text-right p-2 text-sm">Qty</th>
                  <th className="text-right p-2 text-sm">Unit Price</th>
                  <th className="text-right p-2 text-sm">Total</th>
                </tr>
              </thead>
              <tbody>
                {bundle.items.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 text-sm">{item.name}</td>
                    <td className="p-2 text-sm text-right">{item.qty}</td>
                    <td className="p-2 text-sm text-right">KSh {item.price.toLocaleString()}</td>
                    <td className="p-2 text-sm text-right">KSh {item.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>KSh {bundle.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2 text-green-600">
                <span>Bulk Discount:</span>
                <span>- KSh {bundle.discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>KSh {bundle.total.toLocaleString()}</span>
              </div>
              <p className="text-sm text-green-600 mt-2">You save KSh {bundle.savings.toLocaleString()}!</p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
                Order This Bundle
              </button>
              <button className="flex-1 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                Request Quote
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">Min order: {bundle.minOrder} bundle • Free delivery within Nairobi</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-[#d98c5f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Link href="/" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
            <span>←</span> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-light mt-4">
            School<span className="font-semibold"> Marketplace</span>
          </h1>
          <p className="text-lg text-white/80 mt-2">Educational supplies, project kits, and bulk materials</p>
        </div>
      </div>

      {/* Bulk Order Notice */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 mb-8">
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <p className="font-medium text-green-800">🏫 School & Bulk Orders</p>
          <p className="text-sm text-green-700 mt-1">All prices include bulk discounts. Minimum order quantities (MOQ) apply. Free delivery within Nairobi for orders over KSh 20,000.</p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-6 mb-8 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
              selectedCategory === 'all' 
                ? 'bg-[#d98c5f] text-white' 
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            All Categories ({products.length})
          </button>
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
                selectedCategory === cat.id 
                  ? 'bg-[#d98c5f] text-white' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat.icon} {cat.name} ({categoryTotals[cat.id] || 0})
            </button>
          ))}
        </div>
      </div>

      {/* School Bundles Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-2xl font-light text-gray-900 mb-6">🏷️ School Bundles (Best Value)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <div key={bundle.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition cursor-pointer"
                 onClick={() => setSelectedBundle(bundle)}>
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl bg-[#d98c5f]/10 w-16 h-16 rounded-xl flex items-center justify-center">
                  {bundle.image}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{bundle.name}</h3>
                  <p className="text-sm text-gray-600">{bundle.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {bundle.suitableFor.map(level => (
                  <span key={level} className="text-xs bg-gray-100 px-2 py-1 rounded">{level}</span>
                ))}
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">KSh {bundle.total.toLocaleString()}</span>
                <span className="text-sm text-gray-500 line-through">KSh {bundle.subtotal.toLocaleString()}</span>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Save {Math.round((bundle.savings/bundle.subtotal)*100)}%</span>
              </div>
              <button className="w-full bg-[#1a5f7a] text-white py-2 rounded-lg font-medium hover:bg-[#0e4a63] transition"
                      onClick={(e) => { e.stopPropagation(); setSelectedBundle(bundle); }}>
                View Bundle Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Individual Items Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-2xl font-light text-gray-900 mb-6">📦 Individual Items (Bulk Pricing)</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition">
              <div className="text-4xl mb-3 text-center">{product.image}</div>
              <h3 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{product.description}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-gray-900">KSh {product.price}</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">MOQ: {product.moq}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{product.age}</span>
                {product.inStock ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </div>
              <button className="w-full bg-[#d98c5f] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#c07b52] transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Order Form */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-light text-gray-900 mb-4">📝 Quick School Order</h2>
          <p className="text-gray-600 mb-6">Tell us what you need and we'll prepare a custom quote within 24 hours</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g., Moi Primary School" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g., John Kamau" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="07XX XXX XXX" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="headteacher@school.ac.ke" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Items Needed (list quantities and items)</label>
              <textarea rows="3" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="e.g., 40 Robot Kits for Grade 6, 500 pcs of assorted beads for Art Club..."></textarea>
            </div>
          </div>
          <button className="mt-6 bg-[#1a5f7a] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0e4a63] transition">
            Request Quote
          </button>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <span className="text-3xl block mb-2">🚚</span>
            <h3 className="font-medium text-gray-900">Free Delivery</h3>
            <p className="text-xs text-gray-500">Nairobi orders over KSh 20,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <span className="text-3xl block mb-2">💰</span>
            <h3 className="font-medium text-gray-900">Bulk Discounts</h3>
            <p className="text-xs text-gray-500">Up to 25% off school orders</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <span className="text-3xl block mb-2">📦</span>
            <h3 className="font-medium text-gray-900">Nationwide Shipping</h3>
            <p className="text-xs text-gray-500">3-5 day delivery countrywide</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <span className="text-3xl block mb-2">🤝</span>
            <h3 className="font-medium text-gray-900">School PO Accepted</h3>
            <p className="text-xs text-gray-500">LPO/LSO welcome</p>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedBundle && (
        <ProductModal bundle={selectedBundle} onClose={() => setSelectedBundle(null)} />
      )}
    </div>
  );
}
