const CenteredText = ({ subheading, paragraph }) => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] px-4">
      <div className="text-center max-w-lg">
        <h2 className="text-5xl font-bold mb-2">{subheading}</h2>
        <p className="text-2xl mb-4">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default CenteredText;
