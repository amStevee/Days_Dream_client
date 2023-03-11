import styled from "styled-components";

const NavbarComponent = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  position: relative;
  margin: auto;
  color: #c1b49f;
  background-color: ${({ theme }) => theme.color.primary_backround};
  z-index: 1000;

  ul {
    display: flex;
    background-color: ${({ theme }) => theme.color.primary_backround};
    gap: 2rem;
    li {
      list-style: none;

      a {
        color: inherit;
      }

      .currentLink {
        color: #fff;
      }
    }

    button {
      outline: none;
      background: none;
      border: none;
      color: #c1b49f;
      font-weight: 500;
    }
  }

  .writeCategory {
    position: relative;
    font-weight: 500;
  }

  .writeCategory::after {
    content: "_";
    position: absolute;
    right: 0;
    width: 40%;
    border-radius: 50%;
    padding: 5px;
    z-index: -1;
    background-color: #c1b49f;
  }

  @media only screen and (max-width: 600px) {
    .hambugar-menu {
      font-size: x-large;
    }

    ul {
      position: absolute;
      top: -25.5rem;
      right: 0;
      left: 0;
      width: 100vw;
      height: fit-content;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      padding: 3px;
    }

    .drop {
      top: 3.5rem;
      transition: all 0.5s ease-in;
    }
  }
`;

export default NavbarComponent;
