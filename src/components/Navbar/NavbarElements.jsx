// Navbar components -  NavbarElements.js - EL

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: lightgreen;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 12;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
`;

export const NavLink = styled(Link)`
    color: gray;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: "Courier New", Courier, monospace;
    &.active {
        color: #4d4dff;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;