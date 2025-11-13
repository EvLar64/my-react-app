// Navbar - signup.js - EL

import React from "react";
import gary from "../images/gary.jpeg";

const SignUp = () => {
    return (
        <div style={{boxShadow: "4px 4px 4px rgba(0,0,0,0.3)"}}>
            <figure>
                <img src={gary} alt="gary" style={{width: "35%", padding: "1em"}}/>
                <figcaption style={{fontFamily: "Courier New, Courier, monospace"}}>Gary</figcaption>
            </figure>
        </div>
    );
};
export default SignUp;