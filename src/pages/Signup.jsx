import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Signupform from "../components/SignUpForm/Signupform";

function signup() {
  return (
    <div>
      <Navbar hide={true} />
      <Signupform />
      <Footer />
    </div>
  );
}

export default signup;
