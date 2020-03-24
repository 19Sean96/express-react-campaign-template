import React from "react";
export default props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-icon"
      viewBox="0 0 40.414 40.414"
    >
      <g transform="translate(-344 -8150.793)">
        <line
          id="arrowLine"
          x2="39"
          transform="translate(344 8171)"
          fill="none"
          stroke={props.color}
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <path
          id="arrowPath"
          d="M363.5,8190.5,383,8171l-19.5-19.5"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="4"
          stroke={props.color}
        />
      </g>
    </svg>
  );
};
