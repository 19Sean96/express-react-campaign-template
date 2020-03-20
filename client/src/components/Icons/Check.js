import React from "react";
export default props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.926 25.926" style={props.style}>
      <g transform="translate(2031.963 129.963)" id="check">
        <circle
          cx="12"
          cy="12"
          r="12"
          transform="translate(-2031 -129)"
          fill={props.circleFill}
          stroke={props.circleStroke}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M3015.288,2664.107l4.435,4.435,10.522-10.522"
          transform="translate(-5041.764 -2780.565)"
          fill="none"
          stroke={props.pathStroke}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};
