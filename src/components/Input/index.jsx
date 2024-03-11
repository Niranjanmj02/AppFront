import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[28px]",
};
const variants = {
  outline: {
    gray_600: "border-gray-600 border border-solid text-gray-700",
  },
  fill: {
    white_A700: "bg-white-A700 text-gray-900_60",
    gray_100: "bg-gray-100 text-blue_gray-900_87",
  },
};
const sizes = {
  sm: "h-[56px] pl-4 pr-[35px] text-base",
  xs: "h-[52px] pl-4 pr-[35px] text-sm",
  md: "h-[79px] px-[35px] text-base",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      variant = "outline",
      size = "sm",
      color = "gray_600",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_600", "white_A700", "gray_100"]),
};

export { Input };
