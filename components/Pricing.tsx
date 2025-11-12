export default function Pricing() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 py-24 overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center">
        <div className="w-full max-w-md bg-neutral-800/40 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-amber-700/30 hover:border-amber-600/50 transition-all duration-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-8 text-center">
            <h2 className="text-3xl font-serif text-white mb-2">Restaurant Business</h2>
            <p className="text-amber-100 font-light">Professional Website Solution</p>
          </div>

          {/* Price */}
          <div className="px-8 py-8 text-center border-b border-amber-700/30">
            <div className="text-5xl font-serif text-white mb-2">$29</div>
            <p className="text-neutral-300 font-light">One-time payment</p>
          </div>

          {/* Features */}
          <div className="px-8 py-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-300 font-light">Award-winning chef with Michelin-starred experience</span>
              </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-neutral-300 font-light">Seasonal tasting menus featuring locally sourced ingredients</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-neutral-300 font-light">Curated wine program with 500+ bottles from renowned vineyards</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-neutral-300 font-light">Intimate private dining rooms for special occasions</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-neutral-300 font-light">Impeccable service and attention to detail</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-neutral-300 font-light">Elegant ambiance perfect for celebrations</span>
        </li>
      </ul>
    </div>

          {/* Button */}
          <div className="px-8 pb-8">
            <button onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=720edb33-9361-40b5-ae19-a3bcd458670f'} className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-xl font-light tracking-wide hover:shadow-2xl hover:shadow-amber-400/30 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Get Your Website - $29
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}