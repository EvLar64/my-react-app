// Navbar index.js - EL

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/index" activeStyle>
                        Watchlist
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        Top-Rated
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Box Office
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;