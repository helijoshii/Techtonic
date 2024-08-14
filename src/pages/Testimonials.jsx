import React from 'react'
import TestimonialCard from '../components/TestimonialCard'
import testimonialsData from '../data/testimonialsData'
import Slider from "react-slick";


const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
    <>
        <div className='bg-[#fdfaed] container h-fit'>
  <div className="mx-auto py-8 bg-red-200"> {/* Added background color for visibility */}
    <Slider {...settings}>
      {testimonialsData.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          text={testimonial.text}
          name={testimonial.name}
          title={testimonial.title}
        />
      ))}
    </Slider>
  </div>
</div>
    </>
  )
}

export default Testimonials
