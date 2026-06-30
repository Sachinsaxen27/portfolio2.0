import React, { useRef, useState } from 'react'
import Lightfall from './Effect/Lightfall';
import '../component/CSS/TargetCursor.css'
import { HiOutlineMail, HiOutlineDeviceMobile } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import emailjs from '@emailjs/browser'
import PageTitle from './PageTitle';
function Contact() {
    const connect = [
        { icon: <HiOutlineMail />, label: "Email", value: 'saxenasachin186@gmail.com', link: 'mailto:saxenasachin186@gmail.com', color: '#A78BFA' },
        { icon: <HiOutlineDeviceMobile />, label: "Phone", value: '+91 7355547632', link: 'tel:+917355547632', color: '#34D399' },
        { icon: <SlSocialLinkedin />, label: "Linked", value: 'in/sachin-saxena', link: 'https://www.linkedin.com/in/sachin-saxena-429487239/', color: '#0A66C2' },
        { icon: <SiGithub />, label: "Github", value: 'sachinsaxe27', link: 'https://github.com/Sachinsaxen27', color: '#FFFFFF' },
    ]
    const [form, setform] = useState({ first_name: '', last_name: "", email: "", message: '' })
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(new Date().toLocaleTimeString(), form)
        const name = form.first_name + " " + form.last_name
        console.log('service:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
        console.log('template:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
        console.log('key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: name,
                email: form.email,
                message: form.message
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log("Email sent!", result.text);
                setform({
                    first_name: "",
                    last_name: "",
                    email: "",
                    message: ""
                })
            })
            .catch((error) => {
                console.error("Error:", error);
                console.error("Error:", error?.text);
            });
    };
    const handlechange = (e) => {
        const { name, value } = e.target
        setform((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <>
        <PageTitle title="Contact"/>
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

                <div className="relative z-10 flex   items-center justify-center gap-8 min-h-screen w-full text-white px-4 py-12">

                    <div
                        className={` bg-[rgba(20,10,60,0.75)] border border-[rgba(100,80,220,0.60)] shadow-[0_0_16px_rgba(80,60,200,0.3)] rounded-xl p-4 w-fit`}
                    >
                        <div className="flex flex-col  items-start gap-1 mb-3">
                            <span className="bg-linear-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-light text-4xl">Get in touch</span>
                            <p className='mt-2 bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent'>The fastest way is email. I reply within a working day.</p>
                        </div>
                        <div className="flex flex-wrap flex-col gap-2 justify-center md:justify-start">
                            {connect?.map(({ icon, label, value, link, color }) => {
                                const content = (
                                    <div className='flex items-center gap-2 rounded-xl border border-white/10
            bg-black/30 px-5 py-4 hover:bg-white/10 transition-colors'>
                                        <div className='p-2.5 bg-black/80 rounded-lg' style={{ color }}>
                                            {icon}
                                        </div>
                                        <div>
                                            <p className='text-[#61DAFB] font-semibold text-sm sm:text-base text-start'>{label}</p>
                                            <p className='text-gray-400 text-xs'>{value}</p>
                                        </div>
                                    </div>
                                )

                                return link ? (
                                    <Link to={link} key={label} target='_blank' rel="noopener noreferrer">
                                        {content}
                                    </Link>
                                ) : (
                                    <div key={label} className="cursor-default">
                                        {content}
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    {/* User Connect Form */}
                    <div
                        className={` bg-[rgba(20,10,60,0.75)] border border-[rgba(100,80,220,0.60)] shadow-[0_0_16px_rgba(80,60,200,0.3)] rounded-xl p-4 w-fit`}
                    >

                        <div className="flex flex-wrap flex-col gap-2 justify-center md:justify-start">
                            <form onSubmit={handleFormSubmit}>
                                <div className='flex gap-2 mt-4'>
                                    <div className='flex flex-col text-start gap-2'>
                                        <label htmlFor="firstname">First Name</label>
                                        <input type="text" id='firstname' name='first_name' value={form.first_name} onChange={handlechange} className=' bg-black/50 p-2 rounded-sm' />
                                    </div>

                                    <div className='flex flex-col text-start gap-2'>
                                        <label htmlFor="lastname">last Name</label>
                                        <input type="text" id='lastname' value={form.last_name} name='last_name' onChange={handlechange} className=' bg-black/50 p-2 rounded-sm' />
                                    </div>
                                </div>
                                <div className='flex flex-col text-start gap-2 mt-4'>
                                    <label htmlFor="useremail">Email</label>
                                    <input type="text" id='useremail' value={form.email} name='email' onChange={handlechange} className=' bg-black/50 p-2 rounded-sm' />
                                </div>
                                <div className='flex flex-col text-start gap-2 mt-3'>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="usermessage" value={form.message} onChange={handlechange} className=' bg-black/50 p-2 rounded-sm resize-none' rows={5}></textarea>
                                </div>
                                <div className='text-start mt-3'>
                                    <button className="px-6 py-2.5 rounded-f border border-purple-400/80 text-white text-sm font-semibold
                    bg-purple-600/40 backdrop-blur-md hover:bg-purple-600/60 hover:border-purple-300
                    transition-all duration-300 cursor-pointer shadow-lg shadow-purple-900/40 w-full sm:w-auto flex gap-2 justify-center items-center cursor-target rounded-xl" type='submit' >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default Contact