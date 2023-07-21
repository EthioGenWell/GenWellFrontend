import { FC, ImgHTMLAttributes } from "react";

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {}

const Logo: FC<LogoProps> = ({ src, alt, className, ...props }) => {
  return (
    <img
      className={`"rounded-2" ${className}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default Logo;
