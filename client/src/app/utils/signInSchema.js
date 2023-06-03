import * as yup from "yup";

export const signInSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  email: yup.string().required("Email is required").email("Email incorrect"),
});
