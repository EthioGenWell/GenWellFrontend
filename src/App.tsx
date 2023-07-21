import React from "react";
import "./App.css";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";

function App() {
  return (
    <div className="col center">
      <form className="form p-5" action="">
        <Input type="text" name="email" labelName="Email" />
        <Input type="password" name="password" labelName="Password" />
        <Input type="password" name="cpassword" labelName="Confirm Password" />
        <Button className="btn-secondary" type="submit" text="Register" />
      </form>
    </div>
  );
}

export default App;
