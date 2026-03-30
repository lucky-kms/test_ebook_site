import React from "react";
import { Link } from "react-router-dom";
import { getCoverUrl } from "@/utils/imageMap";
import styled from "styled-components";

const BookList = ({ book, handleRent, handleBuy }) => {

    const {id, title, author, coverSrc, coverAlt} = book;

    return (
        <li>
            <Link to={`/book_detail/${id}`}
                style={{
                    display: "block",
                    padding: "1.2rem",
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                <span style={{display: "inline-block",width: "9rem", height: "13rem"}}>
                    <img 
                        src={getCoverUrl(coverSrc)} 
                        alt={coverAlt}
                        style={{width: "100%", height:"auto", objectFit: "cover", }}
                        loading="lazy"    
                    />

                    <h3 style={{ marginTop: 10}}>{title}</h3>
                    <p style={{ margin: 0, opacity: 0.7}}>{author}</p>
                </span>
            </Link>
            
            <BtnWrap>
                <BtnRent onClick={handleRent}>대여</BtnRent>
                <BtnBuy type="button" onClick={handleBuy}>구입</BtnBuy>
            </BtnWrap>
        </li>
    )
}

export default BookList;

const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const BtnRent = styled.button`
    width: 5rem;
    height: 3.2rem;
    line-height: 0.925;
    font-size: 1.4rem;
    color:#fff;
    background-color: #111;
    margin: 0;
    padding : 0;
`

const BtnBuy = styled.button`
    width: 5rem;
    height: 3.2rem;
    line-height: 0.925;
    font-size: 1.4rem;
    color:#fff;
    background-color: #111;
    margin: 0;
    padding : 0;
`