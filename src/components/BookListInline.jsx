import React from "react";
import BookList from "./BookList";
import ListCss from '../assets/css/List.module.css';

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
                <ul style={{display:"flex", alignItems: "center", justifyContent:"space-between"}}>
                    {books.map(book => (
                        <BookList key={book.id} book={book} handleRent={() => (handleRent(book.id, book.title))} handleBuy={() => handleBuy(book.id, book.title)}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BookListInline;
