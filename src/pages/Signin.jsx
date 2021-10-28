import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import SigninForm from "../components/SigninForm/SigninForm";

function Signin() {
  return (
    <div>
      <Navbar hide={true} />
      <SigninForm />
      <Footer />
    </div>
  );
}

export default Signin;
