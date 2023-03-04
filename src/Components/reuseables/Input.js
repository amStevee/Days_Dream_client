import React from "react";
import StyledInput from "../../styles/Input.styled";

export default function Input(props) {
  return (
    <StyledInput>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        pattern={props.pattern}
        onChange={props.handleChange}
      />
    </StyledInput>
  );
}
