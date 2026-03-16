import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";


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
                        <Link class="memberjoin" to="join"><span>회원가입</span></Link>
                        <Link class="login" to="login"><span>로그인</span></Link>
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
    padding: 20px 40px;
    border-bottom: 1px solid #eee;

    & .menuBox {
        width: auto;
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`;

const LogoWrap = styled.div`
    & .logo {
        display:inline-block;
        width: 200px;
        height: 100px;
        background-image: url("/logo_ebook.svg");
        background-size: contain;
    }
`

const MenuListUl = styled.ul`
    min-width: 600px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    color: #111;
    font-size: 16px;
    font-weight:500;

    & li {
        color: inherit;
        list-style: none;
    }
`

const JoinWrap = styled.div`
    min-width: 125px;

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
            transform: translate(-31px ,-50%);
            width:1px;
            height: 15px;
            background-color: #999fac;
        }

        & .memberjoin {
            font-size: 16px;
            color: #999fac;
        }

        & .login {
            font-size: 16px;
            color: #999fac;
        }
    }
`

export default Gnb;


