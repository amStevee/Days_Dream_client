import styled from "styled-components";

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: yellow;
  display: none;
`;

const StyledRegister = styled.div`
  background-color: purple;
  form {
    background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    );

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 6px;
    width: 300px;
    color: #fff;
    border-radius: 5px;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 6px;
      width: 250px;

      label {
        align-self: flex-start;
      }

      input:invalid[focused="true"] {
        border: 2px solid red;
      }
      span {
        font-size: 12px;
        color: yellow;
        display: none;
      }
      input:invalid[focused="true"] ~ span {
        display: block;
      }
    }
  }

  button {
    outline: none;
    border: none;
    color: #fff;
    padding: 10px 20px;
    margin: 10px;
    font-weight: 700;
    font-size: 1rem;
    background-color: rgb(69, 12, 154);
    cursor: pointer;
  }

  button:active {
    transform: scale(0.98);
  }
`;

export default StyledRegister;
