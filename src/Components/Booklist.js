import React from "react";

const Booklist = (props) => { //added{} around books. passing in books to map
    const books = props.books
    const deleteBook = props.deleteBook

     
     
    return (
        <div>
            {/* {
         books.filter(book => book.author === "world4").map(filteredBook => (
             <li>{filteredBook.id}</li>
         ))
     }  */}
            {books.map((book) => (
                <div key={book.id}>
                    <h2> {book.title}</h2>
                    <p> {book.author}</p>
                    <button onClick={()=>deleteBook(book.id)}>delete</button>
                </div>
            ))
            }
        </div>
    )
} 
    
export default Booklist;



// return (
//     <>
//     books.map((book)=> {

//         <div key={book.title}>
//             <h3> {book.title} </h3>
//             <p> {book.author} </p>
//         </div>

//     })
//     </>
// );
// };
