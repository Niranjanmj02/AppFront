import React from "react";

const sizes = {
  "3xl": "text-3xl font-bold",
  "2xl": "text-[28px] font-bold leading-[43px]",
  xl: "text-2xl font-semibold leading-[29px]",
  "5xl": "text-[73px] font-bold leading-[85px]",
  "4xl": "text-[45px] font-bold leading-[60px]",
  s: "text-base font-bold",
  md: "text-lg font-semibold leading-7",
  xs: "text-xs font-bold leading-[19px]",
  lg: "text-xl font-semibold leading-6",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
