import { createGlobalStyle } from "styled-components";
import { myTheme } from "./ThemeStyled";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        list-style-type: none;
        margin:0;
        padding:0;
        box-sizing:border-box;

    }
    body{
        background-color:${myTheme.colors.grey.medium};
        margin: 0;
        font-family: 'Inter',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color:${myTheme.colors.grey.dark};
    line-height: 1.2;
    text-transform: capitalize;
    }

    section:nth-of-type(n+2) {  
        padding:70px 0 0 0;
    }
    

    a{
        text-decoration:none;
        cursor: pointer;
    }

    ul{
        list-style:none;
    }

    button{
        background-color:unset;
        border:none;
        cursor:pointer;
        text-transform: uppercase;
        font-family: "Inter";


    }

    p{
        font-size: 15px;
        font-weight: 400;
        color:${myTheme.colors.grey.dark}
    }

    span{
        color:${myTheme.colors.secondary}
    }
    
    h3{
        color:${myTheme.colors.secondary};
        font-size:18px;
        font-weight:500;
    }

    input, form, textarea {
        outline: none;
        border:none;
    }
    `;
