import React from "react";
import BookList from "./BookList";
import ListCss from '../assets/css/List.module.css';
import styled from "styled-components";
import { divice } from "@/assets/css/breakPoint";

const BookListInline = ({ books }) => {

    const handleRent = (id , title ) => {
        confirm(`${title} 을 대여 하시겠습니까?`);
    }

    const handleBuy = (id, title) => {
        confirm(`${title} 을 구매 하시겠습니까?`);
    }

    return (
        <>
            <div>
                <InlineBookUl>
                    {books.map(book => (
                        <BookList key={book.id} book={book} handleRent={() => (handleRent(book.id, book.title))} handleBuy={() => handleBuy(book.id, book.title)}/>
                    ))}
                </InlineBookUl>
            </div>
        </>
    )
}

const InlineBookUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    @media screen and (${divice.mobile}) {
        flex-wrap: wrap;
    }
`

export default BookListInline;

