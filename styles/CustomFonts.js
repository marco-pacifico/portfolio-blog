import { css } from 'styled-components'
import { FONTWEIGHT } from '../constants/DesignTokens'

export const CustomFonts = css`

    /* UNTITLED SANS*/
    @font-face {
        font-family: 'Untitled Sans';
        src: local('Untitled Sans'), url('/fonts/untitled-sans-web-light.woff2') format('woff2');
        font-weight: ${FONTWEIGHT[0]};
        font-style: normal;
    }
    @font-face {
        font-family: 'Untitled Sans';
        src: local('Untitled Sans'), url('/fonts/untitled-sans-web-regular.woff2') format('woff2');
        font-weight: ${FONTWEIGHT[1]};
        font-style: normal;
    }
    @font-face {
        font-family: 'Untitled Sans';
        src: local('Untitled Sans'), url('/fonts/untitled-sans-web-medium.woff2') format('woff2');
        font-weight: ${FONTWEIGHT[2]}; 
        font-style: normal;
    }

    /* UNTITLED SERIF*/
    @font-face {
        font-family: 'Untitled Serif';
        src: local('Untitled Sans'), url('/fonts/untitled-serif-web-regular.woff2') format('woff2');
        font-weight: ${FONTWEIGHT[2]};
        font-style: normal;
    }
`