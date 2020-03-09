import React from "react";
import styled from 'styled-components'

const StyledInput = styled.div`
  &::before {
    background-color: ${props => props.accentColor}
  }
`;

function SendWishlistInput(props) {
  const { FormClass, handleKeyPress, input, status } = props;
  return (
    <StyledInput
      accentColor={props.accentColor}
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
            //   onClick={checkInputValue}
            onKeyUp={e => props.handleKeyPress(e)}
            // onInvalid={console.log("THE INPUT IS INVALID")}
            // pattern={
            //   (input.name === "name") ? "[A-Za-z ]{2,}"
            //     : input.name === "email" ? "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            //     : input.name === "phone" ? "/(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})$/" : "[A-Za-z0-9 ]{2,}" 
            // }
            maxLength={
              input.name === "phone" ? 13 : 300
            }
            style={props.status.value.length === 0 ? {
              borderBottom: "none"
            } : props.status.valid ? {
              borderBottom: "3px solid green"
            } : {
              borderBottom: "3px solid red"
            }}
            required
          />
          <label htmlFor={input.name} className={`${FormClass}_input--label`}>
            {input.label}
          </label>
        </>
      )}
    </StyledInput>
  );
}

export default SendWishlistInput;
