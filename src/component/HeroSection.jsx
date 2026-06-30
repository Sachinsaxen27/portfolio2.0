import React, { useEffect, useState } from 'react'
import Lightfall from './Effect/Lightfall'
import '../component/CSS/TargetCursor.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import PageTitle from './PageTitle'
const ROLES = ['Full Stack Engineer', 'React Developer', 'Node.js Developer', 'UI/UX Enthusiast']

function BookCover() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(c => c + 1)
      }, 80)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(c => c - 1)
      }, 40)
    } else {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % ROLES.length)
      setCharIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <>
      <PageTitle title="Home" />
      <div className="relative w-full min-h-screen overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <Lightfall
            colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
            backgroundColor="#0A29FF"
            speed={0.5}
            streakCount={2}
            streakWidth={1}
            streakLength={1}
            glow={1}
            density={0.6}
            twinkle={1}
            zoom={3}
            backgroundGlow={0.5}
            opacity={1}
            mouseInteraction
            mouseStrength={0.5}
            mouseRadius={1}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen
        px-5 sm:px-8 md:px-16 py-24 md:py-0">

          <div className="w-full max-w-6xl flex flex-col md:flex-row items-center
          justify-between gap-8 md:gap-12">

            {/* ── Left: Text ── */}
            <div className="flex flex-col gap-4 md:gap-5 text-center md:text-left
            w-full md:max-w-xl">

              {/* Open to Work badge */}
              <div className="flex justify-center md:justify-start">
                <span className="flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full
                border border-green-400/40 bg-green-500/10
                text-green-400 text-[11px] sm:text-xs font-semibold tracking-wide w-fit">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  Open to Work · Remote
                </span>
              </div>

              {/* // hello, i'm */}
              <p className="text-purple-400/80 text-sm md:text-base font-mono tracking-wide">
              // hello, i'm
              </p>

              {/* Name */}
              <h1 className="font-extrabold leading-tight
              text-4xl xs:text-5xl sm:text-6xl md:text-7xl">
                <span className="text-transparent bg-clip-text
                bg-linear-to-r from-orange-400 via-pink-400 to-purple-400">
                  Sachin
                </span>
                <br />
                <span className="text-transparent bg-clip-text
                bg-linear-to-r from-purple-400 via-cyan-400 to-blue-400">
                  Saxena
                </span>
              </h1>

              {/* Typewriter */}
              <div className="font-mono font-semibold text-orange-300
              flex items-center gap-1 justify-center md:justify-start
              h-7 sm:h-8 text-base sm:text-lg md:text-2xl">
                {displayed}
                <span className="w-0.5 h-5 sm:h-6 bg-orange-300 animate-pulse
                inline-block ml-0.5 shrink-0" />
              </div>

              {/* Description */}
              <p className="text-white/65 text-sm md:text-base leading-relaxed
              max-w-sm sm:max-w-md mx-auto md:mx-0">
                Full Stack Engineer based in India, building modern web experiences
                with React, Next.js & Node.js. Passionate about clean code, bold UI,
                and shipping products that matter.
              </p>

              {/* </> icon — mobile only */}
              <div className="flex md:hidden justify-center my-2">
                <div className="relative select-none">
                  <div className="absolute inset-0 rounded-full bg-purple-500/25
                  blur-2xl scale-150 pointer-events-none" />
                  <div
                    className="relative text-6xl sm:text-7xl font-extrabold leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #c084fc, #818cf8, #67e8f9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.75))',
                    }}
                  >
                    {'</>'}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row gap-3 justify-center
              md:justify-start mt-1 md:mt-2 w-full">
                <Link to='/about'>
                  <button
                    className=" cursor-pointer flex items-center justify-center gap-2
                px-6 py-3 rounded-xl w-full xs:w-auto
                bg-linear-to-r from-orange-500 to-pink-500
                text-white font-semibold text-sm
                hover:opacity-90 active:scale-95 hover:scale-105
                transition-all duration-300 shadow-lg shadow-orange-500/30"
                  >
                    <span>👤</span> About Me
                  </button>
                </Link>
                <button
                  className=" flex items-center justify-center gap-2
                  px-6 py-3 rounded-xl w-full xs:w-auto
                  border border-white/25 bg-white/8 backdrop-blur-sm
                  text-white font-semibold text-sm
                  hover:bg-white/15 hover:border-white/45
                  active:scale-95 hover:scale-105 transition-all duration-300"
                >
                  <span>👁️</span> View Work
                </button>
              </div>

            </div>

            {/* ── Right: 3D </> icon — desktop only ── */}
            <div className="hidden md:flex items-center justify-center shrink-0">
              <div className="relative select-none">
                <div className="absolute inset-0 rounded-full bg-purple-500/25
                blur-3xl scale-150 pointer-events-none" />
                <div
                  className="relative font-extrabold leading-none
                  text-[8rem] lg:text-[10rem] xl:text-[11rem]"
                  style={{
                    background: 'linear-gradient(135deg, #c084fc, #818cf8, #67e8f9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 32px rgba(139,92,246,0.75)) drop-shadow(0 12px 24px rgba(0,0,0,0.5))',
                  }}
                >
                  {'</>'}
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default BookCover