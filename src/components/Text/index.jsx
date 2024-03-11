import React from "react";

const sizes = {
  "5xl": "text-6xl font-normal",
  xs: "text-sm font-medium leading-[22px]",
  lg: "text-lg font-medium leading-[30px]",
  "6xl": "text-[65px] font-normal",
  s: "text-[15px] font-medium leading-[23px]",
  "2xl": "text-2xl font-medium leading-[22px]",
  "3xl": "text-3xl font-normal",
  "4xl": "text-[50px] font-normal",
  xl: "text-xl font-normal leading-[181.25%]",
  md: "text-base font-medium leading-6",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
