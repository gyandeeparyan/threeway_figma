/* eslint-disable react/prop-types */


function Button({
  text,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
 
  className = "",

  ...props
}) {
  return (
    <button
    type={type}
      className={` ${className} ${bgColor} ${textColor}`}>
      {text}
    </button>
  );
}

export default Button;
