import React, { useEffect, useState } from "react";
import Booklist from "./Booklist";
import Form from "./Form";


// import JsonData from "./data.json";

//practicing with viewing json data
//created a fxn, mapping over the books array i created in db.json
//returning the title and author
//then ViewJsonData returning the 'showDeets' variable
//this only works when 

function ViewJson() {

    const [books, setBooks] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:8000/books')       //fetching the request
            .then(response => response.json())    //returning a promise into JS object for me
            .then(data => { //console.log(data);    //----WORKS!
                setBooks(data);                  //passing in data-the books data
            })
    }, [])   //empty dependecies array (only fires once) but gives an error if i put in []
                //put books in the dependeancy array <--runs the side effect any time the "books" variable changes??
    
    useEffect(() => {
        getBooks();
    }, [])
                function getBooks() {
          
                    // const bookData = { 
                    //     title: title,
                    //     author: author,
                    // }; console.log(bookData) //---WORKS!
                    fetch("http://localhost:8000/books", {
                        method: "POST",   //type of method 
                        headers: {"Content-Type": "application/json"}, //type of content that were sending. we are sending json data
                        body: JSON.stringify() //  the actual data that we're sending. have to turn object into json string-JSON.stringify does this
                    })
                  }

                function deleteBook(id) {
                    fetch("http://localhost:8000/books", {
                        method: "DELETE"
                    })
                        .then(resp=> resp.json())
                        .then(data=> {
                            getBooks(data);
                        })
            
                }         

            

            
    return(
        <>
            <Form getBooks={getBooks}/>
            {books && <Booklist books={books} deleteBook={deleteBook}/>}
        </>  
    );
}

export default ViewJson;