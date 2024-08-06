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
    {
      imageUrl: parentingPodImage,
      projectName: 'Parenting Pod',
      caseStudyLink: '/projects/parenting-pod',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Design Projects</h2>
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
