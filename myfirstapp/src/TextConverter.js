import { useState } from "react";


function countWords(str) {
    return str.split(' ').filter(word => word !== '').length;   
  }

export default function TextConverter(props) {
    const [text, setText] = useState("Enter a text ");

    const handleUpperClick = () => {
        setText(text.toUpperCase());
    }
    const handleLowerClick = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (e) => {
        setText(e.target.value);

    }
    return (
        <>
            <div>
                <div className="container">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control mb-3" value={text} onChange={handleOnChange} id="mybox" rows="3"></textarea>
                    <button className="btn btn-primary m-1" onClick={handleUpperClick}>Upper Case</button>
                    <button className="btn btn-primary m-1" onClick={handleLowerClick}>Lower Case</button>
                </div>
            </div>
            <div className="container">
                <h1>Summary</h1>
                <p>{countWords(text)} Words,{text.length} Characters</p>
                <p>{0.008*countWords(text)} Minutes to Read Above Paragraph</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}