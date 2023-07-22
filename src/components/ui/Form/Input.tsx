import { InputHTMLAttributes, FC } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  value?: string;
  name: string;
  labelName?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  className,
  type,
  value,
  name,
  placeholder,
  labelName,
  id,
  ...props
}) => {
  return (
    <div className="mb-3">
      {labelName ? (
        <label htmlFor={id} className="form-label">
          {labelName}
        </label>
      ) : (
        ""
      )}
      <input
        className={`form-control ${className}`}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder ? placeholder : ""}
        id={id}
        {...props}
      />
    </div>
  );
};

export default Input;
