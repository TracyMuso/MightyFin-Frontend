import * as React from "react";
import { HTMLInputTypeAttribute } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export interface InputProps {
  label?: string;
  htmlFor: string;
  placeholder?: string;
  textArea?: boolean;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  minWidth?: boolean;
  suggestion?: "multi" | "single" | "select";
  charCount?: number;
  // ACTIONS
  onTextChange: (text: string) => void;
  onKeyDown?: (keyCode: number) => void;
  onIconClick?: () => void;
}

const Input = (props: InputProps) => {
  const {
    label,
    placeholder = "",
    onTextChange,
    type = "text",
    errorMessage = "",
    textArea = false,
    value,
    htmlFor,
    minWidth = false,
    onIconClick = () => {},
    charCount = undefined,
  } = props;
  return (
    <div className="w-full">
      {label !== undefined && (
        <label htmlFor={htmlFor} className="font-bold text-m">
          {label}
        </label>
      )}
      {type == "tel" ? (
        <PhoneInput
          className="w-full h-12 py-2 px-3 rounded-s tel-input border border-[#EEEBEF] focus:outline-none focus:border-[#410064]"
          onChange={onTextChange}
          placeholder={placeholder}
          countries={["ZM"]}
          international={false}
          defaultCountry="ZM"
          value={value}
          countryCallingCodeEditable={false}
        />
      ) : textArea ? (
        <textarea
          placeholder={placeholder}
          className="py-2 px-3 w-full"
          onChange={(e) => onTextChange(e.target.value)}
          value={value}
        />
      ) : (
        <input
          placeholder={placeholder}
          required
          className="w-full py-2 px-3 border border-[#EEEBEF] rounded-s focus:outline-none focus:border-[#410064] focus:border-[2px]"
          onChange={(e) => onTextChange(e.target.value)}
          value={value}
        />
      )}
    </div>
  );
};

export { Input };
