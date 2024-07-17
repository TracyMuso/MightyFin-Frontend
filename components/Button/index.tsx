import React from "react";

interface ButtonInterface {
  text: string;
  onBtnClick?: () => void;
  size?: ButtonSize;
  width?: number | string;
  variant: ButtonType;
}

type ButtonType = "primary" | "ghost" | "secondary" | "tertiary";

type ButtonSize = "small" | "medium" | "large";

const Button = ({
  text,
  variant,
  size = "medium",
  ...props
}: ButtonInterface) => {
  return (
    <button
      type="button"
      className={["btn", `btn--${size}`, `btn--${variant}`].join(" ")}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
