import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, border-style, #root {
        max-height: 100vh;
        max-width: 100%;

        width: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        outline: none;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
				Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    html {
        background: var(--gray);
        color: var(--white);
    }

    :root {
    --primary: #000;
    --secondary: #15181C;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --gray-light: #f2f2f2;
  }
`;