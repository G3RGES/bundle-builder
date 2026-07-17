const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg
        border
        border-violet-600
        px-6
        py-2
        text-sm
        font-medium
        text-violet-600
        transition-colors
        hover:bg-violet-600
        hover:text-white
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
