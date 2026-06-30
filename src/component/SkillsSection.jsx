import React, { useRef } from 'react'
import LogoLoop from './Effect/LogoLoop'
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript,
  SiHtml5, SiBootstrap, SiRedux, SiMui, SiNodedotjs,
  SiMongodb, SiExpress, SiGit, SiGithub, SiVite, SiPostman
} from 'react-icons/si';
import Lightfall from './Effect/Lightfall'
import { SlScreenDesktop } from "react-icons/sl";
import '../component/CSS/TargetCursor.css'
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { CiCloudOn } from "react-icons/ci";
import { FcLinux } from "react-icons/fc";
import { PiWrench } from "react-icons/pi";
import api from '../assets/api.png'
import auth from '../assets/auth.png'
import './CSS/style.css'
import Footer from './Footer';
import PageTitle from './PageTitle';

const SkillCard = ({ icon, label }) => {
  return (
    <div
      className="flip-card cursor-pointer cursor-target"
      style={{ width: '62px', height: '62px', perspective: '600px' }}
    >
      <div
        className="flip-inner relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center bg-white/5 border border-purple-400/35"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-1 bg-purple-900/35 border border-purple-500/60"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            {icon}
          </div>
          <span className="text-[#f0ecff] text-[10px] font-medium text-center px-1 leading-tight">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

const SkillBox = ({ title, icon, skills, refProp, onMouseMove, className = '' }) => {
  return (
    <div
      ref={refProp}
      onMouseMove={onMouseMove}
      className={`skill-glow-box bg-[rgba(20,10,60,0.75)] border border-[rgba(100,80,220,0.60)] shadow-[0_0_16px_rgba(80,60,200,0.3)] rounded-xl p-4 ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-purple-500/20">
          <span className="text-purple-400 text-lg">{icon}</span>
        </div>
        <span className="text-[#e8e3ff] font-medium text-sm">{title}</span>
      </div>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </div>
  );
};

function SkillsSection() {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const toolsRef = useRef(null);

  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const techLogos = [
    { node: <span className="text-xl font-semibold">React.JS</span> },
    { node: <span className="font-semibold text-xl">Next.JS</span> },
    { node: <span className="font-semibold text-xl">Node.JS</span> },
    { node: <span className="font-semibold text-xl">JavaScript</span> },
    { node: <span className="font-semibold text-xl">MongoDB</span> },
    { node: <span className="font-semibold text-xl">Redux</span> },
    { node: <span className="font-semibold text-xl">RestAPI</span> },
  ];

  const frontendSkills = [
    { icon: <FaReact className="text-cyan-400  text-[28px]" />, label: 'React' },
    { icon: <SiNextdotjs className="text-white     text-[28px]" />, label: 'Next.JS' },
    { icon: <SiRedux className="text-[#764ABC] text-[28px]" />, label: 'Redux' },
    { icon: <SiTypescript className="text-[#3178C6] text-[28px]" />, label: 'TypeScript' },
    { icon: <SiJavascript className="text-[#F7DF1E] text-[28px]" />, label: 'JavaScript' },
    { icon: <SiHtml5 className="text-[#E34F26] text-[28px]" />, label: 'HTML5' },
    { icon: <IoLogoCss3 className="text-[#1572B6] text-[28px]" />, label: 'CSS' },
    { icon: <SiBootstrap className="text-[#7952B3] text-[28px]" />, label: 'Bootstrap' },
    { icon: <SiTailwindcss className="text-[#06B6D4] text-[28px]" />, label: 'Tailwind' },
    { icon: <SiMui className="text-[#007FFF] text-[28px]" />, label: 'Material UI' },
  ];

  const backendSkills = [
    { icon: <SiNodedotjs className="text-[#339933] text-[28px]" />, label: 'Node.JS' },
    { icon: <img src={api} alt="REST" className="w-7 h-7 object-contain" />, label: 'REST API' },
    { icon: <SiMongodb className="text-[#47A248] text-[28px]" />, label: 'MongoDB' },
    { icon: <SiExpress className="text-white    text-[28px]" />, label: 'Express' },
    { icon: <img src={auth} alt="JWT" className="w-7 h-7 object-contain" />, label: 'JWT' },
  ];

  const techSkills = [
    { icon: <SiGit className="text-[#F05032] text-[28px]" />, label: 'Git' },
    { icon: <SiGithub className="text-white     text-[28px]" />, label: 'GitHub' },
    { icon: <SiVite className="text-[#646CFF] text-[28px]" />, label: 'Vite' },
    { icon: <SiPostman className="text-[#FF6C37] text-[28px]" />, label: 'Postman' },
    { icon: <FcLinux className="text-[#333333] text-[28px]" />, label: 'Linux' },
  ];

  return (
    <>
    <PageTitle title='Skills'/>
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

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 min-h-screen w-full text-white px-4 py-12">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            My Skills
          </h1>

          <div className="w-full">
            <LogoLoop
              logos={techLogos}
              speed={75}
              direction="left"
              logoHeight={60}
              gap={60}
              className="border-t border-b border-purple-500/40 bg-white/5 backdrop-blur-sm"
            />
          </div>

          {/* Skills Grid */}
          <div className="w-full max-w-5xl flex flex-col gap-4">

            {/* Row 1 — Frontend (full width) + Backend (side) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <SkillBox
                title="Frontend"
                icon={<SlScreenDesktop />}
                skills={frontendSkills}
                refProp={frontendRef}
                onMouseMove={(e) => handleMouseMove(e, frontendRef)}
                className="md:col-span-2"
              />

              <SkillBox
                title="Backend"
                icon={<CiCloudOn />}
                skills={backendSkills}
                refProp={backendRef}
                onMouseMove={(e) => handleMouseMove(e, backendRef)}
                className="md:col-span-1"
              />

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Row 2 — Tools (full width) */}
              <SkillBox
                title="Tools & DevOps"
                icon={<PiWrench />}
                skills={techSkills}
                refProp={toolsRef}
                className="w-fit"
                onMouseMove={(e) => handleMouseMove(e, toolsRef)}
              />
              {/* <SkillBox
              title="Frontend"
              icon={<SlScreenDesktop />}
              skills={frontendSkills}
              refProp={frontendRef}
              onMouseMove={(e) => handleMouseMove(e, frontendRef)}
              className="md:col-span-2"
            /> */}
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SkillsSection;