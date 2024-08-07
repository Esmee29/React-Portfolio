import NetmatterContactImage from '../assets/contact-form.png';
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

const NetmatterContactPage = () => {
  return (
    <div className="bg-blue-600 text-white min-h-screen p-6">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Netmatters Contact Page</h1>
        <img src={NetmatterContactImage} alt="Netmatters Contact Image" className="w-full max-w-4xl h-auto rounded-md shadow-lg" />
      </div>
      
      <InlineTextBlocks
        heading1="Project Overview"
        content1={
          <p>
            This project involved recreating the Netmatters contact page as part of the Scion Coalition Scheme. It required integrating HTML, Sass/CSS, JavaScript, and PHP to develop a fully functional contact form that sends data to a database upon submission.
            <br /><br />
            <strong>Key Features:</strong>
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Dynamic Contact Form:</strong> Designed and implemented a contact form that captures user input and sends it to a database using PHP.</li>
              <li><strong>Styling and Responsiveness:</strong> Applied Sass/CSS for a responsive and visually appealing design that works across various devices.</li>
              <li><strong>Client-Side and Server-Side Validation:</strong> Incorporated validation techniques to ensure that form submissions are accurate and secure.</li>
            </ul>
          </p>
        }
        heading2="What I Learned"
        content2={
          <p>
            Throughout this project, I gained several valuable skills and insights:
            <br /><br />
            <strong>Client-Side and Server-Side Validation:</strong> I learned to implement both client-side validation with JavaScript and server-side validation with PHP. This dual approach ensures that user input is validated and sanitized before being processed or stored.
            <br /><br />
            <strong>Database Integration:</strong> Acquired practical experience in sending data to a database using PHP and SQL, which is crucial for handling user inputs and managing data on the server.
            <br /><br />
            <strong>Responsive Design:</strong> Enhanced my skills in CSS and Sass to create a responsive layout that adapts to different screen sizes and devices.
            <br /><br />
            <strong>Real-World Application:</strong> This project provided hands-on experience with integrating dynamic features and solving real-world problems related to web development, which is essential for any professional web developer.
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
          link="https://netmatters.esmee-fulcher.netmatters-scs.co.uk/contact-us.php"
          text="View Project"
          isPrimary={false}
        />
      </div>
    </div>
  );
};

export default NetmatterContactPage;
