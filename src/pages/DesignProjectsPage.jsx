import Card from '../components/Card';
import supersonicImage from '../assets/Supersonic.webp';
import foragerImage from '../assets/forager-app.webp';
import powImage from '../assets/PowStory.jpg';
import parentingPodImage from '../assets/baby.webp';

const DesignProjectsPage = () => {
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
    {
      imageUrl: parentingPodImage,
      projectName: 'Parenting Pod',
      caseStudyLink: '/parenting-pod',
    },
  ];

  return (
    <div className="bg-blue-900 min-h-screen p-6 text-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-300">Design Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {designProjects.map((project, index) => (
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

export default DesignProjectsPage;
