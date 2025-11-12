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
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
      </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
    </div>
  </div>
</section>
    );
      }

  return (
    <form onSubmit={handleSubmit}>
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
  <div className="max-w-2xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
        <p className="text-sm font-semibold text-amber-400">Elevate Your Dining Experience</p>
      </div>
      <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Let&apos;s Create Magic Together</h2>
      <p className="text-lg text-slate-400">Tell us about your restaurant vision and we&apos;ll craft the perfect experience</p>
    </div>

    {/* Form Fields */}
    <div className="space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
      
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-white mb-3 tracking-wide">Full Name</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Chef Auguste Beaumont"
          required
          className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-white mb-3 tracking-wide">Email Address</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="hello@restaurantname.com"
          required
          className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3 tracking-wide">Phone Number</label>
        <input 
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          required
          className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-3 tracking-wide">Tell Us Your Story</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Share your restaurant concept, cuisine style, location, and how we can help bring your culinary vision to life..."
          required
          className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 resize-none backdrop-blur-sm"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-8 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-400/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 tracking-wide"
      >
        {isSubmitting ? "Sending Your Message..." : "Reserve Your Consultation"}
      </button>

      {/* Footer Note */}
      <p className="text-xs text-slate-400 text-center pt-4 border-t border-white/10">
        We typically respond within 24 hours during business hours. Your information is secure and never shared.
      </p>
    </div>
  </div>
</section>
    </form>
  );
}