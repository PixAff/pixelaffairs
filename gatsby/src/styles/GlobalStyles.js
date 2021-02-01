import { createGlobalStyle } from "styled-components";
// import bg from '../assets/images/bg.svg';
// import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF0757;
    --black: #212121;
    --yellow-original: #fffce5;
    --yellow: #fff9e8;
    --white: #fff;
    --grey: #abcace;

    --nav: 78px;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    background: var(--yellow);
  }

  .container {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .container-inner {
    width: 80%;
    padding: 4rem;
  }

  .center {
    text-align: center;
  }

  .scrolled-nav {
    --nav: 54px;
  }

  .page-title {
    margin: 4rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .content {
    transition: all 0.4s;
    padding-top: var(--nav);
  }

  .divider-center {
    text-align: center;
    margin: 0;
  }

  .divider {
    display: inline-block;
    margin-top: 1rem;
    text-align: center;
    width: 60px !important;
    height: 1px;
    border-top: 4px solid var(--red);
  }

  .subtitle {
    color: grey;
    font-size: 1.5rem;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  hr {
    border: 0;
    height: 8px;
  }

  img {
    max-width: 100%;
  }


`;

export default GlobalStyles;
