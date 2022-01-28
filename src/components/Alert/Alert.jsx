import React from "react";
import Alert from "@material-tailwind/react/Alert";

export default function AlertComponent({text}) {
    return (
        <Alert color="red">{text}</Alert>
    );
}