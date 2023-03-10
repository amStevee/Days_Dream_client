import styled from "styled-components";

const HomePage = styled.div`
  margin: 1rem;

  .ql-editor {
    text-align: justify;
    padding: 0 !important;
  }

  .readm {
    border: 1px solid #c1b49f;
    background: transparent;
    margin-top: 0.5rem;
    padding: 0.9rem;
    color: #c1b49f;
  }
  .desc {
    height: 6rem;
    overflow: hidden;
    margin: 0;
  }
  .posts {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;

    .editor {
      height: 40%;
      border: none;
      padding: 0;
      margin: 0;
      text-align: justify;

      p {
        margin: 0;
        padding: 0;
      }
    }

    .post {
      display: flex;
      gap: 100px;

      .image {
        flex: 2;
        img {
          width: 100%;
          max-height: 200px;
          object-fit: cover;
        }
      }

      .content {
        flex: 3;
      }
    }

    .pagination {
      margin: 10px;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      color: #c1b49f;
      gap: 10px;

      button {
        outline: none;
        border: none;
        background: transparent;
        padding: 10px;
      }
      button:hover {
        color: #000;
        background: lightgray;
        border-radius: 5px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .post {
      &:nth-child(2n + 1) {
        flex-direction: row-reverse;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .posts {
      .post {
        flex-direction: column;
        gap: 3px;

        img {
          flex: 1;
          width: 100%;
          max-height: 200px;
          object-fit: cover;
        }

        .content {
          flex: 2;
          h1 {
            font-size: larger;
            margin-bottom: 7px;
          }

          p {
            font-size: small;
            margin-bottom: 7px;
          }
        }
      }
    }
  }
`;

export default HomePage;
