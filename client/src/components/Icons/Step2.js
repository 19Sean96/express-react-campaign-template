import React from "react";
export default (props) => {
    return (
      <div className="WishlistHowTo_guide--step WishlistHowTo_guide--step_2">
        <div className="icon--container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.804 90.171">
            <g transform="translate(-739.915 -426.378)">
              <path
                id="Path_4"
                dataname="Path 4"
                d="M828.056,498.246H741.915V441.217a12.839,12.839,0,0,1,12.838-12.839h86.141v57.03A12.838,12.838,0,0,1,828.056,498.246Z"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <circle
                cx="13.05"
                cy="13.05"
                r="13.05"
                transform="translate(767.85 459.639)"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <rect
                width="23.458"
                height="23.458"
                transform="translate(793.95 446.363)"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <rect
                width="54.005"
                height="54.005"
                transform="translate(807.714 462.544)"
              />
              <line
                x2="9.687"
                transform="translate(831.106 488.999)"
                fill="none"
                stroke={props.color}
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                y1="9.687"
                transform="translate(835.949 484.155)"
                fill="none"
                stroke={props.color}
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <circle
                cx="11.624"
                cy="11.624"
                r="11.624"
                transform="translate(824.325 477.375)"
                fill="none"
                stroke={props.color}
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        <p className="WishlistHowTo_guide--step_text">add items<br />to your list</p>
      </div>
    );
  }