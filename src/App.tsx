import React from "react";
import "./App.css";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import Logo from "./components/ui/Logo";

function App() {
  return (
    <div className="col center">
      <form className="form p-5" action="">
        <Logo src="../public/logo512.png" alt="Logo" />
        <Input type="text" name="email" labelName="Email" />
        <Input type="password" name="password" labelName="Password" />
        <Input type="password" name="cpassword" labelName="Confirm Password" />
        <Button className="btn-secondary" type="submit" text="Register" />
      </form>
    </div>
  );
}

export default App;
