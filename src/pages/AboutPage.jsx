import TechnologiesBlock from '../components/TechnologiesBlock';
import { FaPalette, FaCode, FaLaptopCode, FaHtml5, FaCss3Alt, FaSass, FaPhp, FaReact, FaFigma, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiMysql, SiVite, SiAdobecreativecloud } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';

const technologies = [
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Adobe Creative Cloud', icon: <SiAdobecreativecloud /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'SASS (SCSS)', icon: <FaSass /> },
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Tailwind', icon: <RiTailwindCssFill /> },
  { name: 'Github', icon: <FaGithub /> },
];

const AboutPage = () => {
  return (
    <>
      <div className="bg-blue-600 text-white flex flex-col items-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <div className="flex items-center justify-center mb-8 flex-col md:flex-row">
          <FaPalette className="w-12 h-12 text-white mb-4 md:mb-0 md:mr-4" />
          <h2 className="text-2xl font-semibold mx-4">Graphic Designer and Web Developer</h2>
          <FaCode className="w-12 h-12 text-white mb-4 md:mb-0 md:ml-4" />
        </div>
        <div className="max-w-4xl w-full">
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col items-center md:flex-row md:items-start justify-between">
              <p className="text-lg text-center md:text-left">
                Hey there! I’m Esmee, a passionate and creative individual with a deep love for design, particularly in digital and UX/UI design. I graduated from Nottingham Trent University in 2023 with a 2.1 degree in Graphic Design, where I cultivated a strong foundation in visual communication and design principles. The thrill of translating intricate design concepts into functional code sparked a new passion in me, leading me to delve into the world of web development.
              </p>
              <div className="flex justify-center mt-4 md:mt-0 md:ml-8">
                <FaPalette className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start justify-between">
              <p className="text-lg text-center md:text-left">
                Recently, I completed an award-winning, intensive 40-hour-per-week technical training program in web development. This transformative experience expanded my skill set and deepened my understanding of both front-end and back-end development. It reinforced my commitment to creating engaging, user-friendly digital experiences and provided hands-on experience in building responsive and interactive web applications.
              </p>
              <div className="flex justify-center mt-4 md:mt-0 md:ml-8">
                <FaCode className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start justify-between">
              <p className="text-lg text-center md:text-left">
                In my journey as both a designer and developer, I am continuously honing my skills to bridge the gap between aesthetics and functionality. I am currently focused on refining my abilities in both design and development, eagerly working on projects that transform innovative design concepts into seamless and interactive websites and applications. My goal is to merge the best of both worlds: crafting websites and user interfaces that are not only visually stunning but also function flawlessly. I am excited about the future and the opportunities to apply my skills in new and challenging projects.
              </p>
              <div className="flex justify-center mt-4 md:mt-0 md:ml-8">
                <FaLaptopCode className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechnologiesBlock technologies={technologies} title="Technologies" />
    </>
  );
};

export default AboutPage;
