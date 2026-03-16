import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Menu = ({menu, scrollToSection, active}) => {

    const {menuname, scrollTarget} = menu;

    return (
        <li>
            {/* <NavLinkStyled className="navLink" to={`${link}`}><span>{menuname}</span></NavLinkStyled> */}
            <MenuButton
                type="button"
                active={active}
                onClick={() => scrollToSection(scrollTarget)}
            >
                {menuname}
            </MenuButton>
        </li>
    )
}

const MenuButton = styled.button`
    font-size: 20px;
    font-weight:700;
    color: ${({ active }) => (active? "#777" : "inherit")};
    cursor: pointer;
    background-color: ${({active}) => (active ? "#ededed" : "transparent")};;
    border: 0;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    transition: .35s ease-in-out;

    &:active {
        color: #7e7e7e;
    }

    &:hover {
        color: #7e7e7e;
        transition: .2s ease-in-out;
    }

    &:focus {
        outline: none;
    }

    /* &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        background: #111;
        transition: width 0.2s ease;
    } */
`

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