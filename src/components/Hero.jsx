import React from 'react';
import Home from '../assets/Home.png';

const Hero = () => {
  return (
    <>
    <div className='container py-[190px] '>
        <div className='flex flex-row justify-between pb-48'>
            <div className='max-w-[500px]' >
                <p className='text-5xl font-bold'>Unlock Your Potential with Expert Mentoring</p>
                <p className='text-xl text-custom-grey pt-5 font-medium pb-10'>Connecting Students with Mentors for Success in Academics and Beyond</p>
                <button className=' bg-[#131416] text-white rounded-full py-4 px-6 flex items-center justify-center'>Start learning now</button>
            </div>
            <div>
                <img src={Home}  alt="Home"/>
            </div>
        </div>

        <div className=' border-black border-y-2 py-12 flex items-center justify-between'>
            <div className='flex gap-20 font-semibold'>
                <div>
                <p className=' text-5xl'>320 </p>
                <span className='text-sm text-custom-grey'>Lessons</span>
                </div>
                <div>
                <p className=' text-5xl'>112 </p>
                <span className='text-sm text-custom-grey'>Hours of learning</span>
                </div>
                <div>
                <p className=' text-5xl'>24 </p>
                <span className='text-sm text-custom-grey'>Series</span>
                </div>
                
            </div>
            <div className='flex gap-16 pr-5 text-xl font-semibold'>
                <p>CSS</p>
                <p>TailwindCSS</p>
                <p>Javascript</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
