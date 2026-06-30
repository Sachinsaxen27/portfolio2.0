import React from 'react'
import icon from '../assets/gitlab.svg'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

function Footer() {
    const navLinks = [{ label: 'Home', to: '/' },
    { label: 'About Me', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },]

    return (
        <div className="relative z-10 w-full">

            {/* Glowing divider */}
            <div className="w-11/12 md:w-3/4 mx-auto h-px bg-linear-to-r from-transparent via-purple-400/80 to-transparent mb-8 md:mb-10" />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10 md:mb-12 px-4">
                <button className="px-6 py-2.5 rounded-full border border-white/30 text-white text-sm font-semibold
                    bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50
                    transition-all duration-300 cursor-pointer shadow-lg w-full sm:w-auto">
                    Get in Touch
                </button>
                <button className="px-6 py-2.5 rounded-full border border-purple-400/80 text-white text-sm font-semibold
                    bg-purple-600/40 backdrop-blur-md hover:bg-purple-600/60 hover:border-purple-300
                    transition-all duration-300 cursor-pointer shadow-lg shadow-purple-900/40 w-full sm:w-auto">
                    View Projects
                </button>
            </div>

            {/* Main Footer Content */}
            <div className="w-11/12 md:w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 pb-8 md:pb-10">

                {/* Brand Column — full width on mobile, spans 2 cols on sm */}
                <div className="flex flex-col gap-4 text-start p-5 sm:col-span-2 md:col-span-1
                   ">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-xl bg-purple-500/30 border border-purple-400/40">
                            <img src={icon} alt="Logo" className="w-8 h-8" />
                        </div>
                        <span className="text-white font-bold text-base tracking-wide drop-shadow-lg">
                            Sachin Saxena
                        </span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed font-medium">
                        Full Stack Engineer crafting modern, performant web experiences with clean code and bold design.
                    </p>

                </div>

                {/* Navigate Column */}
                <div className="flex flex-col gap-3 text-start p-5
                   ">
                    <p className="text-purple-300 font-bold text-sm tracking-widest uppercase mb-2 drop-shadow-md">
                        Navigate
                    </p>
                    <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5">
                        {navLinks.map(({ label, to }) => (
                            <li key={label}>
                                <Link to={to}
                                    className="text-white/80 text-sm font-medium hover:text-purple-300
                                    transition-colors duration-200 flex items-center gap-1 group w-fit">
                                    {label}
                                    <HiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Connect Column */}
                <div className="flex flex-col gap-3 text-start p-5
                   ">
                    <p className="text-purple-300 font-bold text-sm tracking-widest uppercase mb-2 drop-shadow-md">
                        Connect
                    </p>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a href="#" className="flex items-center gap-3 text-white/80 text-sm font-medium
                                hover:text-purple-300 transition-colors duration-200 group w-fit">
                                <span className="p-2 rounded-lg bg-white/10 border border-white/15
                                    group-hover:bg-purple-500/30 group-hover:border-purple-400/50 transition-all duration-200">
                                    <SiGithub className="text-sm text-white" />
                                </span>
                                GitHub
                                <HiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-3 text-white/80 text-sm font-medium
                                hover:text-purple-300 transition-colors duration-200 group w-fit">
                                <span className="p-2 rounded-lg bg-white/10 border border-white/15
                                    group-hover:bg-purple-500/30 group-hover:border-purple-400/50 transition-all duration-200">
                                    <FaLinkedinIn className="text-sm text-white" />
                                </span>
                                LinkedIn
                                <HiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </a>
                        </li>
                    </ul>


                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-11/12 md:w-3/4 mx-auto">
                <div className="h-px bg-linear-to-r from-transparent via-purple-400/60 to-transparent mb-5" />
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pb-8
                    text-white/60 text-xs font-medium text-center">
                    <span>© 2025 Sachin Saxena. All rights reserved.</span>
                    <span className="text-purple-300/70">Built with React & Tailwind</span>
                </div>
            </div>

        </div>
    )
}

export default Footer