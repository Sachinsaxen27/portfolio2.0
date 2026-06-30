import React, { useEffect, useState } from 'react'
import GlitchText from './Effect/GlitchText'
function Welcome() {
    const [width, setwidth] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            setwidth(100);
        }, 100);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <div className='relative top-25vh flex flex-col justify-center items-center min-h-screen bg-black'>
                <GlitchText
                    speed={1}
                    enableShadows
                    enableOnHover={false}
                    // className='custom-class cursor-target'
                >
                    Welcome to My Portfolio
                </GlitchText>
                <div className='border w-full border-gray-500 h-2 rounded-2xl'>
                    <div className=' h-2.25 rounded-2xl bg-linear-to-r from-purple-500 via-pink-500 to-blue-500   transition-all duration-2000 ease-in-out' style={{ width: `${width}%` }}></div>
                </div>
            </div>
        </>
    )
}

export default Welcome
