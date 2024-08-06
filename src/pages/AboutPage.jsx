import React from 'react';
import { FaPalette, FaCode, FaAward, FaLaptopCode } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <h2 className="text-2xl font-semibold mb-6">Graphic Designer and Web Developer</h2>
      <div className="max-w-2xl">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-start">
            <FaPalette className="w-8 h-8 mr-4 text-blue-500" />
            <p>
              Hey there! I’m Esmee, a passionate and creative individual with a deep love for design, particularly in digital and UX/UI design. I graduated from Nottingham Trent University in 2023 with a 2.1 degree in Graphic Design, where I cultivated a strong foundation in visual communication and design principles.
            </p>
          </div>
          <div className="flex items-start">
            <FaCode className="w-8 h-8 mr-4 text-green-500" />
            <p>
              Throughout my university years, I discovered a profound interest in designing visually compelling websites and user interfaces. The thrill of translating intricate design concepts into functional code sparked a new passion in me, leading me to delve into the world of web development. This transition was not just a career shift but a natural progression that allowed me to blend my design expertise with technical skills.
            </p>
          </div>
          <div className="flex items-start">
            <FaAward className="w-8 h-8 mr-4 text-red-500" />
            <p>
              Recently, I completed an award-winning, intensive 40-hour-per-week technical training program in web development. This program was a transformative experience that expanded my skill set and deepened my understanding of both front-end and back-end development. It reinforced my commitment to creating engaging, user-friendly digital experiences and provided me with hands-on experience in building responsive and interactive web applications.
            </p>
          </div>
          <div className="flex items-start">
            <FaLaptopCode className="w-8 h-8 mr-4 text-yellow-500" />
            <p>
              In my journey as both a designer and developer, I am continuously honing my skills to bridge the gap between aesthetics and functionality. I am currently focused on refining my abilities in both design and development, eagerly working on projects that transform innovative design concepts into seamless and interactive websites and applications.
            </p>
          </div>
          <div className="flex items-start">
            <FaLaptopCode className="w-8 h-8 mr-4 text-purple-500" />
            <p>
              My goal is to merge the best of both worlds: crafting websites and user interfaces that are not only visually stunning but also function flawlessly. By combining my design sensibilities with my technical expertise, I aim to create digital experiences that are intuitive, engaging, and effective.
            </p>
          </div>
          <div className="flex items-start">
            <FaLaptopCode className="w-8 h-8 mr-4 text-teal-500" />
            <p>
              I am excited about the future and the opportunities to apply my skills in new and challenging projects. Whether it’s through designing elegant interfaces or developing robust web applications, I am committed to making a meaningful impact in the digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
