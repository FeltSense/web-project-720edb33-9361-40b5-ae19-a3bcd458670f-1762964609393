'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Company Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Restaurant Business</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Elevating culinary excellence through innovative dining experiences and exceptional service standards.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#facebook" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#twitter" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 002.856-3.515 10.009 10.009 0 01-2.8.856 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#instagram" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </a>
          <a href="#linkedin" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
        <ul className="space-y-2">
          <li>
            <a href="#menu" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Menu & Cuisine
            </a>
          </li>
          <li>
            <a href="#reservations" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Reservations
            </a>
          </li>
          <li>
            <a href="#catering" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Catering & Events
            </a>
          </li>
          <li>
            <a href="#delivery" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Delivery & Takeout
            </a>
          </li>
          <li>
            <a href="#loyalty" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Loyalty Program
            </a>
          </li>
        </ul>
      </div>

      {/* Company Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              About Us
            </a>
          </li>
          <li>
            <a href="#team" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Our Team
            </a>
          </li>
          <li>
            <a href="#careers" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Careers
            </a>
          </li>
          <li>
            <a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Blog & Stories
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <a href="mailto:hello@restaurantbusiness.com" className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium">
              hello@restaurantbusiness.com
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Phone</p>
            <a href="tel:+1234567890" className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium">
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Address</p>
            <p className="text-white text-sm font-medium">
              123 Culinary Lane<br/>
              Gourmet District<br/>
              City, State 12345
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Hours</p>
            <p className="text-white text-sm font-medium">
              Tue-Thu: 5PM - 11PM<br/>
              Fri-Sat: 5PM - 12AM<br/>
              Sun: 5PM - 10PM
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="mt-12 pt-8 border-t border-gray-800">
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">
          © 2025 Restaurant Business. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Privacy Policy
          </a>
          <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Terms of Service
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}