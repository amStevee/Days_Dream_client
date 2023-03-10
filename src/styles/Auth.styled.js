import styled from "styled-components";
// import { theme } from "./Theme";

const AuthComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  color: #c1b49f;

  .reg {
    display: flex;
    gap: 10px;
    outline: none;
    border: none;
    color: #fff;
    padding: 10px 20px;
    margin: 10px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
  }

  .fauser {
    background-color: #ececec;
    border-radius: 50%;
    display: flex;
    padding: 5px 5px 0px 5px;
    overflow: hidden;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.text};
  }

  p {
    color: #fff;
  }

  form {
    width: 400px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.color.primary_backround};

    label {
      margin-bottom: 2px;
    }

    span {
      color: #e6e6eb;
      font-size: small;
      text-align: center;
      display: none;
    }

    input {
      border: none;
      border-bottom: 1px solid #e6e6eb;
      background: transparent;
      color: #fff;
      outline: none;
      padding-bottom: 1rem;

      ::placeholder {
        color: #c1b49f;
        font-size: large;
      }
    }
    input:not(:focus):not(:placeholder-shown):invalid {
      border: 2px solid red;
    }
    input:not(:focus):not(:placeholder-shown):valid {
      border: 2px solid green;
    }

    input:not(:focus):not(:placeholder-shown):invalid ~ span {
      display: block;
    }
    /* input:not(:focus):not(:placeholder-shown):valid ~ span {
      display: none;
    } */

    button {
      cursor: pointer;
      color: ${({ theme }) => theme.color.text};
      background-color: #c1b49f;
      border: none;
      padding: 0.5rem;
      font-size: large;
      font-weight: 700;
      color: ${({ theme }) => theme.color.primary_backround};
    }

    /* .error {
      color: yellow;
      font-size: 0.7rem;
      text-align: center;
    } */
  }
  .login {
    gap: 2rem;
  }
`;

export default AuthComponent;
