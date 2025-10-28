'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return
    const original = document.body.style.overflow
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = original || ''
    }
    return () => {
      document.body.style.overflow = original || ''
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card shadow-xl py-3 sm:py-4 backdrop-blur-xl'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-primary to-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all">
              A ONE
            </div>
            <span
              className={`font-bold text-lg sm:text-xl transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              MOVERS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation via Portal */}
        {isMobileMenuOpen && typeof document !== 'undefined' && createPortal(
          <>
            {/* Backdrop covering full viewport */}
            <div
              className="fixed inset-0 z-[100] md:hidden backdrop-blur-lg bg-black/5"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Dropdown panel above backdrop */}
            <div
              id="mobile-nav"
              className="fixed md:hidden z-[110] top-[72px] left-0 right-0 mx-4 rounded-2xl bg-white p-4 shadow-2xl border border-gray-200"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-2 py-3 rounded-lg font-semibold text-gray-800 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </>,
          document.body
        )}
      </div>
    </header>
  )
}
