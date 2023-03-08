import styled from "styled-components";

const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f7f7f7;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 500px;
    width: 300px;
    margin: auto;

    .file {
      border: 2px solid ${({ theme }) => theme.color.primary_backround};
      display: flex;
      align-items: center;
      gap: 1.5rem;
      cursor: pointer;

      .fauser {
        background-color: #ececec;
        border-radius: 50%;
        display: flex;
        padding: 5px 5px 0px 5px;
        overflow: hidden;
      }
      .img {
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.color.primary_backround};
        img {
          object-fit: cover;
          border-radius: 50%;
        }
      }

      span {
        font-weight: 600;
        color: gray;
      }
    }

    label {
      display: flex;
      font-weight: 500;
      color: ${({ theme }) => theme.color.primary_backround};
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
