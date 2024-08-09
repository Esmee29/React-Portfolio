const Button = ({ link, text, isPrimary }) => {
  const baseClasses = "px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300";
  const primaryClasses = "bg-blue-900 hover:bg-blue-800"; // Primary color with distinct hover
  const secondaryClasses = "bg-blue-400 hover:bg-blue-300"; // Secondary color with distinct hover

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses}`}
    >
      {text}
    </a>
  );
};

export default Button;
