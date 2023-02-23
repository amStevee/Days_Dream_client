import styled from "styled-components";

const LoadingComponent = styled.div`
  height: fit-content;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;

  .post {
    display: flex;
    height: 210px;
    gap: 100px;

    .image {
      flex: 2;
      width: 100%;
      background-color: gray;
      animation: skeleton-pulse 1s ease-in-out infinite;
    }

    .content {
      flex: 3;

      .title {
        height: 16px;
        width: 170px;
        border-radius: 5px;
        overflow: hidden;
        background-color: gray;
        margin-bottom: 10px;
        animation: skeleton-pulse 1s ease-in-out infinite;
      }
      .desc {
        overflow: hidden;
        background-color: gray;
        border-radius: 7px;
        height: 100px;
        margin-bottom: 10px;
        animation: skeleton-pulse 1s ease-in-out infinite;
      }
      .button {
        height: 20px;
        width: 70px;
        border-radius: 4px;
        overflow: hidden;
        background-color: gray;
        animation: skeleton-pulse 1s ease-in-out infinite;
      }
    }
  }

  .skeleton-loader {
    height: 150px;
    width: 100%;
    background-color: #ccc;
    border-radius: 4px;
    margin-bottom: 8px;
    animation: skeleton-pulse 1s ease-in-out infinite;
  }

  @keyframes skeleton-pulse {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.4;
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
    .post {
      flex-direction: column;
      gap: 3px;

      .image {
        flex: 1;
        width: 100%;
        height: 40%;
        margin-bottom: 10px;
        /* max-height: 200px; */
      }

      .content {
        flex: 2;
      }
    }
  }
`;

export default LoadingComponent;
