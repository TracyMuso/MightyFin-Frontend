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
  ...props
}: ButtonInterface) => {
  const mode = (variant: ButtonVariant) => {
    switch (variant) {
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
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
