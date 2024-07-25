import React from "react";

interface ButtonInterface {
  text: string;
  onBtnClick?: () => void;
  size?: ButtonSize;
  width?: number | string;
  variant: ButtonVariant;
}

type ButtonVariant = "primary" | "ghost" | "secondary" | "tertiary";

type ButtonSize = "small" | "medium" | "large";

const Button = ({
  text,
  variant,
  size = "medium",
  onBtnClick,
  ...props
}: ButtonInterface) => {
  const mode = (vars: ButtonVariant) => {
    switch (vars) {
      case "primary":
        return "btn--primary";
      case "ghost":
        return "btn--ghost";
      case "secondary":
        return "btn--secondary";
      case "tertiary":
        return "btn--tertiary";
      default:
        return "btn--primary";
    }
  };
  return (
    <button
      type="button"
      className={["btn", `btn--${size}`, mode(variant)].join(" ")}
      onClick={onBtnClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
