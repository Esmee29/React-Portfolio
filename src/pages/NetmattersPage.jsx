import NetmatterImage from '../assets/Netmatters.png';
import Button from '../components/Button';
import InlineTextBlocks from '../components/InlineTextBlocks';
import TechnologiesBlock from '../components/TechnologiesBlock';
import { FaHtml5, FaCss3Alt, FaSass, FaPhp } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";

const technologies = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'SASS (SCSS)', icon: <FaSass /> },
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'MySQL', icon: <SiMysql /> },
];

const NetmattersPage = () => {
  return (
    <div className="bg-blue-600 text-white min-h-screen p-6">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Netmatters Page</h1>
        <img src={NetmatterImage} alt="Netmatters Image" className="w-full max-w-4xl h-auto rounded-md shadow-lg" />
      </div>
      
      <InlineTextBlocks 
        heading1="Project Overview"
        content1={
          <p>
            This project involved recreating the Netmatters homepage as part of the Scion Coalition Scheme. This course is a comprehensive, tailored program designed to teach web development, covering both front-end and back-end technologies.
            <br /><br />
            <strong>Key Learning Outcomes:</strong>
            <ul className="list-disc pl-5 mt-2">
              <li>Deepened Understanding of Web Technologies: Through this project, I gained valuable insights into the practical application of the coding languages I had been learning. It enhanced my grasp of how code constructs and operates within real-world websites.</li>
              <li>Hands-On Experience: The project provided my first experience with integrating dynamic features such as carousels, as well as using SQL and PHP to manage and display data.</li>
            </ul>
          </p>
        }
        heading2="About the Scion Coalition Scheme"
        content2={
          <p>
            The Scion Coalition Scheme is an intensive training program offered by Netmatters, aimed at preparing candidates for a career in web development. Spanning sixteen weeks, this program is designed to deliver a comprehensive learning experience under the guidance of seasoned web developers. Participants complete rigorous training to acquire both theoretical knowledge and practical skills, ensuring they are well-prepared for the industry.
          </p>
        }
      />
      
      <TechnologiesBlock technologies={technologies} title="Technologies Used" />

      <div className="flex justify-center mt-8 gap-4">
        <Button 
          link="https://github.com/Esmee29/Netmatters-PHP"
          text="Repository"
          isPrimary={true}
        />
        <Button 
          link="https://netmatters.esmee-fulcher.netmatters-scs.co.uk/"
          text="View Project"
          isPrimary={false}
        />
      </div>
    </div>
  );
};

export default NetmattersPage;
