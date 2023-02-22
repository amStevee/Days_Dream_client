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

  .header h4 {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }

  .socials {
    display: flex;
    flex-direction: column;
    gap: 3px;
    .icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default FooterComponent;
