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

      #insta {
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );
        -webkit-background-clip: text;
        /* Also define standard property for compatibility */
        background-clip: text;
        -webkit-text-fill-color: transparent;

        font-size: 200px; /* change this to change the size*/
      }
    }
  }
`;

export default FooterComponent;
