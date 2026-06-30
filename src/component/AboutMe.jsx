import React from 'react'
import ProfileCard from './Effect/ProfileCard'
import profiilepic from '../assets/sachin.png'
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import Tailwind from '../assets/tailwindcss.svg'
import rest from '../assets/rest.png'
import Lightfall from './Effect/Lightfall';
import { FaFileDownload } from "react-icons/fa";
import resume from '../assets/ResumeEx_removed.pdf'
import Footer from './Footer';
import PageTitle from './PageTitle';
function AboutMe() {
    const handledownloadResume = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Sachin_Saxena_Resume.pdf';
        link.click();
    }
    return (
        <>
        <PageTitle title="About"/>
            <div className='relative min-h-screen w-full overflow-hidden'>
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

                <div className='relative z-10 flex flex-col items-center min-h-screen
                px-5 sm:px-8 md:px-16 py-24 md:py-16 gap-10 mt-12'>
                    <div className='text-start md:text-left
                    w-full md:max-w-5xl'>
                        <p className='bg-linear-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent text-sm'>&#8212; GET TO KNOW ME</p>
                        <h1 className='text-5xl font-extrabold text-transparent bg-clip-text
                    bg-linear-to-r from-white via-fuchsia-300 to-pink-500
                    drop-shadow-[0_0_20px_rgba(236,72,153,0.35)] text-start'>
                            About me
                        </h1>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center lg:items-start
                    justify-center gap-8 lg:gap-12 w-full max-w-6xl'>

                        <div className='w-fit shrink-0'>
                            <ProfileCard
                                name="Sachin Saxena"
                                title="Frontend Developer"
                                handle="sachincodes"
                                status="Online"
                                contactText="Contact Me"
                                avatarUrl={profiilepic}
                                showUserInfo={false}
                                enableTilt={true}
                                enableMobileTilt={false}
                                onContactClick={() => console.log('Contact clicked')}
                                behindGlowColor="rgba(125, 190, 255, 0.67)"
                                iconUrl="/assets/demo/iconpattern.png"
                                behindGlowEnabled
                                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                            />
                        </div>

                        {/* Glass card wrapping the bio so it doesn't fight the background */}
                        <div className='w-full max-w-2xl rounded-2xl border border-white/10
                        bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                        px-6 py-6 sm:px-8 sm:py-8'>

                            <p className='text-gray-200 text-base sm:text-lg leading-8 sm:leading-9
                            tracking-wide text-start'>
                                Hi, I'm Sachin — a passionate full-stack developer specializing in
                                building modern, scalable, and high-performance web applications.
                                I work with technologies like{" "}
                                <span className="text-sky-400 font-semibold">React</span>,{" "}
                                <span className="text-white font-semibold">Next.js</span>,{" "}
                                <span className="text-green-400 font-semibold">Node.js</span>, and{" "}
                                <span className="text-green-500 font-semibold">MongoDB</span> to
                                create seamless user experiences backed by efficient and reliable
                                systems.
                                <br /><br />
                                I enjoy crafting responsive and visually engaging interfaces using
                                Tailwind CSS, Bootstrap, and Material UI, while also focusing on
                                clean code and optimized performance. I'm always exploring new
                                tools and techniques to enhance both functionality and design.
                            </p>
                            {/* Skills */}
                            <div className='grid grid-cols-2  gap-x-6 gap-y-4 mt-6'>
                                <div className='flex flex-col items-start gap-2 rounded-xl border border-white/10
     bg-black/30 px-5 py-4 hover:bg-white/10 transition-colors'>
                                    <FaReact className='text-[#61DAFB]' size={22} />
                                    <p className='text-[#61DAFB] font-semibold text-sm sm:text-base text-start'>React.Js & Next.Js</p>
                                    <p className='text-gray-400 text-xs'>Building dynamic UIs</p>
                                </div>

                                <div className='flex flex-col items-start gap-2 rounded-xl border border-white/10
     bg-black/30 px-5 py-4 hover:bg-white/10 transition-colors'>
                                    <IoLogoNodejs className='text-green-500' size={22} />
                                    <p className='text-green-500 font-semibold text-sm sm:text-base text-start'>Node.Js</p>
                                    <p className='text-gray-400 text-xs'>Server-side logic</p>
                                </div>

                                <div className='flex flex-col items-start gap-2 rounded-xl border border-white/10
     bg-black/30 px-5 py-4 hover:bg-white/10 transition-colors'>
                                    <img src={Tailwind} alt="Tailwind CSS" className='w-6 h-6' />
                                    <p className='text-[#38BDF8] font-semibold text-sm sm:text-base text-start'>Tailwind CSS</p>
                                    <p className='text-gray-400 text-xs'>Styling & design</p>
                                </div>

                                <div className='flex flex-col items-start gap-2 rounded-xl border border-white/10
     bg-black/30 px-5 py-4 hover:bg-white/10 transition-colors'>
                                    <img src={rest} alt='Rest API' className='h-6 w-6 object-cover' />
                                    <p className='text-blue-500 font-semibold text-sm sm:text-base text-start'>REST API</p>
                                    <p className='text-gray-400 text-xs'>Data integration</p>
                                </div>
                            </div>
                            {/* Button */}
                            <div className="flex flex-col sm:flex-row justify-start gap-3 sm:gap-4 mt-8">
                                <button className="px-6 py-2.5 rounded-full border border-purple-400/80 text-white text-sm font-semibold
                    bg-purple-600/40 backdrop-blur-md hover:bg-purple-600/60 hover:border-purple-300
                    transition-all duration-300 cursor-pointer shadow-lg shadow-purple-900/40 w-full sm:w-auto flex gap-2 justify-center items-center" onClick={handledownloadResume}>
                                    <FaFileDownload /> Download
                                </button>
                                <button className="px-6 py-2.5 rounded-full border border-white/30 text-white text-sm font-semibold
                    bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50
                    transition-all duration-300 cursor-pointer shadow-lg w-full sm:w-auto">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default AboutMe
