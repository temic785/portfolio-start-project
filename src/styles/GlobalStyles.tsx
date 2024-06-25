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
    }
`;
