import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 py-24 overflow-hidden">
  {/* Elegant background pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
      backgroundSize: '48px 48px'
    }}></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section header */}
    <div className="text-center mb-20 max-w-3xl mx-auto">
      <div className="inline-block mb-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
          <span className="text-amber-600 tracking-[0.3em] text-sm font-light uppercase">Culinary Excellence</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
        </div>
      </div>
      <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 tracking-tight">
        The Art of Fine Dining
      </h2>
      <p className="text-neutral-300 text-lg leading-relaxed font-light">
        Every element of your experience is thoughtfully curated to create moments of pure culinary poetry
      </p>
    </div>

    {/* Services grid with staggered layout */}
    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      
      {/* Service 1 - Featured larger */}
      <div className="md:col-span-2 group relative bg-neutral-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 hover:border-amber-600/50 transition-all duration-700">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-2 relative h-80 md:h-auto overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop" 
              width={800} 
              height={600} 
              alt="Michelin-starred chef preparing exquisite dish"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-800/60"></div>
          </div>
          <div className="md:col-span-3 p-10 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center border border-amber-600/30">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
              Award-Winning Chef
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-6 text-lg font-light">
              Experience the mastery of Chef Laurent Beaumont, whose Michelin-starred journey spans three continents. 
              With two decades of culinary innovation, he brings refined technique and artistic vision to every plate.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-amber-600/10 text-amber-500 rounded-full text-sm font-light border border-amber-600/20">
                2 Michelin Stars
              </span>
              <span className="px-4 py-2 bg-amber-600/10 text-amber-500 rounded-full text-sm font-light border border-amber-600/20">
                James Beard Nominee
              </span>
              <span className="px-4 py-2 bg-amber-600/10 text-amber-500 rounded-full text-sm font-light border border-amber-600/20">
                20+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className="group relative bg-neutral-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 hover:border-amber-600/50 transition-all duration-700">
        <div className="relative h-72 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop" 
            width={800} 
            height={600} 
            alt="Seasonal tasting menu with locally sourced ingredients"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
          <div className="absolute top-6 right-6">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">
            Seasonal Tasting Menus
          </h3>
          <p className="text-neutral-300 leading-relaxed mb-6 font-light">
            Our ever-evolving menus celebrate the finest seasonal ingredients from local farms and artisan producers. 
            Each course tells a story of terroir, craftsmanship, and culinary artistry.
          </p>
          <div className="flex items-center gap-3 text-amber-500 group-hover:gap-4 transition-all duration-300">
            <span className="text-sm font-light tracking-wider uppercase">6-Course Journey</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service 3 */}
      <div className="group relative bg-neutral-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700/50 hover:border-amber-600/50 transition-all duration-700">
        <div className="relative h-72 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop" 
            width={800} 
            height={600} 
            alt="Curated wine cellar with rare vintage bottles"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
          <div className="absolute top-6 right-6">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">
            Curated Wine Program
          </h3>
          <p className="text-neutral-300 leading-relaxed mb-6 font-light">
            Explore our temperature-controlled cellar housing over 500 exceptional bottles. From rare Burgundies to 
            emerging biodynamic estates, our sommelier crafts perfect pairings for your culinary journey.
          </p>
          <div className="flex items-center gap-3 text-amber-500 group-hover:gap-4 transition-all duration-300">
            <span className="text-sm font-light tracking-wider uppercase">Expert Pairings</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service 4 - Full width elegant */}
      <div className="md:col-span-2 group relative bg-gradient-to-br from-amber-900/20 to-neutral-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-700/30 hover:border-amber-600/50 transition-all duration-700">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-3 p-10 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center border border-amber-600/30">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
              Private Dining Rooms
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-6 text-lg font-light">
              Host unforgettable celebrations in our intimate private spaces. Each room features bespoke décor, 
              dedicated service staff, and customizable menus tailored to your occasion—from corporate gatherings 
              to milestone celebrations.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-neutral-400 text-sm font-light">Seats 8-24 guests</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-neutral-400 text-sm font-light">Custom menu design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-neutral-400 text-sm font-light">Sommelier service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-neutral-400 text-sm font-light">AV equipment available</span>
              </div>
            </div>
            <button className="self-start px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-light tracking-wide transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-600/20">
              Inquire About Private Events
            </button>
          </div>
          <div className="md:col-span-2 relative h-80 md:h-auto overflow-hidden order-1 md:order-2">
            <Image 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop" 
              width={800} 
              height={600} 
              alt="Elegant private dining room with intimate ambiance"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-900/60"></div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom decorative element */}
    <div className="mt-20 flex justify-center">
      <div className="flex items-center gap-4">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
        <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
      </div>
    </div>
  </div>
</section>
  );
}