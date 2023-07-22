import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  type,
  text,
  isLoading,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      disabled={isLoading}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
