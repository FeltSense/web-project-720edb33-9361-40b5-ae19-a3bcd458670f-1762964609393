import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 overflow-hidden">
  {/* Ambient overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
  
  {/* Decorative elements */}
  <div className="absolute top-20 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
      
      {/* Left Content */}
      <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
        {/* Decorative line */}
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-light">
            Culinary Excellence
          </span>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight">
          An Evening of
          <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent animate-shimmer">
            Exquisite Flavors
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Experience the artistry of Michelin-starred cuisine crafted from seasonal, locally sourced ingredients. Each dish tells a story of passion, precision, and culinary innovation.
        </p>

        {/* Feature highlights */}
        <div className="grid sm:grid-cols-3 gap-4 pt-4">
          <div className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <div className="text-amber-400 text-2xl mb-2">★</div>
            <div className="text-white font-medium text-sm">Michelin-Starred</div>
            <div className="text-slate-400 text-xs">Chef Excellence</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <div className="text-amber-400 text-2xl mb-2">🍷</div>
            <div className="text-white font-medium text-sm">500+ Bottles</div>
            <div className="text-slate-400 text-xs">Curated Selection</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
            <div className="text-amber-400 text-2xl mb-2">🌿</div>
            <div className="text-white font-medium text-sm">Farm to Table</div>
            <div className="text-slate-400 text-xs">Local & Seasonal</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Reserve Your Table
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button className="px-8 py-4 bg-transparent border-2 border-amber-400/50 text-amber-400 font-medium rounded-full hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-300">
            View Tasting Menu
          </button>
        </div>

        {/* Trust indicator */}
        <div className="flex items-center justify-center lg:justify-start gap-3 pt-8 text-slate-400 text-sm">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-slate-900"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 border-2 border-slate-900"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-slate-900"></div>
          </div>
          <span>Celebrating 500+ memorable dining experiences this year</span>
        </div>
      </div>

      {/* Right Content - Image Showcase */}
      <div className="order-1 lg:order-2 relative">
        {/* Main image container with elegant frame */}
        <div className="relative group">
          {/* Decorative corners */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-amber-400/60"></div>
          <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-amber-400/60"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-amber-400/60"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-amber-400/60"></div>
          
          {/* Main hero image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
            <Image 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
              width={800}
              height={1000}
              alt="Elegantly plated fine dining dish with artistic presentation"
              className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating info card */}
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-serif text-xl mb-1">Tonight&apos;s Featured</h3>
                  <p className="text-amber-300 text-sm">Seared Hokkaido Scallops</p>
                  <p className="text-slate-300 text-xs mt-2 line-clamp-2">With black truffle, cauliflower purée & micro herbs</p>
                </div>
                <div className="text-right">
                  <div className="text-amber-400 text-2xl font-serif">$48</div>
                  <div className="text-slate-400 text-xs">per plate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side accent images */}
          <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-32 h-40 rounded-lg overflow-hidden shadow-xl opacity-80 hover:opacity-100 transition-opacity">
            <Image 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=400&auto=format&fit=crop"
              width={200}
              height={250}
              alt="Fine wine selection"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="hidden lg:block absolute -right-16 top-1/3 w-32 h-40 rounded-lg overflow-hidden shadow-xl opacity-80 hover:opacity-100 transition-opacity">
            <Image 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400&auto=format&fit=crop"
              width={200}
              height={250}
              alt="Artisan dessert presentation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 border-2 border-amber-400 rounded-full px-6 py-3 shadow-xl z-30">
          <div className="text-center">
            <div className="text-amber-400 font-serif text-lg">Open for Dinner</div>
            <div className="text-slate-300 text-xs">Tuesday - Saturday, 6PM - 11PM</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="flex flex-col items-center gap-2 text-amber-400/60">
      <span className="text-xs tracking-widest uppercase">Explore Menu</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</div>
  );
}