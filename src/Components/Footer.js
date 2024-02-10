import React from "react";

export default function Footer(props) {
  const FotterText = {
    color: "#000",
  };
  return (
    <div>
      <div
        className="FooterContainer"
        style={{
          backgroundColor: props.mode === "dark" ? "#212529" : "#e9ecef",
        }}
      >
        <div
          className="Text"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <p className="copyright">
            <span style={{ color: props.mode === "dark" ? "white" : "black" }}>
              A Complete Project by{" "}
              <a
                href="https://github.com/rahul3133"
                target="_blank"
                style={{ fontFamily: "Algerian" }}
              >
                Rahul
              </a>
            </span>
            <br />
            &copy;<a href="">Copyright</a> by{" "}
            <a href="https://rahul3133.github.io/codewithrahul.com/htmls/index.html" target="_blank">
              CodeJourneyWithRahul
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
