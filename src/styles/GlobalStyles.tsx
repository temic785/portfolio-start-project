import { createGlobalStyle } from "styled-components";
import { colorTheme } from "./ThemeStyled";

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
        background-color:${colorTheme.colors.grey.medium};
        margin: 0;
        font-family: 'Inter',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color:${colorTheme.colors.grey.dark};
    line-height: 1.2;
    text-transform: capitalize;
    }

    section{
        padding:70px 0 0 0;
    }

    a{
        text-decoration:none;
    }

    ul{
        list-style:none;
    }

    button{
        background-color:unset;
        border:none;
        border-radius:5px;
        
    }

    `;
