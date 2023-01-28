import { css } from 'styled-components'

export const Fonts = css`

    /* UNTITLED SANS*/
    @font-face {
        font-family: 'Untitled Sans';
        src: local('Untitled Sans'), url('/fonts/untitled-sans-web-light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Untitled Sans';
        src: local('Untitled Sans'), url('/fonts/untitled-sans-web-regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Untitled Sans';
        src: local('Untitled Sans'), url('/fonts/untitled-sans-web-medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
    }

    /* UNTITLED SERIF*/
    @font-face {
        font-family: 'Untitled Serif';
        src: local('Untitled Sans'), url('/fonts/untitled-serif-web-regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    :root {
        --font-sans: 'Untitled Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        
        --font-serif: 'Untitled Serif', serif;
    }

`