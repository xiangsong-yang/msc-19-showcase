import React from "react";
import "./fonts.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  blue: "#2500E5",
  white: "#FAF9F9",
};

const GlobalStyle = createGlobalStyle`
  body {
      background: ${(props) => props.theme.white};
      color: ${(props) => props.theme.blue};
      font-family: "Suisse Intl"
  }

  a {
      color: ${(props) => props.theme.blue};
  }

  a:hover {
      opacity: 0.5;
      text-decoration: none;
  }

  h1 {
      letter-spacing: -0.25rem;
      line-height: 0.9;
      font-weight: bold;
      font-size: 6vw; 


      @media only screen and (max-width: 1300px) {
        letter-spacing: -0.4vw;
        font-size: 10vw; 
      }
  }

  h2 {
      line-height: 1.2;
      font-size: 1.5rem;
  }

  h3, h4, h5, h6 {
    font-size: 1.4rem;
    font-weight: 800;
  }

  p {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.25;
  }

  figcaption {
    font-size: 1.2rem;
    padding-top: 0.2rem;
    font-family: "Suisse Condensed";
  }

  img {
    border-radius: 1rem;
  }
`;

const Layout = ({ children }) => (
  <div className="m-3">
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </div>
);

export default Layout;