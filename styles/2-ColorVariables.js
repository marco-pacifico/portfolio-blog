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

    /* NAV LINK COLORS */
    --color-nav-text: hsl(${COLORS.sidewalk[700]});
    --color-nav-background:  hsl(${COLORS.sidewalk[300]});
    /* NAV LINK COLORS (HOVER) */
    --color-nav-text-hover:  hsl(${COLORS.sidewalk[800]});
    --color-nav-background-hover: hsl(${COLORS.sidewalk[400]});
    /* NAV LINK COLORS (ACTIVE) */
    --color-nav-text-active: hsl(${COLORS.sidewalk[100]});
    --color-nav-background-active:  hsl(${COLORS.sidewalk[700]});
    /* NAV LINK COLORS (ACTIVE, HOVER) */
    --color-nav-text-active-hover: hsl(${COLORS.sidewalk[100]});
    --color-nav-background-active-hover: hsl(${COLORS.sidewalk[800]});
`
export const DarkColors = css`
    /* TEXT COLORS */
    --color-text-strong: hsl(${COLORS.white[800]});
    --color-text-primary: hsl(${COLORS.white[700]});
    --color-text-secondary: hsl(${COLORS.night[400]});
    --color-text-tertiary: hsl(${COLORS.night[400]});

    /* TEXT SELECTION COLRS */
    --color-text-selection-background: var(--color-text-link);
    --color-text-selection-text: var(--color-text-strong);

    /* HYPERLINK COLORS */
    --color-text-link: hsl(${COLORS.moss[500]});
    --color-text-link-underline: hsl(${COLORS.night[400]});

    /* BACKGROUND COLORS */
    --color-background: hsl(${COLORS.night[900]});
    --color-background-lighter: hsl(${COLORS.night[600]});
    --color-background-darker: hsl(${COLORS.night[800]});

    /* BORDER COLORS */
    --color-border: hsl(${COLORS.night[700]});

    /* NAV LINK COLORS */
    --color-nav-text: hsl(${COLORS.night[300]});
    --color-nav-background:  hsl(${COLORS.night[700]});
    /* NAV LINK COLORS (HOVER) */
    --color-nav-text-hover:  var(--color-text-link);
    --color-nav-background-hover: hsl(${COLORS.night[600]});
    /* NAV LINK COLORS (ACTIVE) */
    --color-nav-text-active: hsl(${COLORS.night[100]});
    --color-nav-background-active:  hsl(${COLORS.night[500]});
    /* NAV LINK COLORS (ACTIVE, HOVER) */
    --color-nav-text-active-hover: var(--color-text-link);
    --color-nav-background-active-hover: hsl(${COLORS.night[600]});
`