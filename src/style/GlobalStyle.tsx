import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html body {
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  
  #map {
    width: 100vw;
    height: 100vh;
  }
`;
