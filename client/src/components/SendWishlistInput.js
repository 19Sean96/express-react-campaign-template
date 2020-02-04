import React from "react";

function SendWishlistInput(props) {
  const { FormClass, handleKeyPress, input, status } = props;
  return (
    <div
      key={input.name}
      className={`${FormClass}_input--container ${FormClass}_input--container--${
        input.width
      } ${
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
          />
          <label htmlFor={input.name} className={`${FormClass}_input--label`}>
            {input.label}
          </label>
        </>
      )}
    </div>
  );
}

export default SendWishlistInput;
