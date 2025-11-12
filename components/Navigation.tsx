'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950/95 backdrop-blur-md border-b border-amber-500/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 md:h-20">
      {/* Logo/Brand */}
      <div className="flex items-center gap-3 group">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
          <svg className="w-6 h-6 md:w-7 md:h-7 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white tracking-tight">Restaurant Business</h1>
          <p className="text-xs md:text-sm text-amber-500/80 font-medium">Excellence in Hospitality</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-slate-300 hover:text-amber-500 font-medium text-sm transition-colors duration-200 relative group">
          Home
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>
        <a href="#menu" className="px-4 py-2 text-slate-300 hover:text-amber-500 font-medium text-sm transition-colors duration-200 relative group">
          Menu
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
        <a href="#contact" className="px-4 py-2 text-slate-300 hover:text-amber-500 font-medium text-sm transition-colors duration-200 relative group">
          Contact
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
      </div>

      {/* CTA Button + Mobile Menu */}
      <div className="flex items-center gap-3">
        <button className="hidden sm:px-6 sm:py-2 sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-sm rounded-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105">
          Reserve Table
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2.5 text-slate-300 hover:text-amber-500 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Accent Line */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
</nav>
  );
}