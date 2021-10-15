import React from "react";
import { Link } from "react-router-dom";
import "./primary.css";

function PrimaryButton({ href, value }) {
  return (
    <div>
      <Link className="primary-button" to={href}>
        {value}
      </Link>
    </div>
  );
}

export default PrimaryButton;
