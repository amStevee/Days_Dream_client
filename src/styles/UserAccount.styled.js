import styled from "styled-components";

const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  background-color: #f7f7f7;

  #isadmin {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    max-width: 700px;
    width: 100%;
    height: 500px;
    overflow: scroll;
    gap: 1rem;

    .headTitle {
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      text-decoration: none;
      list-style: none;
    }

    .header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .search {
        border: 1px solid gray;
        padding: 5px;
        border-radius: 7px;
        height: 40px;
        gap: 2px;

        i,
        button {
          border: none;
          background-color: inherit;
        }

        input {
          border: none;
          outline-color: lightgray;
          border-radius: 7px;
          padding: 1rem;
          height: 37px;
          background-color: inherit;
        }
      }
    }

    .list li {
      :nth-child(even) {
        background-color: #ffeeeeee;
      }
      display: flex;
      justify-content: space-between;
      gap: 1.9rem;

      button {
        padding: 1rem;
        border: none;
        font-weight: bold;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    width: 300px;
    /* margin: 50%; */
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
