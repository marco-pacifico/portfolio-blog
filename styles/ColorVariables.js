import { css } from "styled-components";
import { COLORS } from "./DesignTokens";

export const LightColors = css`
    /* TEXT COLORS */
    --color-text-strong: #1E202F;
    --color-text-primary: #1E202F;
    --color-text-secondary: hsl(${COLORS.gray[300]});

    /* LINK COLORS */
    --color-text-link: #35837A;
    --color-text-link-underline: hsl(${COLORS.gray[200]});
    --color-text-selection-background: #C7CCC6;
    --color-text-selection-text: hsl(${COLORS.black});

    /* BACKGROUND COLORS */
    --color-background: #FEFEF9;
    --color-background-light: hsl(${COLORS.gray[200]});

    /* BORDER COLORS */
    --color-border: hsl(${COLORS.gray[100]});
 
`
export const DarkColors = css`
    /* TEXT COLORS */
    --color-text-strong: rgba(255, 255, 255, 0.90);
    --color-text-primary: rgba(255, 255, 255, 0.85);
    --color-text-secondary: hsl(${COLORS.gray[400]});

    /* LINK COLORS */
    --color-text-link: #90BF91;
    --color-text-link-underline: hsl(${COLORS.gray[400]});
    /* --color-text-selection-background: #3C2FF5; */
    --color-text-selection-background: var(--color-text-link);
    --color-text-selection-text: var(--color-text-strong);

    /* BACKGROUND COLORS */
    --color-background: #191919;
    --color-background-light: hsl(${COLORS.gray[600]});

    /* BORDER COLORS */
    --color-border: hsl(${COLORS.gray[500]});
`