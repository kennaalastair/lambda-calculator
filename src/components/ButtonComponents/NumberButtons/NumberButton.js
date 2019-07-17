import React from "react";

const NumberButton = ({ number }) => {
  return (
    <button className="number-btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </button>
  );
};

export default NumberButton;