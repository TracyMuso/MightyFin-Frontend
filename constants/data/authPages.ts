import { type inputDataType } from "@/types";

export const signUpDets: inputDataType[] = [
  {
    label: "First Name",
    placeholder: "",
    htmlFor: "first-name",
    inputType: "text",
  },
  {
    label: "Last Name",
    placeholder: "",
    htmlFor: "last-name",
    inputType: "text",
  },
  {
    label: "Email Address",
    placeholder: "",
    htmlFor: "email",
    inputType: "email",
  },
  {
    label: "Phone Number",
    placeholder: "776 121 316",
    htmlFor: "phone-number",
    inputType: "tel",
  },
  {
    label: "Password",
    placeholder: "password",
    htmlFor: "password",
    inputType: "",
  },
];

export const SignInDets: inputDataType[] = [
  {
    label: "Email Address",
    placeholder: "",
    htmlFor: "email",
    inputType: "email",
  },
  {
    label: "Password",
    placeholder: "password",
    htmlFor: "password",
    inputType: "",
  },
];
