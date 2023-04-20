import styled from "styled-components";

const SinglePage = styled.div`
  display: flex;
  gap: 50px;
  margin: 10px;

  .ql-editor {
    text-align: justify;
    p {
      text-align: justify;
    }
  }

  .content {
    flex: 5;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .user {
      display: flex;
      align-items: center;
      gap: 1.5rem;

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

      .info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        span {
          font-weight: 700;
        }
        p {
          margin: 0;
          padding: 0;
        }
      }
    }

    .edit {
      display: flex;
      gap: 10px;
    }

    h1 {
      color: #333;
      padding: 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default SinglePage;
