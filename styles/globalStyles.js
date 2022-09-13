import { createGlobalStyle } from "styled-components";
import { devices } from "./theme";

export const GlobalStyles = createGlobalStyle`
  

  html{
    font-size: 62.5%;
    @media ${devices.mobileL} {
      font-size: 58%;
    }
   
  }


  body, html{
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  button, button:focus, input, input:focus{
    outline: none;
    border: none;
    
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px transparent inset;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

`;
