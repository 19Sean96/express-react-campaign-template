import React from "react";
export default props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.414 29.414">
      <g id="Cross" transform="translate(0.397 0.707)">
        <line
          x2="28"
          y2="28"
          transform="translate(0.31)"
          fill="none"
          stroke={props.color}
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <line
          y1="28"
          x2="28"
          transform="translate(0.31)"
          fill="none"
          stroke={props.color}
          strokeMiterlimit="10"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};
