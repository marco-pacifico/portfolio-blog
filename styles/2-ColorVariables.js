import { css } from "styled-components";
import { COLORS, QUERY } from "./1-DesignTokens";

export const LightColors = css`
    /* TEXT COLORS */
    /* --color-text-strong: #1E202F; */
    --color-text-strong: #232C38; 
    /* --color-text-primary: #1E202F; */
    --color-text-primary: #293342;
    /* --color-text-secondary: hsl(${COLORS.gray[300]}); */
    --color-text-secondary: #838EA0;

    /* LINK COLORS */
    /* --color-text-link: #35837A; */
    --color-text-link: #0F689F;
    --color-text-link-underline: hsl(${COLORS.gray[200]});
    /* --color-text-selection-background: #C7CCC6; */
    --color-text-selection-background: #DDE5E7;
    --color-text-selection-text: hsl(${COLORS.black});

    /* BACKGROUND COLORS */
    /* --color-background: #FEFEF9; */
    --color-background: #C5CBD3; 
    --color-background-light: hsl(${COLORS.gray[200]});
    --color-background-dark: #BEC4CD;


    /* BORDER COLORS */
    /* --color-border: hsl(${COLORS.gray[200]}); */
    /* --color-border: #ABB3BF; */
    --color-border: #B7BEC8;
 
`
export const DarkColors = css`
    /* TEXT COLORS */
    --color-text-strong: rgba(255, 255, 255, 0.85);
    --color-text-primary: rgba(255, 255, 255, 0.78);
    --color-text-secondary: hsl(${COLORS.gray[400]});

    /* LINK COLORS */
    --color-text-link: #90BF91;
    --color-text-link-underline: hsl(${COLORS.gray[400]});
    /* --color-text-selection-background: #3C2FF5; */
    --color-text-selection-background: var(--color-text-link);
    --color-text-selection-text: var(--color-text-strong);

    /* BACKGROUND COLORS */
    /* --color-background: #191919; */
    /* --color-background: #080808; */
    --color-background: hsl(${COLORS.gray[900]});
    --color-background-light: hsl(${COLORS.gray[600]});
    --color-background-dark: hsl(${COLORS.gray[800]});

    /* BORDER COLORS */
    --color-border: hsl(${COLORS.gray[700]});
`