import React from "react";
import Step1 from "./Icons/Step1"
import Step2 from "./Icons/Step2"
import Step3 from "./Icons/Step3"
import Step4 from "./Icons/Step4"
import ArrowRight from "./Icons/ArrowRight"
function WishlistHowTo(props) {
  const noScroll = `
  *:not(.Nav_Wishlist-check):not(.WishlistHowTo_guide):not(.WishlistHowTo_guide--step) {
    overflow-y: hidden;
  }
`;
  return (
    <div
      className={`WishlistHowTo  ${!props.isOpen && "WishlistHowTo--inactive"}`}
    >
      {props.isOpen && <style>{noScroll}</style>}
      <section className="WishlistHowTo_popup">
        <h1 className="WishlistHowTo_title"><span style={{
          borderBottom: `4px solid ${props.color}`
        }}>How to</span> make your wishlist:</h1>
        <div className="WishlistHowTo_guide">
          <Step1 color={props.color} />
          <StepArrow color={props.color} />
          <Step2 color={props.color} />
          <StepArrow color={props.color} />
          <Step3 color={props.color} />
          <StepArrow color={props.color} />
          <Step4 color={props.color} />
        </div>
        <button className="WishlistHowTo_button" onClick={props.closeModal}>
          <span>let's go</span>
          <span className="arrow-icon--container" type="arrow">
            <ArrowRight color={props.color} />
          </span>
        </button>
      </section>
    </div>
  );
}

export default WishlistHowTo;

function StepArrow(props) {
  return (
    <div className="WishlistHowTo_guide--arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.529 25.402">
        <path
          d="M663.9,465.227l11.287,11.287L663.9,487.8"
          transform="translate(-662.49 -463.813)"
          fill="none"
          stroke={props.color}
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}


