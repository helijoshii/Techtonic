import React from 'react'


const Navbar = () => {
  return (
    <>
        <div className='container flex justify-between py-10'>
            <div className='flex gap-14 max-h-full text-l  cursor-pointer'>
                <img src='/public/vite.svg' className='size-7'/>
                <div className='text-gray-600 text-md hover:text-black font-semibold'>Home</div>
                <div className='text-gray-600 text-md hover:text-black font-semibold'>Lessons</div>
                <div className='text-gray-600 text-md hover:text-black font-semibold'>About</div>
                <div className='text-gray-600 text-md hover:text-black font-semibold'>Contact</div>
            </div>

            <div>
                <button className=' bg-[#131416] text-white rounded-full py-4 px-6 flex items-center justify-center hover:bg-transparent hover:text-gray-500 hover:border hover:font-medium hover:border-gray-500 '>Get Started</button>
            </div>
        </div>
    </>
  )
}

export default Navbar
