const Card = ({ imageUrl, projectName, caseStudyLink }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img 
        src={imageUrl} 
        alt={`${projectName} image`} 
        className="w-full h-full" 
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <h2 className="text-white text-xl font-bold mb-2">{projectName}</h2>
        <a href={caseStudyLink} className="text-white underline">
          View Case Study
        </a>
      </div>
    </div>
  );
};

export default Card;
