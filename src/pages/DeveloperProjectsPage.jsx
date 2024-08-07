import Card from '../components/Card';
import NetmatterImage from '../assets/Netmatters.png';
import jsArrayImage from '../assets/Array.png';
import weatherAppImage from '../assets/weather-app.png';
import NetmatterContactImage from '../assets/contact-form.png';

const DeveloperProjectsPage = () => {
  const developerProjects = [
    {
      imageUrl: NetmatterImage,
      projectName: 'Netmatters',
      caseStudyLink: '/netmatters',
    },
    {
      imageUrl: NetmatterContactImage,
      projectName: 'Netmatter Contact',
      caseStudyLink: '/netmatters-contact',
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
    <div className="bg-blue-900 min-h-screen p-6 text-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-300">Developer Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {developerProjects.map((project, index) => (
          <Card
            key={index}
            imageUrl={project.imageUrl}
            projectName={project.projectName}
            caseStudyLink={project.caseStudyLink}
          />
        ))}
      </div>
    </div>
  );
};

export default DeveloperProjectsPage;
