import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";
import { divice } from '../../assets/css/breakpoint';


const Gnb = ({menus, activeTarget, scrollToSection}) => {

    return (
        <MenuWrap>
            <div className="menuBox">
                {/* Gnb */}
                <LogoWrap>
                    <Link to="/" className="logo">
                        <span className="blind"><span>ebook 홈 로고</span></span>
                    </Link>
                </LogoWrap>

                {/* Gnb */}
                <MenuListUl>
                    {
                        menus.map(menu => (
                            <Menu 
                                key={menu.id} 
                                menu={menu}
                                active={activeTarget === menu.scrollTarget}
                                scrollToSection={scrollToSection}
                            />
                        ))
                    }
                </MenuListUl>

                {/* 로그인 */}
                <JoinWrap>
                    <div className="inner">
                        <Link className="memberjoin" to="join"><span>회원가입</span></Link>
                        <Link className="login" to="login"><span>로그인</span></Link>
                    </div>
                </JoinWrap>
            </div>
        </MenuWrap>
    );
}

const MenuWrap = styled.div`
    position: sticky;
    top:0;
    z-index:100;
    width: 100%;
    background-color: #fff;
    padding: 2rem 4rem;
    border-bottom: 1px solid #eee;

    & .menuBox {
        width: auto;
        max-width: 120rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (${divice.mobile}) {
        padding: 1rem 2rem;
    }
`;

const LogoWrap = styled.div`
    & .logo {
        display:inline-block;
        width: 20rem;
        height: 10rem;
        background-image: url("/logo_ebook.svg");
        background-repeat: no-repeat;
        background-size: contain;

        @media screen and (${divice.mobile}) {
            width: 13rem;
            height: 5rem;
        }
    }
`

const MenuListUl = styled.ul`
    min-width: 60rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    color: #111;
    font-size: 1.6rem;
    font-weight:500;

    & li {
        color: inherit;
        list-style: none;
    }

    @media screen and (${divice.tablet}) {
        display: none;
    }
`

const JoinWrap = styled.div`
    min-width: 12.5rem;

    & .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > a {
            position: relative;

            &:active {
                color: #7e7e7e;
            }

            &:hover {
                color: #7e7e7e;
            }

            transition: .2s ease-in-out;
            text-decoration: none;
        }

        & > a + a:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-3.1rem ,-50%);
            width:1px;
            height: 15px;
            background-color: #999fac;
        }

        & .memberjoin {
            font-size: 1.6rem;
            color: #999fac;
        }

        & .login {
            font-size: 1.6rem;
            color: #999fac;
        }
    }
`

export default Gnb;


