import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-lg",
};
const variants = {
  fill: {
    amber_300: "bg-amber-300 text-blue_gray-900_01",
    deep_orange_900: "bg-deep_orange-900 text-white-A700",
    yellow_900: "bg-yellow-900 text-red-900",
    red_800: "bg-red-800 text-white-A700",
    red_600_02: "bg-red-600_02",
    red_A400: "bg-red-A400 text-white-A700",
    red_300: "bg-red-300 text-gray-50_01",
  },
  outline: {
    gray_400_01: "border-gray-400_01 border border-solid text-black-900_01",
    black_900_d8: "border-black-900_d8 border border-solid text-black-900_d8",
  },
};
const sizes = {
  "5xl": "h-[68px] px-[35px] text-lg",
  "2xl": "h-[51px] px-5 text-base",
  md: "h-[35px] px-0.5 text-base",
  sm: "h-[29px] px-[35px] text-lg",
  "7xl": "h-[92px] px-[34px] text-[17px]",
  "6xl": "h-[84px] px-[35px] text-3xl",
  xl: "h-[46px] px-4",
  "3xl": "h-[64px] px-[35px] text-base",
  xs: "h-[27px] px-2",
  "4xl": "h-[67px] px-[35px] text-2xl",
  lg: "h-[43px] px-2.5 text-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "lg",
  color = "red_300",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["5xl", "2xl", "md", "sm", "7xl", "6xl", "xl", "3xl", "xs", "4xl", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "amber_300",
    "deep_orange_900",
    "yellow_900",
    "red_800",
    "red_600_02",
    "red_A400",
    "red_300",
    "gray_400_01",
    "black_900_d8",
  ]),
};

export { Button };
