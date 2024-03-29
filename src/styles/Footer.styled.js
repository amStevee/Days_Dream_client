import styled from "styled-components";

const FooterComponent = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #c1b49f;
  background-color: ${({ theme }) => theme.color.primary_backround};
  padding: 2rem;
  gap: 2rem;
  width: 100%;

  h2 {
    font-size: xx-large;
    font-weight: bolder;
  }
  .header {
    .hcontentent {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      gap: 10px;

      button {
        outline: none;
        border: none;
        background-color: #f2f2f2;
        padding: 10px;
        border-radius: 45%;
        color: #000;
      }

      button:hover,
      button:focus {
        transform: scale(1.1);
        transition: transform 2ms ease-in;
        background-color: gray;
        color: #f2f2f2;
      }

      a {
        color: #f2f2f2;
      }
    }
  }

  .social {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .icons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      gap: 10px;

      a {
        span {
          margin-left: 10px;
        }
      }
    }

    .icons a:hover,
    .icons a:focus {
      transform: scale(1.1);
      transition: transform 2ms ease-in;
      color: #f2f2f2;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    .icons {
      flex-direction: row;
    }
  }
`;

export default FooterComponent;
