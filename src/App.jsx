import './App.css'
import HTMLFlipBook from 'react-pageflip'
// import BookCover from './component/BookCover'
import HeroSection from './component/HeroSection'
import Book from './component/Book'
import SplashCursor from './component/Splashcursor'
import TargetCursor from './component/Effect/TargetCursor'
import { useEffect, useState } from 'react'
import Welcome from './component/Welcome'
import Navbar from './component/Navbar'
import SkillsSection from './component/SkillsSection'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import AboutMe from './component/AboutMe'
import ScrollToTop from './component/ScrollToTop'
import Contact from './component/Contact'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  })
  return (
    <>
      {/* <SplashCursor /> */}
      <div className='hidden lg:block'>
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
      </div>
      {/* <Book /> */}
      {isLoading ? <Welcome /> :
        <>
          <Router>
            <ScrollToTop/>
            <div className='fixed top-0 left-0 w-full z-50  '>
              <Navbar />
            </div>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route exact path='/about' element={<AboutMe/>}/> 
              <Route exact path="/skills" element={<SkillsSection />} />
              <Route exact path='/contact' element={<Contact/>}/>
            </Routes>
          </Router>
        </>
      }

    </>
  )
}

export default App
