import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --primary-color:rgb(13, 13, 13);
        --secondary-color:rgb(80, 85, 89);
        --background-color:rgb(255, 255, 255);
        --border-color: #2e344e;
        --font-family: 'Nunito', sans-serif;
        --font-size-regular: 1.2rem;
        --white: white;
        --black: black;
        --gray: gray;
    }

    body {
        background-color: var(--background-color);
        font-family: var(--font-family);
    }

    ul, nav{list-style: none;}

    a{text-decoration: none;}
`;

export default GlobalStyles;