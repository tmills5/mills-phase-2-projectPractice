import React, { useState } from "react";



function Form() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    function handleTitleChange(event) {
        setTitle(event.target.value);
      }
      
      function handleAuthorChange(event) {
        setAuthor(event.target.value);
      }


    function handleSubmit() {
        

        //getBooks("")
        setTitle("");
        setAuthor("");

    };
   

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Title' value={title} onChange={handleTitleChange} />
            <input type='text' placeholder='Author' value={author} onChange={handleAuthorChange}  />
            <button type='submit' name='submit'>Submit</button>
        </form>
        
        <input type="text" placeholder="filter"/>
        </>
    )
}

export default Form;