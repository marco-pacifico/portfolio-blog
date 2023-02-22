import { css } from "styled-components";

export const RestCSS = css`
    /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
    */
    /* 1. Use a more-intuitive box-sizing model.*/
    *, *::before, *::after {
        box-sizing: border-box;
    }

    /* 2. Remove default margin and padding*/
    * {
        margin: 0;
        padding: 0;
    }

    /* 3. Allow percentage-based heights in the application , #__next  */
    html, body {
        height: 100%;
    }

    /* 4. Add accessible line-height and 5. Improve text rendering */
    body {
         -webkit-font-smoothing: antialiased;
    }

    /* 6. Improve media defaults */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    /* 7. Remove built-in form typography styles */
    input, button, textarea, select {
        font: inherit;
    }

    /* 8. Avoid text overflows */
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    
    /* 9. Remove default list styles */
    ol, ul, li {
        list-style: none;
    }

    /* 10. Create a root stacking context */
    #root, #__next {
        isolation: isolate;
    }
`