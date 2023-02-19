import { css } from "styled-components";
import { COLORS } from "../constants/DesignTokens";

export const LightColors = css`
    --color-text-strong: hsl(${COLORS.black});
    --color-text-primary: #1E202F;
    --color-text-secondary: hsl(${COLORS.gray[300]});
    --color-text-link: #E135C2;
    --color-background: #FEFEF9;
    --color-border: hsl(${COLORS.gray[100]});
    /* --color-text-selection-background: #3C2FF5; */
    /* --color-text-selection-text: rgba(255, 255, 255, 0.81); */
    /* --color-text-selection-background: #B9D29A; */
    --color-text-selection-background: #C7CCC6;
    --color-text-selection-text: hsl(${COLORS.black});
`
export const DarkColors = css`
    --color-text-strong: hsl(${COLORS.white});
     --color-text-primary: rgba(255, 255, 255, 0.81);
     /* --color-text-primary: hsl(${COLORS.white}); */
     --color-text-secondary: hsl(${COLORS.gray[400]});
     --color-text-link: #90BF91;
     --color-background: #191919;
     /* --color-background: hsl(${COLORS.black}); */
     --color-border: hsl(${COLORS.gray[500]});
     --color-text-selection-background: #3C2FF5;
     --color-text-selection-text: var(--color-text-primary);
`