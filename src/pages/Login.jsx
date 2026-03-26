import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { styled } from "styled-components";
import { divice } from "../assets/css/breakpoint";

export default function Login () {
    const { login, isLoading, error, isAuthenticated, user} = useAuth();

    const [form, setForm] = useState({
        username: "emilys",
        password: "emilyspass"
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await login(form);
    }


    return (
        <LoginForm>
            <Titleh2>로그인</Titleh2>
            {
                isAuthenticated ? (
                    <LoginInput>
                        <h3>개인정보</h3>
                        <p>아이디 : {user.firstName} {user.lastName} 님 로그인 했습니다.</p> 
                        
                    </LoginInput>
                ) : (
                    <LoginInput>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">아이디 :</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="password">비밀번호 :</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" disabled={isLoading}>
                                 {/* // 로딩 */}
                                {
                                    isLoading ? (
                                        <div className="loadingBar">로그인중...</div>
                                    ) : (
                                        <div className="">로그인</div>
                                    )
                                    
                                }
                            </button>
                        </form>

                        {error && <p>{error}</p>}
                    </LoginInput>
                )
            }
            
        </LoginForm>
    )
}

const LoginForm = styled.div`
    max-width: 128rem;
    min-height: 70rem;
    margin: 0 auto;
`

const LoginInput = styled.div`
    text-align: center;
    
    & label {
        display: inline-block;
        text-align: left;
        font-size:1.6rem;
        min-width: 12rem;
        padding: 1rem;
    }

    & input {
        min-width: 30rem;
        height: 3.2rem;
        padding: .5rem;
        font-size: 2rem;
    }

    & button {
        min-width: 42rem;
        font-size: 1.6rem;
        margin-top: 2rem;
        color: #fff;
        background-color: #5d5d5d;
    }

    h3, p{
        font-size: 1.6rem;
    }
`

const Titleh2 = styled.h2`
    
    font-size: 3.2rem;
    font-weight: 700;
    color: #111;
    line-height:1.2;
    padding: 15rem 2rem 5rem;
    text-align: center;

    @media screen and (${divice.tablet}) {
        font-size: 2.2rem;
        padding: 4rem 2rem 3rem;
    }
`
