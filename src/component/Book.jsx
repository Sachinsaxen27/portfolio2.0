import React, { useState } from 'react'
import leaf from '../assets/leaf.png'
import DecryptedText from './Effect/DecryptedText'
function Book() {
    const [leafmean, setmyleafmean] = useState(false)
    return (
        <>
            <div className='m-auto flex justify-center '>
                <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,#120000,#000000)]">
                    <div
                        className="relative w-125 h-170 rounded-2xl bg-linear-to-br from-black via-[#0b0b0b] to-[#120000] border border-red-900/40  flex flex-col items-center justify-center shadow-[46px_-1px_20px_-14px_rgb(255,255,255)]"
                        // 40px 0px 7px -3px #ffffff;
                        // className="relative w-125 h-170 rounded-2xl bg-linear-to-br from-black via-[#0b0b0b] to-[#120000] border border-red-900/40 shadow-[0_0_30px_rgba(217,13,13,0.5),inset_0_0_25px_rgba(255,0,0,0.25)] flex flex-col items-center justify-center"
                    >
                        <div className="text-[104px] text-red-700  mb-6 flex items-center justify-center">
                            {/* ♣ */}
                            <div
                                className="relative inline-block cursor-pointer"
                                onMouseEnter={() => setmyleafmean(true)}
                                onMouseLeave={() => setmyleafmean(false)}
                            >
                                <img
                                    src={leaf}
                                    alt="Five leaf clover"
                                    className="w-36"
                                />
                                {leafmean && (
                                    <div
                                        className={`absolute inset-0 pointer-events-none text-xs font-medium text-red-600`}
        >
                                        {/* Top */}
                                        {/* <span className="absolute -top-5 left-1/2 -translate-x-1/2 "> */}
                                        <span className="absolute -top-5 left-1/2 -translate-x-1/2
        transition-all duration-300 delay-0
        opacity-100 translate-y-0">
                                            Power
                                        </span>

                                        {/* Left */}
                                        <span className="absolute top-1/3 -left-7 -translate-y-1/2">
                                            Skills
                                        </span>
                                        <span className="absolute top-1/3 -right-7 -translate-y-1/2">
                                            Logic
                                        </span>
                                        <span className="absolute -bottom-1 right-[84%]">
                                            Creation
                                        </span>
                                        <span className="absolute -bottom-1 left-[83%]">
                                            Discipline
                                        </span>
                                    </div>
                                )}
                            </div>

                        </div>

                        {/* Title */}
                        <div className="text-xs tracking-[0.35em] text-red-800 opacity-80">
                            <div className='text-xl font-bold'>
                                <DecryptedText
                                    text=" The Developer’s Grimoire"
                                    animateOn="view"
                                    revealDirection="start"
                                    sequential
                                    useOriginalCharsOnly={false}
                                />
                            </div>
                        </div>

                        {/* Glow overlay */}
                        <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[inset_0_0_40px_rgba(255,0,0,0.15)]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book
