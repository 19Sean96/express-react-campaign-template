import React from "react";
export default (props) => {
    return (
      <div className="WishlistHowTo_guide--step WishlistHowTo_guide--step_4">
        <div className="icon--container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.595 130.595">
            <g transform="translate(-1255.549 -409.285)">
              <circle
                cx="49.691"
                cy="49.691"
                r="49.691"
                transform="translate(1271.156 424.892)"
              />
              <path
                d="M1322.636,454.48l19.791,15.942-19.791,17.043V476.47c-9.346,0-17.592,3.68-21.99,10.995v-.519c0-11.855,9.9-21.471,21.99-21.471Z"
                fill={props.color}
              />
              <circle
                cx="63.298"
                cy="63.298"
                r="63.298"
                transform="translate(1257.549 411.285)"
                fill="none"
                stroke={props.color}
                strokeMiterlimit="10"
                strokeWidth="4"
              />
            </g>
          </svg>
        </div>
        <p className="WishlistHowTo_guide--step_text">send us your list!</p>
      </div>
    );
  }