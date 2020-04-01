import React from "react";
import styled from "styled-components";
import Check from "./Icons/Check";

const StyledInput = styled.div`
  &::before {
    background-color: ${props => props.color};
  }
`;

function SendWishlistInput(props) {
  const { FormClass, handleKeyPress, input, status } = props;
  return (
    <StyledInput
      color={props.color}
      key={input.name}
      className={`${FormClass}_input--container ${FormClass}_input--container--${
        input.width
      } ${input.name}-input ${
        input.type === "textarea"
          ? `${FormClass}_input--container--textarea`
          : ""
      } ${status.active && "activeInput"}`}
    >
      {input.type === "textarea" ? (
        <>
          <textarea
            name={input.name}
            id={input.inputID}
            placeholder={input.label}
            className={`${FormClass}_input ${FormClass}_input--textarea`}
            onKeyUp={e => props.handleKeyPress(e)}
          ></textarea>
        </>
      ) : (
        <>
          <input
            className={`${FormClass}_input ${FormClass}_input--${input.name}`}
            type={input.type}
            name={input.name}
            id={input.inputID}
            onKeyUp={e => props.handleKeyPress(e)}
            maxLength={input.name === "phone" ? 13 : 300}
            required
          />
          <label
            htmlFor={input.name}
            className={`${FormClass}_input--label`}
            style={
              status.value.length > 0
                ? {
                    transform: "translateY(-500%)",
                    opacity: 0
                  }
                : {}
            }
          >
            {input.label}
          </label>
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25.926 25.926"
              style={
                props.status.valid || props.status.value.length <= 0
                  ? {
                      transform: "translateY(-100%)",
                      opacity: 0,
                      overflow: "visible"
                    }
                  : {
                      transform: "translateY(0)",
                      opacity: 1,
                      overflow: "visible"
                    }
              }
            >
              <g id="invalid" transform="translate(0.792 0.792)">
                <circle
                  cx="12"
                  cy="12"
                  r="12"
                  transform="translate(0.171 0.171)"
                  fill="none"
                  stroke="#f32013"
                  strokeMiterlimit="10"
                  strokeWidth="1.926"
                />
                <line
                  x2="14.163"
                  transform="translate(7.575 7.253) rotate(45)"
                  fill="none"
                  stroke="#f32013"
                  strokeWidth="2"
                />
                <line
                  x2="14.163"
                  transform="translate(17.589 7.253) rotate(135)"
                  fill="none"
                  stroke="#f32013"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </>
          <>
            <Check
              style={
                !props.status.valid
                  ? {
                      transform: "translateY(-100%)",
                      overflow: "visible"
                    }
                  : {
                      transform: "translateY(0)",
                      overflow: "visible"
                    }
              }
              circleFill={"none"}
              circleStroke={"#14DB60"}
              pathStroke={"#14DB60"}
            />
          </>
          )}
        </>
      )}
    </StyledInput>
  );
}

export default SendWishlistInput;
