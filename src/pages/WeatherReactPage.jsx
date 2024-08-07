import weatherAppImage from '../assets/weather-app.png';
import Button from '../components/Button';
import InlineTextBlocks from '../components/InlineTextBlocks';
import TechnologiesBlock from '../components/TechnologiesBlock';
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
    <div className="bg-blue-600 text-white min-h-screen p-6">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Weather React App</h1>
        <img src={weatherAppImage} alt="Weather React App" className="w-full max-w-4xl h-auto rounded-md shadow-lg" />
      </div>
      
      <InlineTextBlocks
        heading1="Project Overview"
        content1={
          <p>
            This Weather React App is a comprehensive web application designed to fetch and display weather information using the OpenWeatherMap API. The project involved creating a React-based interface that provides real-time weather data and forecasts.
            <br /><br />
            <strong>Key Features:</strong>
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Real-Time Weather Data:</strong> Integrated with the OpenWeatherMap API to fetch and display current weather conditions and forecasts.</li>
              <li><strong>React Components:</strong> Utilized React components for dynamic and responsive user interfaces.</li>
              <li><strong>Styling and Responsiveness:</strong> Applied CSS and Sass for a responsive design that ensures a great user experience across devices.</li>
              <li><strong>Vite for Development:</strong> Used Vite for a fast and efficient development environment.</li>
            </ul>
          </p>
        }
        heading2="What I Learned"
        content2={
          <p>
            This project provided several key learning experiences:
            <br /><br />
            <strong>API Integration:</strong> Gained practical experience in integrating external APIs with React applications to fetch and display data.
            <br /><br />
            <strong>Component-Based Architecture:</strong> Improved skills in building reusable and dynamic components using React.
            <br /><br />
            <strong>Styling and Responsiveness:</strong> Enhanced ability to create visually appealing and responsive designs using CSS and Sass.
            <br /><br />
            <strong>Development Tools:</strong> Learned to use Vite for a faster development build process, improving efficiency.
          </p>
        }
      />
      
      <TechnologiesBlock technologies={technologies} title="Technologies Used" />

      <div className="flex justify-center mt-8 gap-4">
        <Button 
          link="https://github.com/Esmee29/Weather-React"
          text="Repository"
          isPrimary={true}
        />
        <Button 
          link="https://esmee-fulcher.netmatters-scs.co.uk/Weather/"
          text="View Project"
          isPrimary={false}
        />
      </div>
    </div>
  );
};

export default WeatherReactPage;
