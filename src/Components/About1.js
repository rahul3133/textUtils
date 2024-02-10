import React, { useEffect } from 'react';

export default function About1(props) {
  useEffect(() => {
    document.title = "TextUtils - Learn || CodeJourneyWithRahul";
  }, []);
  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: props.mode === "dark" ? "#303236" : "#fff",
            paddingBottom: "8%",
          }}
          className="position-relative overflow-hidden text-center text-white"
        >
          <div
            className="col-md-6 p-lg-5 my-4 mx-auto"
            style={{ color: props.mode === "dark" ? "#fff" : "#000" }}
          >
            <h1 className="display-3 fw-bold">Created for Students</h1>
            <h3 className="fw-normal my-3 text-bg-primary p-2 rounded">
              Learn How to use this app?
            </h3>
          </div>
          <div className="mb-5 d-flex justify-content-center card-main-flex-box">
            <div
              className="card m-2 bg-dark text-white w-100"
              style={{
                border:
                  props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <img
                style={{ padding: "10px" }}
                height="250"
                src={process.env.PUBLIC_URL + "/Search box.png"}
                className="card-img-top"
                alt="First instruction"
              />
              <div
                className="card-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#212529" : "#e9ecef",
                  color: props.mode === "dark" ? "#fff" : "#000",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title">First Step:</h5>
                <p className="card-text">
                  In this filed you need to enter and paste your text which do
                  you want to change or manipulating.
                  <br />
                  So that Computer can get your text for changing.
                </p>
              </div>
            </div>
            <div
              className="card m-2 bg-dark w-100"
              style={{
                border:
                  props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <img
                style={{ padding: "10px" }}
                height="250"
                src={process.env.PUBLIC_URL + "/function Buttons.png"}
                className="card-img-top"
                alt="Second instruction"
              />
              <div
                className="card-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#212529" : "#e9ecef",
                  color: props.mode === "dark" ? "#fff" : "#000",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title">Second Step:</h5>
                <p className="card-text">
                  If you had entered your text then you can use these button
                  function. You can click on any button which do you want to do
                  with your text. <br />
                  So that computer can do with your text according to your
                  choice.
                </p>
              </div>
            </div>
            <div
              className="card m-2 bg-dark w-100"
              style={{
                border:
                  props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <img
                style={{ padding: "10px" }}
                height="250"
                src={process.env.PUBLIC_URL + "/Result box.png"}
                className="card-img-top"
                alt="Third instruction"
              />
              <div
                className="card-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#212529" : "#e9ecef",
                  color: props.mode === "dark" ? "#fff" : "#000",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title">Third (last) Step:</h5>
                <p className="card-text">
                  If you had done these two steps already. Then Congratulations,
                  your text is ready to be used.
                  <br />
                  If any probleum is occured in your text. Make sure these steps
                  should be correct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
