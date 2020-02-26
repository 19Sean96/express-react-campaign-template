import React from "react";

function WishlistHowTo(props) {
  return (
    <div
      className={`WishlistHowTo  ${!props.isOpen && "WishlistHowTo--inactive"}`}
    >
      <section className={`WishlistHowTo_popup`}>
        <h1 className="WishlistHowTo_popup-title">
          How to make your wishlist:
        </h1>
        <div className="WishlistHowTo_popup-guide">
          <div className="WishlistHowTo_popup-guide--step WishlistHowTo_popup-guide--step_1">
            <div className="WishlistHowTo_popup-guide--step_icon--container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 114.228 90.152"
              >
                <g dataname="step 1" transform="translate(-485.923 -426.207)">
                  <path
                    dataname="Path 1"
                    d="M558.9,514.618H487.664V467.455a10.618,10.618,0,0,1,10.618-10.617H569.52V504A10.617,10.617,0,0,1,558.9,514.618Z"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="3.482"
                  />
                  <path
                    id="Path_2"
                    dataname="Path 2"
                    d="M502.109,456.838v-4.815a9.63,9.63,0,0,1,9.63-9.63h72.226v48.15a9.63,9.63,0,0,1-9.63,9.63H569.52"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="3.482"
                  />
                  <path
                    id="Path_3"
                    dataname="Path 3"
                    d="M516.554,442.393v-4.815a9.63,9.63,0,0,1,9.63-9.63H598.41V476.1a9.63,9.63,0,0,1-9.63,9.63h-4.815"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="3.482"
                  />
                  <circle
                    id="Ellipse_1"
                    dataname="Ellipse 1"
                    cx="10.792"
                    cy="10.792"
                    r="10.792"
                    transform="translate(509.112 482.69)"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="3.482"
                  />
                  <rect
                    id="Rectangle_1"
                    dataname="Rectangle 1"
                    width="19.4"
                    height="19.4"
                    transform="translate(530.697 471.711)"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                    strokeWidth="3.482"
                  />
                </g>
              </svg>
            </div>
            <p className="WishlistHowTo_popup-guide--step_text">
              browse the item catalog
            </p>
          </div>
          <div className="WishlistHowTo_popup-guide--arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.529 25.402">
              <path
                dataname="Path 8"
                d="M663.9,465.227l11.287,11.287L663.9,487.8"
                transform="translate(-662.49 -463.813)"
                fill="none"
                stroke={props.color}
                strokeMiterlimit="10"
                strokeWidth="4"
              />
            </svg>
          </div>

          <div className="WishlistHowTo_popup-guide--step WishlistHowTo_popup-guide--step_2">
            <div className="WishlistHowTo_popup-guide--step_icon--container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 121.804 90.171"
              >
                <g
                  id="step_2"
                  dataname="step 2"
                  transform="translate(-739.915 -426.378)"
                >
                  <g id="Group_2" dataname="Group 2">
                    <g id="Stacks">
                      <path
                        id="Path_4"
                        dataname="Path 4"
                        d="M828.056,498.246H741.915V441.217a12.839,12.839,0,0,1,12.838-12.839h86.141v57.03A12.838,12.838,0,0,1,828.056,498.246Z"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                      />
                    </g>
                    <circle
                      id="Ellipse_2"
                      dataname="Ellipse 2"
                      cx="13.05"
                      cy="13.05"
                      r="13.05"
                      transform="translate(767.85 459.639)"
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                    />
                    <rect
                      id="Rectangle_2"
                      dataname="Rectangle 2"
                      width="23.458"
                      height="23.458"
                      transform="translate(793.95 446.363)"
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                    />
                  </g>
                  <rect
                    id="Rectangle_3"
                    dataname="Rectangle 3"
                    width="54.005"
                    height="54.005"
                    transform="translate(807.714 462.544)"
                  />
                  <g id="Zoom_In" dataname="Zoom In">
                    <line
                      id="Line_11"
                      dataname="Line 11"
                      x2="9.687"
                      transform="translate(831.106 488.999)"
                      fill="none"
                      stroke={props.color}
                      strokeMiterlimit="10"
                      strokeWidth="1.937"
                    />
                    <line
                      id="Line_12"
                      dataname="Line 12"
                      y1="9.687"
                      transform="translate(835.949 484.155)"
                      fill="none"
                      stroke={props.color}
                      strokeMiterlimit="10"
                      strokeWidth="1.937"
                    />
                    <g id="Loupe">
                      <circle
                        id="Ellipse_4"
                        dataname="Ellipse 4"
                        cx="11.624"
                        cy="11.624"
                        r="11.624"
                        transform="translate(824.325 477.375)"
                        fill="none"
                        stroke={props.color}
                        strokeMiterlimit="10"
                        strokeWidth="1.937"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p className="WishlistHowTo_popup-guide--step_text">
              add items to your list
            </p>
          </div>
          <div className="WishlistHowTo_popup-guide--arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.529 25.402">
              <path
                id="Path_8"
                dataname="Path 8"
                d="M663.9,465.227l11.287,11.287L663.9,487.8"
                transform="translate(-662.49 -463.813)"
                fill="none"
                stroke={props.color}
                strokeMiterlimit="10"
                strokeWidth="4"
              />
            </svg>
          </div>

          <div className="WishlistHowTo_popup-guide--step WishlistHowTo_popup-guide--step_3">
            <div className="WishlistHowTo_popup-guide--step_icon--container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 160.916 108.093"
              >
                <g
                  id="step_3"
                  dataname="step 3"
                  transform="translate(-986.122 -421.208)"
                >
                  <rect
                    id="Rectangle_4"
                    dataname="Rectangle 4"
                    width="160.916"
                    height="32.484"
                    transform="translate(986.122 459.013)"
                  />
                  <rect
                    id="Rectangle_5"
                    dataname="Rectangle 5"
                    width="160.916"
                    height="32.484"
                    transform="translate(986.122 496.817)"
                  />
                  <g id="Group_3" dataname="Group 3">
                    <path
                      id="Path_77"
                      dataname="Path 77"
                      d="M1132.079,480.953h-2.524l-2.882,2.883-2.883-2.883h-2.524a2.883,2.883,0,0,1-2.882-2.883h0V467.258h16.578V478.07a2.882,2.882,0,0,1-2.881,2.883Z"
                      fill="none"
                      stroke="#5d5d5d"
                      strokeMiterlimit="10"
                      strokeWidth="1.539"
                    />
                    <g id="Group_43" dataname="Group 43">
                      <line
                        id="Line_13"
                        dataname="Line 13"
                        x2="9.849"
                        transform="translate(1121.811 470.622)"
                        fill="none"
                        stroke="#5d5d5d"
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                      <line
                        id="Line_14"
                        dataname="Line 14"
                        x2="9.849"
                        transform="translate(1121.811 473.7)"
                        fill="none"
                        stroke="#5d5d5d"
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                      <line
                        id="Line_15"
                        dataname="Line 15"
                        x2="7.387"
                        transform="translate(1121.811 476.778)"
                        fill="none"
                        stroke="#5d5d5d"
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                    </g>
                  </g>
                  <g id="Group_4" dataname="Group 4">
                    <path
                      id="Path_77-2"
                      dataname="Path 77"
                      d="M1046.223,518.465H1043.7l-2.882,2.883-2.883-2.883h-2.524a2.883,2.883,0,0,1-2.882-2.883h0V504.77h16.578v10.812a2.883,2.883,0,0,1-2.882,2.883Z"
                      fill="none"
                      stroke={props.color}
                      strokeMiterlimit="10"
                      strokeWidth="1.539"
                    />
                    <g id="Group_43-2" dataname="Group 43">
                      <line
                        id="Line_13-2"
                        dataname="Line 13"
                        x2="9.849"
                        transform="translate(1035.955 508.134)"
                        fill="none"
                        stroke={props.color}
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                      <line
                        id="Line_14-2"
                        dataname="Line 14"
                        x2="9.849"
                        transform="translate(1035.955 511.212)"
                        fill="none"
                        stroke={props.color}
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                      <line
                        id="Line_15-2"
                        dataname="Line 15"
                        x2="7.387"
                        transform="translate(1035.955 514.29)"
                        fill="none"
                        stroke={props.color}
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                    </g>
                  </g>
                  <g id="Group_5" dataname="Group 5">
                    <g id="Stacks">
                      <path
                        id="Path_5"
                        dataname="Path 5"
                        d="M1015.441,482.712H995.274V469.36a3.006,3.006,0,0,1,3.006-3.006h20.167v13.352A3.006,3.006,0,0,1,1015.441,482.712Z"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                    </g>
                    <circle
                      id="Ellipse_3"
                      dataname="Ellipse 3"
                      cx="3.055"
                      cy="3.055"
                      r="3.055"
                      transform="translate(1001.346 473.673)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.539"
                    />
                    <rect
                      id="Rectangle_6"
                      dataname="Rectangle 6"
                      width="5.492"
                      height="5.492"
                      transform="translate(1007.457 470.565)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.539"
                    />
                  </g>
                  <rect
                    id="Rectangle_7"
                    dataname="Rectangle 7"
                    width="160.916"
                    height="32.484"
                    transform="translate(986.122 421.208)"
                  />
                  <g id="Group_6" dataname="Group 6">
                    <path
                      id="Path_77-3"
                      dataname="Path 77"
                      d="M1132.079,443.148h-2.524l-2.882,2.884-2.883-2.884h-2.524a2.882,2.882,0,0,1-2.882-2.883h0V429.454h16.578v10.811a2.881,2.881,0,0,1-2.881,2.883Z"
                      fill="none"
                      stroke="#5d5d5d"
                      strokeMiterlimit="10"
                      strokeWidth="1.539"
                    />
                    <g id="Group_43-3" dataname="Group 43">
                      <line
                        id="Line_13-3"
                        dataname="Line 13"
                        x2="9.849"
                        transform="translate(1121.811 432.818)"
                        fill="none"
                        stroke="#5d5d5d"
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                      <line
                        id="Line_14-3"
                        dataname="Line 14"
                        x2="9.849"
                        transform="translate(1121.811 435.896)"
                        fill="none"
                        stroke="#5d5d5d"
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                      <line
                        id="Line_15-3"
                        dataname="Line 15"
                        x2="7.387"
                        transform="translate(1121.811 438.974)"
                        fill="none"
                        stroke="#5d5d5d"
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                    </g>
                  </g>
                  <g id="Group_7" dataname="Group 7">
                    <g id="Stacks-2" dataname="Stacks">
                      <path
                        id="Path_6"
                        dataname="Path 6"
                        d="M1015.441,444.907H995.274V431.556a3.006,3.006,0,0,1,3.006-3.006h20.167V441.9A3.006,3.006,0,0,1,1015.441,444.907Z"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                    </g>
                    <circle
                      id="Ellipse_4"
                      dataname="Ellipse 4"
                      cx="3.055"
                      cy="3.055"
                      r="3.055"
                      transform="translate(1001.346 435.868)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.539"
                    />
                    <rect
                      id="Rectangle_8"
                      dataname="Rectangle 8"
                      width="5.492"
                      height="5.492"
                      transform="translate(1007.457 432.76)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.539"
                    />
                  </g>
                  <g id="Group_8" dataname="Group 8">
                    <g id="Stacks-3" dataname="Stacks">
                      <path
                        id="Path_7"
                        dataname="Path 7"
                        d="M1016.211,520.257H996.044V506.9a3.006,3.006,0,0,1,3.006-3.006h20.167v13.352A3.006,3.006,0,0,1,1016.211,520.257Z"
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1.539"
                      />
                    </g>
                    <circle
                      id="Ellipse_5"
                      dataname="Ellipse 5"
                      cx="3.055"
                      cy="3.055"
                      r="3.055"
                      transform="translate(1002.116 511.218)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.539"
                    />
                    <rect
                      id="Rectangle_9"
                      dataname="Rectangle 9"
                      width="5.492"
                      height="5.492"
                      transform="translate(1008.227 508.11)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.539"
                    />
                  </g>
                  <line
                    id="Line_1"
                    dataname="Line 1"
                    x2="77.668"
                    transform="translate(1059.818 519.51)"
                    fill="none"
                    stroke="#5d5d5d"
                    strokeMiterlimit="10"
                    strokeWidth="1.539"
                  />
                </g>
              </svg>
            </div>
            <p className="WishlistHowTo_popup-guide--step_text">
              add any note for order details
            </p>
          </div>
          <div className="WishlistHowTo_popup-guide--arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.529 25.402">
              <path
                id="Path_8"
                dataname="Path 8"
                d="M663.9,465.227l11.287,11.287L663.9,487.8"
                transform="translate(-662.49 -463.813)"
                fill="none"
                stroke={props.color}
                strokeMiterlimit="10"
                strokeWidth="4"
              />
            </svg>
          </div>

          <div className="WishlistHowTo_popup-guide--step WishlistHowTo_popup-guide--step_4">
            <div className="WishlistHowTo_popup-guide--step_icon--container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130.595 130.595"
              >
                <g
                  id="step_4"
                  dataname="step 4"
                  transform="translate(-1255.549 -409.285)"
                >
                  <circle
                    id="Ellipse_6"
                    dataname="Ellipse 6"
                    cx="49.691"
                    cy="49.691"
                    r="49.691"
                    transform="translate(1271.156 424.892)"
                  />
                  <path
                    id="Reply_-_Alt"
                    dataname="Reply - Alt"
                    d="M1322.636,454.48l19.791,15.942-19.791,17.043V476.47c-9.346,0-17.592,3.68-21.99,10.995v-.519c0-11.855,9.9-21.471,21.99-21.471Z"
                    fill={props.color}
                  />
                  <circle
                    id="Ellipse_7"
                    dataname="Ellipse 7"
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
            <p className="WishlistHowTo_popup-guide--step_text">
              send us your list!
            </p>
          </div>
        </div>
        <button
          className="WishlistHowTo_popup-button"
          onClick={props.closeModal}
        >
          <span>let's go</span>
          <span
            className="WishlistHowTo_popup-button-icon--container"
            data-type="arrow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="WishlistHowTo_popup-button-icon"
              viewBox="0 0 40.414 40.414"
            >
              <g transform="translate(-344 -8150.793)">
                <line
                  id="arrowLine"
                  x2="39"
                  transform="translate(344 8171)"
                  fill="none"
                  stroke={props.colorLight}
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <path
                  id="arrowPath"
                  d="M363.5,8190.5,383,8171l-19.5-19.5"
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  stroke={props.colorLight}
                />
              </g>
            </svg>
          </span>
        </button>
      </section>
    </div>
  );
}

export default WishlistHowTo;
