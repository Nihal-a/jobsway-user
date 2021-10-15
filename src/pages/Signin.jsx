import React from "react";
import Navbar from "../components/navbar/Navbar";
import SigninForm from "../components/SigninForm/SigninForm";

function Signin() {
  return (
    <div>
      <Navbar hide={true} />
      <SigninForm />
    </div>
  );
}

export default Signin;
