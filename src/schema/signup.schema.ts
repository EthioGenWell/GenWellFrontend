import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should atleast contain 8 characters")
    .max(32, "Password can't contain more than 32 characters"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Password Must match")
    .required(),
});
