import { Link } from 'react-router-dom';
import Card from '../components/Card';
import supersonicImage from '../assets/Supersonic.webp';
import foragerImage from '../assets/forager-app.webp';
import powImage from '../assets/PowStory.jpg';
import NetmatterImage from '../assets/Netmatters.png';
import jsArrayImage from '../assets/Array.png';
import weatherAppImage from '../assets/weather-app.png';


const Projects = () => {
  // Define two sets of projects
  const designProjects = [
    {
      imageUrl: supersonicImage,
      projectName: 'Supersonic',
      caseStudyLink: '/projects/supersonic',
    },
    {
      imageUrl: foragerImage,
      projectName: 'Forager',
      caseStudyLink: '/projects/forager',
    },
    {
      imageUrl: powImage,
      projectName: 'P.O.W. Story',
      caseStudyLink: '/projects/pow-story',
    },
  ];

  const developerProjects = [
    {
      imageUrl: NetmatterImage,
      projectName: 'Netmatters',
      caseStudyLink: '/projects/netmatters',
    },
    {
      imageUrl: jsArrayImage,
      projectName: 'JavaScript Array',
      caseStudyLink: '/projects/javascript-array',
    },
    {
      imageUrl: weatherAppImage,
      projectName: 'Weather App',
      caseStudyLink: '/projects/weather-react',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Design Projects Section */}
      <section className="mb-12">
        <div className="flex flex-col items-center mb-4 md:items-start md:flex-row md:justify-between">
          <h2 className="text-2xl font-bold">Design Projects</h2>
          <Link to="/design-projects" className="text-blue-500 hover:underline mt-4 md:mt-0">
            View All
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {designProjects.map((project, index) => (
            <Card
              key={index}
              imageUrl={project.imageUrl}
              projectName={project.projectName}
              caseStudyLink={project.caseStudyLink}
            />
          ))}
        </div>
      </section>

      {/* Developer Projects Section */}
      <section>
        <div className="flex flex-col items-center mb-4 md:items-start md:flex-row md:justify-between">
          <h2 className="text-2xl font-bold">Developer Projects</h2>
          <Link to="/developer-projects" className="text-blue-500 hover:underline mt-4 md:mt-0">
            View All </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {developerProjects.map((project, index) => (
            <Card
              key={index}
              imageUrl={project.imageUrl}
              projectName={project.projectName}
              caseStudyLink={project.caseStudyLink}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;