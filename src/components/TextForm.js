import './TextForm.css'
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleUpperClick = ()=>{
        // console.log("UpperCase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
        if (Text==="") {
          props.showAlert("Enter text before using", "warning");
        }
        else{
        props.showAlert("converted to Uppercase !!", "success");
        }
        
    }
    const handleLowerClick = ()=>{
        // console.log("UpperCase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
        if (Text==="") {
          props.showAlert("Enter text before using", "warning");
        }
        else{
        props.showAlert("converted to Lowercase !!", "success");
        }
        
    }
    const handleClearClick = ()=>{
        // console.log("UpperCase was clicked" + Text);
        setText("");
        if (Text==="") {
          props.showAlert("Enter text before using", "warning");
        }
        else{
        props.showAlert("All text cleared !!", "success");
        }
    }
    const handleOnChange = (event)=>{
        // console.log("Text is Changing");
        setText(event.target.value); 
    }

    const handleCopy = (event)=>{
      let text = document.getElementById('myBox');
      text.select() ;
      navigator.clipboard.writeText(text.value);
      if (Text==="") {
        props.showAlert("Enter text before using", "warning");
      }
      else{
      props.showAlert("All text has been copied tot your clipboard", "success");
      }
  }

  const handleSpaces = (event)=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" ")); 
    if (Text==="") {
      props.showAlert("Enter text before using", "warning");
    }
    else{
    props.showAlert("Extra spaces has been removed", "success");
    }
}

    const [Text, setText] = useState("");

  return (
      <>
    <div className="conatiner">
      <div className="mb-3">
        <h1 className={`text-${props.mode === 'light'? 'dark' : 'light'}`}>Enter Your Text Here</h1>
        <textarea
          className={`form-control text-${props.mode === 'light'? 'dark' : 'light'}`}
          id="myBox"
          rows="10"
          value={Text}
k          style ={{backgroundColor : `${props.mode === 'light'? 'white' : 'grey'}`}}
          onChange = {handleOnChange}
        >
        </textarea>
      </div>
      <button className="btn btn-danger mx-1" onClick={handleUpperClick} > Convert to UpperCase </button>
      <button className="btn btn-danger mx-1" onClick={handleLowerClick}>Convert to LowerCase </button>
      <button className="btn btn-danger mx-1"  onClick={handleClearClick} >Clear Text</button>
      <button className="btn btn-danger mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-danger mx-1" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>    
    <div className={`conatiner my-3 text-${props.mode === 'light'? 'dark' : 'light'}`}>
    <span className = "dark">Your summary of text is </span>
    <span className = "dark-1">{Text.split(" ").length} words and {Text.length - Text.split(" ").length +1} characters.</span>
    </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
