import { createGlobalStyle } from "styled-components";
import ElegantIcons from "../assets/fonts/ElegantIcons.ttf";

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Rubik, sans serif;
  }

  html {
    min-height: 100%;
    min-width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
  }

  ul {
    list-style: none;
  }

  :root {
    --black: #252525;
    --white: #ffffff;
    --lightgrey: #f7f7f7;
    --mediumgrey: #858585;
    --btnpink: #d35050;
    --btngreen: #78cc41;
    --rubikm: 500;
    --icons: Elegant Icons;
    --veryhigh: 999;
    --high: 888;
    --medium: 777;
    --normal: 666;
  }

  @font-face {
    font-family: Elegant Icons;
    src: url(${ElegantIcons});
  }

`;
