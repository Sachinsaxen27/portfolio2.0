import React, { useState, useEffect } from 'react'
import '../component/CSS/TargetCursor.css'
import GradientText from './Effect/GradientText'
import { PiDotsThreeOutlineVertical } from "react-icons/pi"
import { IoCloseOutline } from "react-icons/io5"
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',           to: '/' },
  { label: 'About Me',       to: '/about' },
  { label: 'Skills',         to: '/skills' },
  { label: 'Projects',       to: '' },
  { label: 'Contact',to: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const location = useLocation()

  // Add glass effect on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setIsMenuOpen(false) }, [location])

  const isActive = (to) => location.pathname === to

  return (
    <nav className={`w-full z-50 transition-all duration-300
      ${scrolled
        ? 'bg-[rgba(10,5,40,0.85)] backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-900/20'
        : 'bg-transparent'}`}>

      {/* ── Desktop ── */}
      <div className="hidden lg:flex items-center justify-between px-10 py-4 max-w-7xl mx-auto">

        {/* Links */}
        <ul className="flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <Link to={to}>
                <button
                  className={`cursor-target px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200
                    ${isActive(to)
                      ? 'text-white bg-purple-500/20 border border-purple-400/30'
                      : 'text-white/70 hover:text-white hover:bg-white/8'}`}
                >
                  {label}
                </button>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact">
          <button className="cursor-target px-5 py-2 rounded-full text-sm font-semibold
            bg-linear-to-r from-purple-600 to-pink-500 text-white
            hover:opacity-90 hover:scale-105 transition-all duration-300
            shadow-md shadow-purple-500/30">
            Hire Me
          </button>
        </Link>

      </div>

      {/* ── Mobile ── */}
      <div className="lg:hidden">

        {/* Top bar */}
        <div className={`flex items-center justify-between px-4 py-3
          transition-all duration-300
          ${scrolled || isMenuOpen
            ? 'bg-[rgba(10,5,40,0.95)] backdrop-blur-md border-b border-purple-500/20'
            : 'bg-transparent'}`}>

          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
            className="text-lg font-bold tracking-wide"
          >
            Sachin Saxena
          </GradientText>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-xl bg-white/8 border border-white/10
              text-white hover:bg-purple-500/20 hover:border-purple-400/30
              transition-all duration-200"
          >
            {isMenuOpen
              ? <IoCloseOutline size={20} />
              : <PiDotsThreeOutlineVertical size={20} />}
          </button>
        </div>

        {/* Dropdown menu */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col px-4 py-3 gap-1
            bg-[rgba(10,5,40,0.97)] backdrop-blur-md border-b border-purple-500/20">

            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <Link to={to}>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                      transition-all duration-200
                      ${isActive(to)
                        ? 'text-white bg-purple-500/20 border border-purple-400/30'
                        : 'text-white/70 hover:text-white hover:bg-white/8 border border-transparent'}`}
                  >
                    {label}
                  </button>
                </Link>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="mt-2 pb-1">
              <Link to="/contact">
                <button className="w-full py-3 rounded-xl text-sm font-semibold
                  bg-linear-to-r from-purple-600 to-pink-500 text-white
                  hover:opacity-90 transition-all duration-300
                  shadow-md shadow-purple-500/30">
                  Hire Me
                </button>
              </Link>
            </li>

          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar