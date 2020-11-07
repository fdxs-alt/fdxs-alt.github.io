import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyling = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       

    }
    html, body { 
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
    }

`
export default GlobalStyling
