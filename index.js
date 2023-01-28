/*import React from "react";
import ReactDOM from "react-dom/client";
import Demo from"./demo";
const demo=() =>{
    return <h2>My first Component</h2>;
};
const root=ReactDOM.createRoot(
    document.getElementById('root'));
    root.render(<Demo/>);
    export default Demo;*/
    
    import React from "react";
    import ReactDom from "react-dom/client";
    
    const BookList = () => {
        return (
        <>
        <Book />
        <Book />
        <Book />
        <Book />
        </>
        );
    };
    
    const Book = () => {
        return (
        <>
        <Title />
        <Author />
        <Image />
        </>
        )
    };
    
    const Image = () => {
        return (
        <>
            <h2>Image Placeholder</h2>
        </>
        )
    }
    
    const Title = () => {
        return (
        <>
            <h2>Book Title</h2>
        </>
        )
    };
    
    const Author = () => {
        return( 
        <>
            <h3>Author</h3>
        </>
        )
    }
    const root=ReactDom.createRoot(document.getElementById("root"));
    root.render(<BookList/>);
    export default BookList;