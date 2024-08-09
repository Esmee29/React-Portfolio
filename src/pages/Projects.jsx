import { Link } from 'react-router-dom';
import Card from '../components/Card';
import supersonicImage from '../assets/Supersonic.webp';
import foragerImage from '../assets/forager-app.webp';
import powImage from '../assets/PowStory.jpg';
import NetmatterImage from '../assets/Netmatters.png';
import jsArrayImage from '../assets/Array.png';
import weatherAppImage from '../assets/weather-app.png';

const Projects = () => {
  const designProjects = [
    {
      imageUrl: supersonicImage,
      projectName: 'Supersonic',
      caseStudyLink: '/supersonic',
    },
    {
      imageUrl: foragerImage,
      projectName: 'Forager',
      caseStudyLink: '/forager',
    },
    {
      imageUrl: powImage,
      projectName: 'P.O.W. Story',
      caseStudyLink: '/pow-story',
    },
  ];

  const developerProjects = [
    {
      imageUrl: NetmatterImage,
      projectName: 'Netmatters',
      caseStudyLink: '/netmatters',
    },
    {
      imageUrl: jsArrayImage,
      projectName: 'JavaScript Array',
      caseStudyLink: '/javascript-array',
    },
    {
      imageUrl: weatherAppImage,
      projectName: 'Weather App',
      caseStudyLink: '/weather-react',
    },
  ];

  return (
    <div id="projects" className="bg-blue-600 min-h-screen p-6 text-white">
      <section className="mb-12">
        <div className="bg-blue-900 p-6 rounded-lg">
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-blue-300 mb-4 md:mb-0">Design Projects</h2>
            <Link
              to="/design-projects"
              className="text-white font-semibold py-2 px-4 mt-2 md:mt-0 relative inline-block"
            >
              <span className="hover:underline">View All</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
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

      <section className="mt-12">
        <div className="bg-blue-900 p-6 rounded-lg">
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-blue-300 mb-4 md:mb-0">Developer Projects</h2>
            <Link
              to="/developer-projects"
              className="text-white font-semibold py-2 px-4 mt-2 md:mt-0 relative inline-block"
            >
              <span className="hover:underline">View All</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
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
