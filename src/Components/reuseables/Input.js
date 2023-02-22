import React, { useState } from "react";
import StyledInput from "../../styles/Input.styled";

export default function Input(props) {
  const [focused, setFocused] = useState(false);
  const handlefocused = () => {
    setFocused(true);
  };

  return (
    <StyledInput>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        pattern={props.pattern}
        onBlur={handlefocused}
        onFocus={() => props.name === "confirmPassword" && setFocused(true)}
        onChange={props.handleChange}
        focused={focused.toString()}
      />
    </StyledInput>
  );
}
