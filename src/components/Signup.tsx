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
  const [isSubmitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      const user: IUser = {
        ...values,
      };

      try {
        const response: any = await signUp(user);
        console.log(response);
        if (!response.data.success) {
          setSubmitted(true);
          setMessage(response.data.message);
          formik.resetForm();
        } else {
          setError(true);
          setMessage("Something went wrong");
        }
      } catch (error: any) {
        setError(true);
        setMessage(error.response.data.error);
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
            {message}
          </div>
        )}
        {isSubmitted && (
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
            {message}
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
