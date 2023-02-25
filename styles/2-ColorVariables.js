import { css } from "styled-components";
import { COLORS, QUERY } from "./1-DesignTokens";

export const LightColors = css`
    /* TEXT COLORS */
    --color-text-strong: hsl(${COLORS.sidewalk[900]}); 
    --color-text-primary: hsl(${COLORS.sidewalk[800]}); 
    --color-text-secondary: hsl(${COLORS.sidewalk[600]});
    --color-text-tertiary: hsl(${COLORS.sidewalk[400]});

    /* LINK COLORS */
    --color-text-link: hsl(${COLORS.sky[600]});
    --color-text-link-underline: hsl(${COLORS.sidewalk[300]});
    --color-text-selection-background: var(--color-text-link);
    --color-text-selection-text: var(--color-text-strong);

    /* BACKGROUND COLORS */
    --color-background: hsl(${COLORS.sidewalk[100]}); 
    --color-background-lighter: hsl(${COLORS.sidewalk[50]}); 
    --color-background-darker: hsl(${COLORS.sidewalk[200]});


    /* BORDER COLORS */
    --color-border: hsl(${COLORS.sidewalk[200]});
 
`
export const DarkColors = css`
    /* TEXT COLORS */
    --color-text-strong: hsl(${COLORS.white[800]});
    --color-text-primary: hsl(${COLORS.white[700]});
    --color-text-secondary: hsl(${COLORS.gray[400]});
    --color-text-tertiary: hsl(${COLORS.gray[400]});

    /* LINK COLORS */
    --color-text-link: hsl(${COLORS.moss[500]});
    --color-text-link-underline: hsl(${COLORS.gray[400]});
    --color-text-selection-background: var(--color-text-link);
    --color-text-selection-text: var(--color-text-strong);

    /* BACKGROUND COLORS */
    --color-background: hsl(${COLORS.gray[900]});
    --color-background-lighter: hsl(${COLORS.gray[600]});
    --color-background-darker: hsl(${COLORS.gray[800]});

    /* BORDER COLORS */
    --color-border: hsl(${COLORS.gray[700]});
`