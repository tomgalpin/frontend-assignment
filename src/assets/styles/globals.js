import { createGlobalStyle } from "styled-components";
import { reset } from "assets/styles/reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Inter', sans-serif;
    padding: 20px;
    position: relative;

    &.no-scroll {
      overflow: hidden;
    }
  }
`;

export default GlobalStyle;
