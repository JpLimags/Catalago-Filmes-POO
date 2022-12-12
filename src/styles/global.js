import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #000000;
        font-family: Arial, Helvetic, sans-serif
    }

    body::-webkit-scrollbar {
        width: 12px;               
      }
      
      body::-webkit-scrollbar-track {
        background: rgba(217, 217, 217, 1);        
      }
      
      body::-webkit-scrollbar-thumb {
        background-color: rgba(175, 144, 231, 1);   
        border-radius: 20px;       
        border: 3px solid rgba(217, 217, 217, 1); 
      }
`



export default GlobalStyle