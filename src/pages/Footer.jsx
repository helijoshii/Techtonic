import React from 'react'

const Footer = () => {
  return (
    <>
        <div>
            <div className='bg-[#fcd75f]'>
                <div className='h-fit py-[120px] flex flex-col items-center justify-center gap-4'>
                    <p className='text-xl text-custom-grey font-bold font-sans'>Start Learning Today!</p>
                    <p className='text-base text-custom-grey max-w-[500px] text-center'> Dive into web development with our expert courses. Begin your journey to becoming a skilled frontend developer now.
                    </p>
                    <button className=' bg-[#131416] text-white rounded-full font-semibold py-4 px-6 flex items-center justify-center hover:bg-transparent hover:text-gray-500 hover:border hover:font-medium hover:border-gray-500 '>Start Learning Now</button>
                </div>
            </div>
            <div className='bg-black '>
                <div className='container text-white flex gap-48 py-24'>

                <div>
                <h4 className='font-bold text-xl pb-3'>Learn</h4>
                    <ul>
                        <li>Introduction</li>
                        <li>Working with data</li>
                        <li>Validating</li>
                        <li>Testing</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-xl pb-3'>Learn</h2>
                    <ul>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>Introduction</li>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>Web Designing</li>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>TailwindCSS</li>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>Javascript</li>
                    </ul>
                </div>
                <div>
                <h4 className='font-bold text-xl pb-3 text-center'>About</h4>
                    <ul className='text-center '>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>About us</li>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>Certificate</li>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>Testimonials</li>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>Get in touch</li>
                    </ul>
                </div>
                <div>
                <h4 className='font-bold text-xl pb-3'>Reach us</h4>
                    <ul>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>Linked in</li>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>Mail</li>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>Testimonials</li>
                        <li className='hover:text-[#fcd75f] cursor-pointer'>Get in touch</li>
                    </ul>
                </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer
