import React from "react";

export default function Alert(props) {
    let capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

  return (
    props.alert && (
      <div style={{transition: "0.5s"}}
        className={`alert alert-${props.alert.type} m-0 alert-dismissible fade show position-absolute w-100`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}: </strong>
        {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
