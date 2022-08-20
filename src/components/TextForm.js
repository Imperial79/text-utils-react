import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("button clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const onChanged = (event) => {
    setText(event.target.value);
  };

  const handleClearBtn = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "", "success");
  };
  return (
    <div className="container">
      <div className="mb-3">
        <h1
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
          {props.title}{" "}
        </h1>

        <textarea
          className="form-control"
          value={text}
          onChange={onChanged}
          placeholder="Write Here"
          id="myBox"
          rows="9"
          style={{
            background: props.mode === "dark" ? "#212529" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button
        className="btn btn-primary mx-2 my-1"
        onClick={handleUpClick}
        disabled={text.length === 0}
      >
        Convert to uppercase
      </button>
      <button
        className="btn btn-primary mx-2 my-1"
        onClick={handleLowClick}
        disabled={text.length === 0}
      >
        Convert to Lowercase
      </button>
      <button
        className="btn btn-primary mx-2 my-1"
        onClick={handleClearBtn}
        disabled={text.length === 0}
      >
        Clear
      </button>

      <button
        className="btn btn-primary mx-2 my-1"
        onClick={handleCopy}
        disabled={text.length === 0}
      >
        Copy to Clipboard
      </button>

      <div
        className="card"
        style={{
          backgroundColor: props.mode === "dark" ? "grey" : "white",
          borderRadius: 6,
          marginTop: 10,
        }}
      >
        <p
          style={{
            margin: "10px",
            color: props.mode === "dark" ? "white" : "black",
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          {text.length} characters and{" "}
          {
            //splitting the string with white spaces and newline
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words{" "}
        </p>
      </div>

      <h2
        style={{
          color: props.mode === "dark" ? "white" : "black",
          marginTop: 12,
        }}
      >
        Preview
      </h2>
      <p
        style={{
          // color: props.mode === "dark" ? "white" : "black",
          color: "grey",
        }}
      >
        {text.length === 0 ? "Enter Something to preview it here !!" : text}
      </p>
    </div>
  );
}
