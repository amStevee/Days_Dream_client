import styled from "styled-components";

const FooterComponent = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #c1b49f;
  background-color: ${({ theme }) => theme.color.primary_backround};
  padding: 1rem;
  gap: 2rem;

  .header {
    h2 {
      font-size: xx-large;
    }

    .hcontentent {
      display: flex;
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
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
  }
`;

export default FooterComponent;
