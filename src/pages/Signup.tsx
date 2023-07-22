import React from "react";
import { useFormik } from "formik";
import { IUser } from "../types/User";
import { signUp } from "../utils/signUp";
import { RegisterSchema } from "../schema/signup.schema";
import "../App.css";
import "../components/ui/Form/form.css";
import logo from "../logo.svg";
import Input from "../components/ui/Form/Input";
import Button from "../components/ui/Form/Button";
import Logo from "../components/ui/Logo";

function Signup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: RegisterSchema,
    async onSubmit(values) {
      const user: IUser = {
        ...values,
      };

      const response = await signUp(user);
      if (!response.data.success) {
        formik.resetForm();
      }
    },
  });
  return (
    <div className="center">
      <form className="form p-5" action="">
        <Logo src={logo} width="200px" alt="Logo" />
        <Input type="text" name="email" labelName="Email" />
        <Input type="password" name="password" labelName="Password" />
        <Input type="password" name="cpassword" labelName="Confirm Password" />
        <Button className="btn-secondary" type="submit" text="Register" />
      </form>
    </div>
  );
}

export default Signup;
