import jsArrayImage from '../../assets/Array.png';
import Button from '../../components/Button';
import InlineTextBlocks from '../../components/InlineTextBlocks';
import TechnologiesBlock from '../../components/TechnologiesBlock';
import { FaHtml5, FaCss3Alt, FaSass} from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";


const technologies = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'SASS (SCSS)', icon: <FaSass /> },
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
];
const JavascriptArrayPage = () => {
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
      As part of the Scion Coalition Scheme assessment with Netmatters, I developed an <strong>Image-to-Email Assigner</strong> webpage. This project involved creating a web application that allows users to input their email addresses and allocate images from an image API directly to their email accounts.
      <br /><br />
      <strong>Key Features:</strong>
      <ul className="list-disc pl-5 mt-2">
        <li><strong>Email Allocation:</strong> Enabled users to input email addresses and allocate images from an image API to their email accounts.</li>
        <li><strong>JavaScript Array Project:</strong> Developed a JavaScript array to manage and display the images and email assignments.</li>
        <li><strong>Technical and Creative Integration:</strong> Combined technical skills with creative styling to produce a visually appealing and functional webpage.</li>
        <li><strong>Client and Server-Side Validation:</strong> Implemented validation techniques for email addresses on both client and server sides.</li>
      </ul>
    </p>
  }
  heading2="What I Learned"
  content2={
    <p>
      This project provided several key learning experiences:
      <br /><br />
      <strong>Fetching Images from an API:</strong> Gained practical experience in fetching images from an external API and displaying them on the page.
      <br /><br />
      <strong>Assigning Images to Emails:</strong> Learned how to allocate images to email addresses and handle user input effectively.
      <br /><br />
      <strong>Client-Side and Server-Side Validation:</strong> Improved skills in validating user inputs, ensuring accurate and secure email submissions.
      <br /><br />
      <strong>Integration of Technical and Creative Aspects:</strong> Enjoyed merging technical functionalities with creative design to create a cohesive and engaging user experience.
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

export default JavascriptArrayPage;
