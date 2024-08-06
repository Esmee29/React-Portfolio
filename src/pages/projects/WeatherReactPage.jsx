import jsArrayImage from '../../assets/Array.png';
import Button from '../../components/Button';
import InlineTextBlocks from '../../components/InlineTextBlocks';
import TechnologiesBlock from '../../components/TechnologiesBlock';
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite } from "react-icons/si";


const technologies = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'SASS (SCSS)', icon: <FaSass /> },
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Vite', icon: <SiVite /> },

];

const WeatherReactPage = () => {
  return (
    <>
    <div className="flex flex-col items-center">
        <h1 className='text-5xl font-semibold mb-5'>Javascript Array</h1>
        <img src={jsArrayImage} alt="Netmatters Image" className="w-3/4 h-1/3 rounded-md" />
        
      </div>
      <InlineTextBlocks
  heading1="Project Overview"
  content1={
    <p>
      This personal project involved creating a <strong>responsive weather application</strong> using React and the OpenWeatherMap API. It serves as a real-time weather updater, providing users with current weather conditions based on their location or any specified city.
      <br /><br />
      <strong>Key Features:</strong>
      <ul className="list-disc pl-5 mt-2">
        <li><strong>Real-Time Weather Updates:</strong> Utilized the OpenWeatherMap API to fetch and display up-to-date weather information.</li>
        <li><strong>Responsive Design:</strong> Developed a responsive layout to ensure the application works well on various devices, from desktops to mobile phones.</li>
        <li><strong>First Personal React Project:</strong> Created using Vite and React, marking my first independent project in React.</li>
        <li><strong>Learning and Integration:</strong> Gained hands-on experience with React features and API integration, enhancing my understanding of building dynamic web applications.</li>
      </ul>
    </p>
  }
  heading2="What I Learned"
  content2={
    <p>
      This project offered valuable insights and learning opportunities:
      <br /><br />
      <strong>React Fundamentals:</strong> Deepened my understanding of React, including components, state management, and hooks, through hands-on experience.
      <br /><br />
      <strong>API Integration:</strong> Learned how to connect to and use external APIs, specifically handling API requests and managing responses.
      <br /><br />
      
      <strong>Personal Project Development:</strong> This was my first React project created independently, providing a significant learning experience and boosting my confidence in building and deploying web applications.
    </p>
  }
/>


      <TechnologiesBlock technologies={technologies} />
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <Button 
          link="https://github.com/Esmee29/JavaScript-Array"
          text="Repository"
          isPrimary={true}
        />
        <Button 
          link="https://esmee-fulcher.netmatters-scs.co.uk/Array/"
          text="View Project"
          isPrimary={false}
        />
      </div>
    </>
    );
};

export default WeatherReactPage