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
  gap: 1rem;

  .header {
    width: 200px;
    .hcontentent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;

      button {
        outline: none;
        border: none;
        background-color: #f2f2f2;
        padding: 10px;
        border-radius: 50%;
        color: #000;
      }

      a {
        color: #f2f2f2;
      }
    }
    h4 {
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
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
