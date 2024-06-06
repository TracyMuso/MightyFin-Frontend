import { type inputDataType } from "@/types";

export const signUpDets: inputDataType[] = [
  {
    label: "First Name",
    placeholder: "",
    htmlFor: "first-name",
    inputType: "text",
    id: "first-name",
  },
  {
    label: "Last Name",
    placeholder: "",
    htmlFor: "last-name",
    inputType: "text",
    id: "last-name",
  },
  {
    label: "Email Address",
    placeholder: "",
    htmlFor: "email",
    inputType: "email",
    id: "email",
  },
  {
    label: "Phone Number",
    placeholder: "",
    htmlFor: "phone-number",
    inputType: "number",
    id: "phone-number",
  },
  {
    label: "Password",
    placeholder: "password",
    htmlFor: "password",
    inputType: "",
    id: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "",
    htmlFor: "confirm-password",
    inputType: "password",
    id: "confirm-password",
  },
];
