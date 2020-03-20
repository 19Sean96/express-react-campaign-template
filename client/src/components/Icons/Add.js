import React from "react";
export default props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25.926 25.926"
      className={props.className}
    >
      <g transform="translate(0.792 0.792)">
          <circle
            cx="12"
            cy="12"
            r="12"
            transform="translate(0.171 0.171)"
            fill={props.circleFill}
            stroke={props.circleStroke}
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        <line
          x2="10"
          transform="translate(7.171 12.171)"
          fill="none"
          stroke={props.lineStroke}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          y1="10"
          transform="translate(12.171 7.171)"
          fill="none"
          stroke={props.lineStroke}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};
