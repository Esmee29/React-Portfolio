const InlineTextBlocks = ({ heading1, content1, heading2, content2 }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Text Block 1 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{heading1}</h2>
          <div className="text-lg">
            {content1}
          </div>
        </div>
        
        {/* Text Block 2 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{heading2}</h2>
          <div className="text-lg">
            {content2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineTextBlocks;
