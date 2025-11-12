'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project_id: '720edb33-9361-40b5-ae19-a3bcd458670f',  // NEW: Track which project this form belongs to
          website_id: '720edb33-9361-40b5-ae19-a3bcd458670f',  // Legacy support
          founder_id: 'null',    // NEW: Track project owner
          form_data: { ...formData, submitted_at: new Date().toISOString() }
        })
      });
      
      if (!response.ok) throw new Error('Form submission failed');
      
      console.log('✅ Form submitted successfully');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
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
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-neutral-800/40 backdrop-blur-sm border border-amber-700/30 rounded-2xl p-12 shadow-2xl">
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-600/30">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Message Sent!</h3>
              <p className="text-neutral-300 font-light">Thank you for reaching out. We&apos;ll get back to you soon.</p>
            </div>
          </div>
        </div>
      </section>
    );
      }

  return (
    <form onSubmit={handleSubmit}>
      <section className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 py-24 overflow-hidden">
        {/* Elegant background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
                  <span className="text-amber-600 tracking-[0.3em] text-sm font-light uppercase">Elevate Your Dining Experience</span>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 tracking-tight">Let&apos;s Create Magic Together</h2>
              <p className="text-neutral-300 text-lg leading-relaxed font-light">Tell us about your restaurant vision and we&apos;ll craft the perfect experience</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6 bg-neutral-800/40 backdrop-blur-sm border border-amber-700/30 hover:border-amber-600/50 transition-all duration-700 rounded-2xl p-8 md:p-12 shadow-2xl">
      
      {/* Name Field */}
      <div>
              <label htmlFor="name" className="block text-sm font-light text-white mb-3 tracking-wide uppercase">Full Name</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Chef Auguste Beaumont"
                required
                className="w-full px-5 py-3.5 bg-neutral-700/30 border border-amber-700/30 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 backdrop-blur-sm font-light"
              />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-light text-white mb-3 tracking-wide uppercase">Email Address</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="hello@restaurantname.com"
          required
          className="w-full px-5 py-3.5 bg-neutral-700/30 border border-amber-700/30 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 backdrop-blur-sm font-light"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-light text-white mb-3 tracking-wide uppercase">Phone Number</label>
        <input 
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          required
          className="w-full px-5 py-3.5 bg-neutral-700/30 border border-amber-700/30 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 backdrop-blur-sm font-light"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-light text-white mb-3 tracking-wide uppercase">Tell Us Your Story</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Share your restaurant concept, cuisine style, location, and how we can help bring your culinary vision to life..."
          required
          className="w-full px-5 py-3.5 bg-neutral-700/30 border border-amber-700/30 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 resize-none backdrop-blur-sm font-light"
        ></textarea>
      </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-8 bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-xl font-light text-lg hover:shadow-2xl hover:shadow-amber-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 tracking-wide"
              >
                {isSubmitting ? "Sending Your Message..." : "Reserve Your Consultation"}
              </button>

              {/* Footer Note */}
              <p className="text-xs text-neutral-400 text-center pt-4 border-t border-amber-700/30 font-light">
                We typically respond within 24 hours during business hours. Your information is secure and never shared.
              </p>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}