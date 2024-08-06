const InlineGridVideoReverse = ({ subheading, content, videoSrc, muted, autoPlay }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Video Side */}
        <div>
          <video 
            src={videoSrc} 
            controls 
            autoPlay={autoPlay} 
            muted={muted} 
            className="w-full h-auto rounded-md"
          />
        </div>
        
        {/* Text Side */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{subheading}</h2>
          <div className="text-lg">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineGridVideoReverse;
