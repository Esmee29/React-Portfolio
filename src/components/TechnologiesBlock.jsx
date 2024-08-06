const TechnologiesBlock = ({ technologies }) => {
  return (
    <div className="container mx-auto p-10 mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Technologies Used</h2>
      <div className="relative w-full">
        <div className={`grid gap-8 ${technologies.length <= 4 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'} justify-items-center`}>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group"
            >
              <div className="icon text-4xl mb-2">
                {tech.icon}
              </div>
              <h5 className="text-center text-lg bg-white bg-opacity-90 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesBlock;
