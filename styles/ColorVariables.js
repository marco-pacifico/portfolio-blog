import { css } from "styled-components";
import { COLORS } from "./DesignTokens";

export const LightColors = css`
    /* TEXT COLORS */
    --color-text-strong: hsl(${COLORS.black});
    --color-text-primary: #1E202F;
    --color-text-secondary: hsl(${COLORS.gray[300]});

    /* LINK COLORS */
    --color-text-link: #35837A;
    --color-text-selection-background: #C7CCC6;
    --color-text-selection-text: hsl(${COLORS.black});

    /* BACKGROUND COLORS */
    --color-background: #FEFEF9;

    /* BORDER COLORS */
    --color-border: hsl(${COLORS.gray[100]});
 
`
export const DarkColors = css`
    /* TEXT COLORS */
    --color-text-strong: hsl(${COLORS.white});
    --color-text-primary: rgba(255, 255, 255, 0.81);
    --color-text-secondary: hsl(${COLORS.gray[400]});

    /* LINK COLORS */
    --color-text-link: #90BF91;
    --color-text-selection-background: #3C2FF5;
    --color-text-selection-text: var(--color-text-primary);

    /* BACKGROUND COLORS */
    --color-background: #191919;

    /* BORDER COLORS */
    --color-border: hsl(${COLORS.gray[500]});
`