/* eslint-disable react/button-has-type */
import React from "react";

function SubmitButton({ text, type, onSubmit, isDisabled }) {
  return (
    <button
      className="btn-primary"
      onSubmit={onSubmit}
      disabled={isDisabled}
      type={type}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
