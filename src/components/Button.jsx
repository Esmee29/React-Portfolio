const Button = ({ link, text, isPrimary }) => {
  const baseClasses = "px-4 py-2 rounded-md text-white font-semibold transition-colors duration-300";
  const primaryClasses = "bg-blue-500 hover:bg-blue-700";
  const secondaryClasses = "bg-gray-500 hover:bg-gray-700";

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
