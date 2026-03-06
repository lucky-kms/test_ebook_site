import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Menu = ({menu}) => {

    const {id , menuname} = menu;

    return (
        <li id={id}>
            <NavLinkStyled className="navLink" to="/company"><span>{menuname}</span></NavLinkStyled>
        </li>
    )
}

const NavLinkStyled = styled(NavLink)`
    font-size: 20px;
    font-weight:700;
    color: inherit;
    cursor: pointer;

    &:active {
        color: #7e7e7e;
    }

    &:hover {
        color: #7e7e7e;
        transition: .2s ease-in-out;
    }
`

export default Menu;