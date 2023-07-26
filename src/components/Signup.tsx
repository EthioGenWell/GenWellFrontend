import React, { useState } from "react";
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
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      console.log("Submitting");

      const user: IUser = {
        ...values,
      };
      console.log(user);
      try {
        const response = await signUp(user);
        if (!response.data.success) {
          formik.resetForm();
        } else {
          setError(true);
          setErrorMessage("Something went wrong");
          console.log(response.data);
        }
      } catch (error: any) {
        setError(true);
        setErrorMessage(error.message);
      }
    },
  });
  return (
    <div className="center">
      <form className="form p-5" action="" onSubmit={formik.handleSubmit}>
        <Logo src={logo} width="200px" alt="Logo" />
        {isError && (
          <div
            style={{
              backgroundColor: "red",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              fontSize: "0.90rem",
            }}
            className="rounded-2"
          >
            {errorMessage}
          </div>
        )}
        <div>
          <Input
            type="text"
            name="email"
            labelName="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div
              style={{
                color: "red",
                fontSize: "0.80rem",
              }}
            >
              {formik.errors.email}
            </div>
          )}
        </div>
        <div>
          <Input
            type="password"
            name="password"
            labelName="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div style={{ color: "red", fontSize: "0.80rem" }}>
              {formik.errors.password}
            </div>
          )}
        </div>
        <div>
          <Input
            type="password"
            name="passwordConfirm"
            labelName="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirm}
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div style={{ color: "red", fontSize: "0.80rem" }}>
              {formik.errors.passwordConfirm}
            </div>
          )}
        </div>
        <Button className="btn-secondary mt-3" type="submit" text="Signup" />
      </form>
    </div>
  );
}

export default Signup;
