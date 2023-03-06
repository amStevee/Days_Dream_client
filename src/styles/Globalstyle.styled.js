import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;

}

a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

.logo {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container {
    max-width: 1024px;
    margin: auto;
}


.readmore:hover {
    background-color: #c1b49f;
    border: none;
    font-weight: 700;
    color: #fff;
  }

`;

export default GlobalStyle;
