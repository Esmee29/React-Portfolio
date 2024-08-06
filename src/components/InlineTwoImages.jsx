const InlineTwoImages = ({ imageSrc1, imageSrc2 }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Image 1 */}
        <div>
          <img 
            src={imageSrc1} 
            alt="Image 1" 
            className="w-full h-auto max-h-[750px] rounded-md object-contain"
          />
        </div>
        
        {/* Image 2 */}
        <div>
          <img 
            src={imageSrc2} 
            alt="Image 2" 
            className="w-full h-auto max-h-[750px] rounded-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default InlineTwoImages;
