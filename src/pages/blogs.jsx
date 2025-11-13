// Navbar - blogs.js - EL

import React from "react";
import howard from "../images/howard.webp";

const Blogs = () => {
    return (
        <div style={{boxShadow: "4px 4px 4px rgba(0,0,0,0.3)"}}>
            <figure>
                <img src={howard} alt="stern" style={{width: "35%", padding: "1em"}}/>
                <figcaption style={{fontFamily: "Courier New, Courier, monospace"}}>Howard</figcaption>
            </figure>
        </div>
    )
};
export default Blogs;