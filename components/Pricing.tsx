export default function Pricing() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-2">Restaurant Business</h2>
      <p className="text-blue-100">Professional Website Solution</p>
    </div>

    {/* Price */}
    <div className="px-8 py-8 text-center border-b border-slate-200">
      <div className="text-5xl font-bold text-slate-900 mb-2">$29</div>
      <p className="text-slate-600">One-time payment</p>
    </div>

    {/* Features */}
    <div className="px-8 py-8">
      <ul className="space-y-4">
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-slate-700">Award-winning chef with Michelin-starred experience</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-slate-700">Seasonal tasting menus featuring locally sourced ingredients</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-slate-700">Curated wine program with 500+ bottles from renowned vineyards</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-slate-700">Intimate private dining rooms for special occasions</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-slate-700">Impeccable service and attention to detail</span>
        </li>
        <li className="flex items-start">
          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-slate-700">Elegant ambiance perfect for celebrations</span>
        </li>
      </ul>
    </div>

    {/* Button */}
    <div className="px-8 pb-8">
      <button onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=720edb33-9361-40b5-ae19-a3bcd458670f'} className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200">
        Get Your Website - $29
      </button>
    </div>
  </div>
</section>
  );
}