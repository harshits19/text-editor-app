import React, { useState } from "react";

export default function TextArea() {
  const handleUpperCase = () => {
    let curr = text.toUpperCase();
    updateText(curr);
  };
  const handleLowerCase = () => {
    updateText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    updateText(event.target.value);
  };
  const handleClearClick = () => {
    let curr = "";
    updateText(curr);
  };

  const [text, updateText] = useState("Enter the text");
  return (
    <>
      <div className="container my-3">
        <div className="mb-3 row">
          <h2>Enter the Text for Operations</h2>
          <textarea
            className="form-control"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpperCase}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={handleLowerCase}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div className="container">
        <p className="my-2">
          Text has{" "}
          {
            text.split(/\s+/).filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
