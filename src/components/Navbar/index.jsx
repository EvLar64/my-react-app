// Navbar index.js - EL

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        Page 2
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Page 3
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Howard
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Gary
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;