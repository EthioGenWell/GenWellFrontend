import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { IUser } from "../types/User";
import { login } from "../utils/login"; 
import { LoginSchema } from "../schema/login.schema"; 
import "../App.css";
import "../components/ui/Form/form.css";
import logo from "../logo.svg";
import Input from "../components/ui/Form/Input";
import Button from "../components/ui/Form/Button";
import Logo from "../components/ui/Logo";
import LoginWithGoogle from './LoginWithGoogle';


function Login() {

  const [isError, setError] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const redirect = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const user: IUser = {
        ...values,
      };

      try {
        const response = await login(user); 
        if (response.data.success) {
          setSubmitted(true);
          setError(false);
          setMessage(response.data.message);
          formik.resetForm();
          setTimeout(() => {
            redirect("/"); // Redirect to the home after successful login
          }, 1500);
        } else {
          setError(true);
          setSubmitted(false);
          setMessage("Invalid email or password");
        }
      } catch (error: any) {
        setError(true);
        setSubmitted(false);
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
          <div className="success-msg">{message}</div>
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
            <div className="error-msg">{formik.errors.email}</div>
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
            <div className="error-msg">{formik.errors.password}</div>
          )}
        </div>
        <Button className="btn-secondary mt-3" type="submit" text="Login" />
        <LoginWithGoogle />
      </form>
    </div>
  );
}

export default Login;
