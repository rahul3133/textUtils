import React, { useState } from "react";
import { useEffect } from "react";

export default function TextForm(props) {
  useEffect(() => {
    document.title = "TextUtils - Home || CodeJourneyWithRahul";
  }, []);
  let UpperCase = () => {
    let newText = text.toUpperCase();
    updatedText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  let LowerCase = () => {
    let newText = text.toLowerCase();
    updatedText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  let ClearText = (event) => {
    updatedText(event.target.value="")
    props.showAlert("Textbox is cleared!", "success");
  };

  let CopyText = () => {
    let newText = navigator.clipboard.writeText(text);
    updatedText(newText);
  };

  let handleOnChange = (event) => {
    updatedText(event.target.value);
  };

  let copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied!", "success");
  };

  let handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    updatedText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");
  };

  const removeDuplicates = () => {
    const words = text.split(" ");
    const uniqueWords = Array.from(new Set(words));
    const result = uniqueWords.join(" ");
    updatedText(result);
    props.showAlert("Removed Dublicate Words!", "success");
  };

  const wordCount = () => {
    let regex = /\s+\S+/;
    let numOfWords = text.split(regex);
    return numOfWords.length;
  };

  const textarePlaceholder =
    props.mode === "dark"
      ? "form-control w-100 me-4 dark-placeholder"
      : "form-control w-100 me-4 light-placeholder";

  const [text, updatedText] = useState("");
  return (
    <>
      <div
        className="main-flex-container"
        style={{
          backgroundColor: props.mode === "dark" ? "#303236" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="container">
          <div className="my-4">
            <h1>{props.heading}</h1>
            <textarea
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "#e9ecef",
                color: props.mode === "dark" ? "#fff" : "#000",
                border:
                  props.mode === "dark"
                    ? "1.5px solid #fff"
                    : "1.5px solid #999",
              }}
              placeholder="Write or Paste your text which do you want to manipulate or analyze: "
              onChange={handleOnChange}
              className={textarePlaceholder}
              value={text}
              id="myTextArea"
            ></textarea>
            <div className="buttonFlexBox">
              <div>
                <button
                  disabled={text.length === 0}
                  className="btn btn-primary my-3"
                  style={{ width: "13rem" }}
                  onClick={handleExtraSpace}
                >
                  Remove Extra Space
                </button>
                <br />
                <button
                  disabled={text.length === 0}
                  className="btn btn-primary"
                  style={{ width: "13rem" }}
                  onClick={removeDuplicates}
                >
                  Remove Dublicate words
                </button>
              </div>
              <div>
                <button
                  disabled={text.length === 0}
                  className="btn btn-primary my-3 ms-2"
                  style={{ width: "11.5rem" }}
                  onClick={UpperCase}
                >
                  Convert to UpperCase
                </button>
                <br />
                <button
                  disabled={text.length === 0}
                  className="btn btn-primary ms-2"
                  style={{ width: "11.5rem" }}
                  onClick={LowerCase}
                >
                  Convert to LowerCase
                </button>
              </div>
              <div>
                <button
                  disabled={text.length === 0}
                  className="btn btn-primary my-3 ms-2"
                  style={{ width: "7rem" }}
                  onClick={ClearText}
                  
                >
                  Clear Text
                </button>
                <br />
                <button
                  disabled={text.length === 0}
                  className="btn btn-primary ms-2"
                  style={{ width: "7rem" }}
                  onClick={copyText}
                >
                  Copy Text
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right_container container mt-4">
          <h1 className="">Your Text Result:</h1>
          <div
            className="resultBox"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(33, 37, 41)" : "#e9ecef",
              border:
                props.mode === "dark" ? "1.5px solid #fff" : "1.5px solid #999",
            }}
          >
            <p>Total Characters: {text.length}</p>

            <p>Total Words: {wordCount()}</p>
            <p>
              Minutes to Read ={" "}
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}
            </p>
            <h2>Preview</h2>
            <h3>{text.length > 0 ? text : "Nothing to preview"}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
