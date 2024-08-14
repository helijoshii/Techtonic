import React from "react";
import Cards from "../components/Cards";
import coursesData from "../data/coursesData";

const Courses = () => {
  return (
    <>
      <div className="container py-32 px-32">
        <div className="flex flex-col gap-5 items-center ">
          <p className="text-base uppercase font-bold">Courses</p>
          <p className="text-5xl font-bold">What You Will Learn</p>
          <p className="text-base font-medium max-w-[600px] text-center text-custom-grey">
          Dive into the world of web development with our courses, where you'll master the essentials of HTML, CSS, and JavaScript. Learn to efficiently design and develop responsive websites using Tailwind CSS, and bring your projects to life with dynamic, interactive features.


          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coursesData.map((course, index) => (
          <Cards
            key={index}
            image={course.image}
            title={course.title}
            lessons={course.lessons}
            hours={course.hours}
            description={course.description}
          />
        ))}

        </div>


        <div className="py-36">
          <div className="items-center flex flex-col">
            <p  className="text-5xl font-bold">Become Pro in 30 Days</p>
            <p className="text-base pt-5 font-normal text-center max-w-[600px] text-custom-grey">Learn to craft the structure and style of webpages using HTML and CSS. Develop a solid foundation that will enable you to build responsive, beautiful websites.</p>
          </div>

          <div className="flex items-center gap-32 pt-28">
            <div >
              <p className="font-semibold text-3xl">HTML & CSS Development</p>
              <p className="max-w-72 text-base pt-5 font-normal text-center text-custom-grey">Sed pellentesque eget quis amet amet, proin sed sagittis in ligula semper cursus amet, ullamcorper volutpat rutrum.</p>
            </div>
            <div>
              <p className="font-semibold text-3xl">Tailwind CSS Mastery</p>
              <p className="max-w-72 text-base pt-5 font-normal text-center text-custom-grey">Streamline your design process with Tailwind CSS. Discover how to create highly customizable and efficient designs that work seamlessly across all devices.</p>
            </div>
            <div >
              <p className="font-semibold text-3xl">JavaScript Programming</p>
              <p className="max-w-72 text-base pt-5 font-normal text-center text-custom-grey">Bring interactivity and dynamism to your websites with JavaScript. Learn the essentials of JavaScript programming to enhance user experience and functionality.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
