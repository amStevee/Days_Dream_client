import styled from "styled-components";

const HomePage = styled.div`
  margin: 1rem;
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
  }
  .posts {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;

    .post {
      display: flex;
      gap: 100px;

      img {
        flex: 2;
        width: 100%;
        max-height: 400px;
        object-fit: cover;
      }

      .content {
        flex: 3;
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
