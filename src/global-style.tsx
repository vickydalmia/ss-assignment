import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *, *::before, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        font-family: 'Encode Sans', sans-serif;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }
    :root{
        --star-rating:#FFB100;
        --text:#1D2024;
        --orange:#FF8B00;
        --yellow: #FFD200;
        --text-light:#7E8994;
        --red: #D80A00;
        --green:#108510;
        --black:#000000;
        --white:#FFFFFF;
        --bg-card:#F0F1F2;

    }
    body, html, #root{
        width: 100%;
        height: 100%;
    }
`;
