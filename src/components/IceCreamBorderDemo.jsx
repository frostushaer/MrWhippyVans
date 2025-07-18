import React, { useState } from 'react';
import IceCreamBorder from './IceCreamBorder';

const IceCreamBorderDemo = () => {
  const [selectedFlavor, setSelectedFlavor] = useState('strawberry');
  const [selectedIntensity, setSelectedIntensity] = useState('medium');
  const [showSprinkles, setShowSprinkles] = useState(true);
  const [animated, setAnimated] = useState(true);

  const flavors = ['strawberry', 'chocolate', 'vanilla', 'mint', 'blueberry'];
  const intensities = ['light', 'medium', 'heavy'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Title */}
        <IceCreamBorder flavor="strawberry" intensity="light" className="mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            🍦 3D Ice Cream Border Component
          </h1>
          <p className="text-center text-gray-600">
            A delicious way to wrap your content with sweet 3D borders!
          </p>
        </IceCreamBorder>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          {/* Flavor selector */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">Flavor</label>
            <select 
              value={selectedFlavor} 
              onChange={(e) => setSelectedFlavor(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            >
              {flavors.map(flavor => (
                <option key={flavor} value={flavor}>
                  {flavor.charAt(0).toUpperCase() + flavor.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Intensity selector */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">Drip Intensity</label>
            <select 
              value={selectedIntensity} 
              onChange={(e) => setSelectedIntensity(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            >
              {intensities.map(intensity => (
                <option key={intensity} value={intensity}>
                  {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Animation toggle */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">Animation</label>
            <button
              onClick={() => setAnimated(!animated)}
              className={`w-full p-2 rounded-lg font-medium transition-colors ${
                animated 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              {animated ? 'Enabled' : 'Disabled'}
            </button>
          </div>

          {/* Sprinkles toggle */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">Sprinkles</label>
            <button
              onClick={() => setShowSprinkles(!showSprinkles)}
              className={`w-full p-2 rounded-lg font-medium transition-colors ${
                showSprinkles 
                  ? 'bg-rainbow-gradient text-white' 
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              {showSprinkles ? '🌈 Show' : '❌ Hide'}
            </button>
          </div>
        </div>

        {/* Main demo */}
        <IceCreamBorder 
          flavor={selectedFlavor} 
          intensity={selectedIntensity}
          animated={animated}
          showSprinkles={showSprinkles}
          className="mb-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Interactive Demo
            </h2>
            <p className="text-gray-600 mb-4">
              This content is wrapped in a customizable 3D ice cream border! 
              Use the controls above to see different flavors and effects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">🎨 Customizable</h3>
                <p className="text-sm text-gray-600">5 flavors, 3 intensities</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">✨ Animated</h3>
                <p className="text-sm text-gray-600">Smooth drip animations</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">🍬 Sprinkles</h3>
                <p className="text-sm text-gray-600">Falling colorful sprinkles</p>
              </div>
            </div>
          </div>
        </IceCreamBorder>

        {/* Usage examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card example */}
          <IceCreamBorder flavor="chocolate" intensity="light" showSprinkles={false}>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                🍫
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Product Card</h3>
              <p className="text-gray-600 text-sm mb-4">
                Perfect for highlighting special products or features
              </p>
              <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Learn More
              </button>
            </div>
          </IceCreamBorder>

          {/* Notification example */}
          <IceCreamBorder flavor="mint" intensity="medium" showSprinkles={false}>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">
                ✅
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Success!</h3>
                <p className="text-gray-600 text-sm">
                  Your order has been confirmed and will be delivered soon.
                </p>
              </div>
            </div>
          </IceCreamBorder>

          {/* Stats example */}
          <IceCreamBorder flavor="blueberry" intensity="heavy" animated={false}>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,234</div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
              <div className="mt-4 flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
          </IceCreamBorder>
        </div>

        {/* Code example */}
        <IceCreamBorder flavor="vanilla" intensity="light" showSprinkles={false}>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">💻</span>
              Usage Example
            </h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
              <div className="text-gray-500">// Basic usage</div>
              <div>&lt;IceCreamBorder flavor="strawberry"&gt;</div>
              <div className="ml-4">&lt;YourContent /&gt;</div>
              <div>&lt;/IceCreamBorder&gt;</div>
              <br />
              <div className="text-gray-500">// With custom props</div>
              <div>&lt;IceCreamBorder </div>
              <div className="ml-4">flavor="chocolate"</div>
              <div className="ml-4">intensity="heavy"</div>
              <div className="ml-4">animated={'{false}'}</div>
              <div className="ml-4">showSprinkles={'{false}'}</div>
              <div>&gt;</div>
              <div className="ml-4">&lt;YourContent /&gt;</div>
              <div>&lt;/IceCreamBorder&gt;</div>
            </div>
          </div>
        </IceCreamBorder>
      </div>
    </div>
  );
};

export default IceCreamBorderDemo;