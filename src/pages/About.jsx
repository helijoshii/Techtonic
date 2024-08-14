import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-white from-10% via-[#fdecb1] via-30% to-white to-90% ...">
      <div className="text-black bg-gradient-to-r from-white from-10% via-[#fdecb1] via-60% to-white to-90% ...">
        <div className="py-16 px-8 text-center text-black">
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Welcome to our mentorship program dedicated to helping students
            master web development. We are passionate frontend developers with a
            shared goal of empowering the next generation of web designers and
            developers. Our mission is to provide high-quality, hands-on
            learning experiences that equip students with the skills they need
            to succeed in the tech industry.
          </p>
        </div>

        <div className="py-16 ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8">Meet the Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
              <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="path_to_heli_image.jpg"
                  alt="Heli Joshi"
                  className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Heli Joshi</h3>
                <p className="text-lg text-gray-600">
                  Founder and Frontend Developer
                  <br />
                  Heli Joshi is a skilled React.js developer with a passion for
                  crafting intuitive and dynamic web interfaces. With years of
                  experience in the industry, Heli brings a wealth of knowledge
                  and enthusiasm to our mentorship program.
                </p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="path_to_krishna_image.jpg"
                  alt="Krishna Thakar"
                  className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Krishna Thakar</h3>
                <p className="text-lg text-gray-600">
                  Co-Founder and Frontend Developer
                  <br />
                  Krishna Thakar is a dedicated React.js developer with a knack
                  for creating seamless and responsive web experiences.
                  Krishna’s expertise and commitment to education are key to our
                  program’s success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 pb-48 px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            At our core, we believe in making web development education
            accessible and engaging. Our mentorship program is designed to
            provide personalized guidance, practical skills, and real-world
            experience. We are committed to helping students achieve their goals
            and excel in the ever-evolving field of web development.
          </p>
        </div>

        <div className="bg-black text-white py-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            Have questions or want to learn more about our program? <br />
            Feel free to{" "}
            <a href="mailto:info@example.com" className="text-fcd75f underline">
              contact us
            </a>{" "}
            anytime.
          </p>
          <p>&copy; 2024 Web Development Mentorship Program</p>
        </div>
      </div>
    </div>
  );
};

export default About;
