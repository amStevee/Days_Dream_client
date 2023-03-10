import styled from "styled-components";

const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    width: 300px;
    margin: 50%;
    padding: 10px;

    .file {
      display: flex;
      align-items: center;
      gap: 1rem;
      overflow: hidden;
      cursor: pointer;

      .fauser {
        background-color: #ececec;
        border-radius: 50%;
        display: flex;
        padding: 5px 5px 0px 5px;
        overflow: hidden;
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }

      span {
        font-weight: 600;
        color: gray;
      }
    }

    label {
      font-weight: 500;
      color: ${({ theme }) => theme.color.primary_backround};
      text-align: start;
    }

    input {
      outline: none;
      border: none;
      border-bottom: 1px solid black;
      background-color: inherit;
    }

    button {
      outline: none;
      border: none;
      font-weight: 600;
      padding: 5px;
      background-color: ${({ theme }) => theme.color.primary_backround};
      color: white;
    }
  }
`;

export default User;
