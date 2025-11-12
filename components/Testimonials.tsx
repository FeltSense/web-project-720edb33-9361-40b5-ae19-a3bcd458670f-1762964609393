import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-white to-stone-50 py-24 overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-block mb-4">
        <div className="flex items-center gap-1 text-amber-600">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 tracking-tight">
        Moments Worth Savoring
      </h2>
      <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
        Every evening tells a story. Here are a few from our cherished guests.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Testimonial 1 */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full filter blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-0.5 text-amber-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-6 italic">
            "The 7-course tasting menu was nothing short of extraordinary. Each dish told a story—the seared scallops with truffle foam was so delicate it melted on my tongue. We celebrated our 25th anniversary here, and the sommelier paired a 2015 Burgundy that elevated the entire experience. Worth every moment of the two-month wait for our reservation."
          </p>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces" 
                width={56} 
                height={56} 
                alt="Margaret Chen"
                className="rounded-full object-cover ring-2 ring-amber-100"
              />
            </div>
            <div>
              <p className="font-semibold text-stone-900">Margaret Chen</p>
              <p className="text-sm text-stone-500">Anniversary Dinner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 relative overflow-hidden lg:translate-y-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full filter blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-0.5 text-amber-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-6 italic">
            "We hosted our corporate dinner for 18 in the private dining room, and it exceeded all expectations. The chef personally came out to explain his inspiration behind the seasonal menu. The braised short rib with bone marrow reduction had our CEO asking for the recipe. Professional service, impeccable timing between courses, and the ambiance sealed a $2M deal for us."
          </p>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces" 
                width={56} 
                height={56} 
                alt="James Rodriguez"
                className="rounded-full object-cover ring-2 ring-amber-100"
              />
            </div>
            <div>
              <p className="font-semibold text-stone-900">James Rodriguez</p>
              <p className="text-sm text-stone-500">Private Event Host</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full filter blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-0.5 text-amber-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-6 italic">
            "As a food critic who&apos;s dined at 3-Michelin-star restaurants across Europe, I was skeptical. But the duck confit with cherry gastrique was executed with such precision—the skin crackled perfectly, and the meat fell off the bone. The attention to plating details, from the edible flowers to the microgreens, shows a chef who truly respects the craft. I&apos;ve returned four times in three months."
          </p>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces" 
                width={56} 
                height={56} 
                alt="Sophia Beaumont"
                className="rounded-full object-cover ring-2 ring-amber-100"
              />
            </div>
            <div>
              <p className="font-semibold text-stone-900">Sophia Beaumont</p>
              <p className="text-sm text-stone-500">Food Critic & Columnist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 relative overflow-hidden md:col-span-2 lg:col-span-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full filter blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-0.5 text-amber-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-6 italic">
            "My wife has a severe shellfish allergy, and the staff went above and beyond to ensure her safety. The chef prepared a completely separate tasting menu for her with alternative proteins, each dish just as stunning as the original menu. The lobster bisque was transformed into a mushroom velouté that was equally rich and complex. This level of care is rare and deeply appreciated."
          </p>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces" 
                width={56} 
                height={56} 
                alt="David Park"
                className="rounded-full object-cover ring-2 ring-amber-100"
              />
            </div>
            <div>
              <p className="font-semibold text-stone-900">David Park</p>
              <p className="text-sm text-stone-500">Regular Guest</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 5 - Featured */}
      <div className="group bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden md:col-span-2 lg:translate-y-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-0.5 text-amber-200 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          <p className="text-white text-lg leading-relaxed mb-8 italic">
            "I proposed to my girlfriend here last month, and the staff made it magical beyond words. They coordinated with me for three weeks—from hiding the ring in a custom dessert presentation to having our song playing softly in the background. The chocolate soufflé arrived with &apos;Will you marry me?&apos; written in gold leaf. She said yes, and we&apos;re planning our wedding reception in their event space. It&apos;s not just a restaurant; it&apos;s where our forever began."
          </p>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces" 
                width={64} 
                height={64} 
                alt="Michael Torres"
                className="rounded-full object-cover ring-4 ring-white/30"
              />
            </div>
            <div>
              <p className="font-semibold text-white text-lg">Michael Torres</p>
              <p className="text-amber-100">Engagement Celebration</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center">
      <p className="text-stone-600 mb-6 font-light">Join our community of discerning diners</p>
      <button className="group inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
        Reserve Your Table
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</section>
  );
}