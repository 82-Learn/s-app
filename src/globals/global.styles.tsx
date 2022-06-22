import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {  
  background-color: rgb(26, 26, 26);
/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3) { 

}

  button {
    cursor: pointer;
  } 
}

`;
