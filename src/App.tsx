import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Input from "./components/ui/Form/Input";
import Button from "./components/ui/Form/Button";
import Logo from "./components/ui/Logo";

function App() {
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

export default App;
