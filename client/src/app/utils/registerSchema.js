import * as yup from "yup";

export const registerSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .matches(/(?=.*[A-Z])/, "Password must contain at least one capital letter")
    .matches(/(?=.*[0-9])/, "Password must contain at least one number")
    .matches(
      /(?=.*[!@#$%^&*])/,
      "The password must contain one of the special characters !@#$%^&*"
    )
    .matches(/(?=.{8,})/, "Password must be at least 8 characters long"),
  email: yup.string().required("Email is required").email("Email incorrect"),
  name: yup.string().required("Name is required"),
});
