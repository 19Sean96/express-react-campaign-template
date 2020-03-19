import React from "react";
export default props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 37">
      <g transform="translate(1.5 1.5)">
        <path
          d="M379,1636H349a8,8,0,0,1-8-8v-26h46v26A8,8,0,0,1,379,1636Z"
          transform="translate(-341 -1602)"
          fill="none"
          stroke={props.color}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M346.293,1607.952,364,1624l17.807-16.073"
          transform="translate(-341 -1602)"
          fill="none"
          stroke={props.color}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};
