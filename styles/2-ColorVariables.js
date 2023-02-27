import { css } from "styled-components";
import { COLORS, QUERY } from "./1-DesignTokens";

export const LightColors = css`
    /* TEXT COLORS */
    --color-text-strong: hsl(${COLORS.sidewalk[900]}); 
    --color-text-primary: hsl(${COLORS.sidewalk[800]}); 
    --color-text-secondary: hsl(${COLORS.sidewalk[600]});
    --color-text-tertiary: hsl(${COLORS.sidewalk[500]});

    /* LINK COLORS */
    --color-text-link: hsl(${COLORS.sky[600]});
    --color-text-link-underline: hsl(${COLORS.sidewalk[400]});
    --color-text-selection-background: var(--color-text-link);
    --color-text-selection-text: var(--color-text-strong);

    /* BACKGROUND COLORS */
    --color-background: hsl(${COLORS.sidewalk[100]}); 
    --color-background-lighter: hsl(${COLORS.sidewalk[50]}); 
    --color-background-darker: hsl(${COLORS.sidewalk[200]});

    /* BORDER COLORS */
    --color-border: hsl(${COLORS.sidewalk[300]});
    
    /* LOGO COLORS */
    --color-logo-text: hsl(${COLORS.sidewalk[800]});
    --color-logo-background: hsl(${COLORS.sidewalk[300]});
`
export const DarkColors = css`
    /* TEXT COLORS */
    --color-text-strong: hsl(${COLORS.white[800]});
    --color-text-primary: hsl(${COLORS.white[700]});
    --color-text-secondary: hsl(${COLORS.night[400]});
    --color-text-tertiary: hsl(${COLORS.night[400]});

    /* LINK COLORS */
    --color-text-link: hsl(${COLORS.moss[500]});
    --color-text-link-underline: hsl(${COLORS.night[400]});
    --color-text-selection-background: var(--color-text-link);
    --color-text-selection-text: var(--color-text-strong);

    /* BACKGROUND COLORS */
    --color-background: hsl(${COLORS.night[900]});
    --color-background-lighter: hsl(${COLORS.night[600]});
    --color-background-darker: hsl(${COLORS.night[800]});

    /* BORDER COLORS */
    --color-border: hsl(${COLORS.night[600]});

    /* LOGO COLORS */
    --color-logo-text: var(--color-text-primary);
    --color-logo-background:  var(--color-background-lighter);
`