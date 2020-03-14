import React from "react";
export default props => {
  return (
    <div className="WishlistHowTo_guide--step WishlistHowTo_guide--step_4">
      <div className="icon--container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.595 130.595"
        >
          <g
            transform="translate(-1083.885 541)"
          >
            <circle
              cx="49.691"
              cy="49.691"
              r="49.691"
              transform="translate(1099.492 -525.393)"
              fill="#000"
            />
            <path
              fill={props.color}
              d="M1319.536,454.48l17,13.694-17,14.64v-9.445c-8.028,0-15.112,3.161-18.89,9.445v-.446a18.7,18.7,0,0,1,18.89-18.444Z"
              transform="translate(-153.867 -948.96)"
            />
            <circle
              stroke={props.color}
              cx="63.298"
              cy="63.298"
              r="63.298"
              transform="translate(1085.885 -539)"
              strokeMiterlimit="10"
              strokeWidth="4"
              fill="none"
            />
            <line
              x2="10"
              transform="translate(1136 -481)"
              stroke={props.color}
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              id="Line_2"
              data-name="Line 2"
              x2="10"
              transform="translate(1136 -476)"
              fill="none"
              stroke={props.color}
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              x2="8"
              transform="translate(1136 -471)"
              fill="none"
              stroke={props.color}
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M15.79,31.924H1V1H23.857V23.857A8.065,8.065,0,0,1,15.79,31.924Z"
              transform="translate(1128.789 -491.674)"
              fill="none"
              stroke={props.color}
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
      <p className="WishlistHowTo_guide--step_text">send us<br />your list!</p>
    </div>
  );
};
