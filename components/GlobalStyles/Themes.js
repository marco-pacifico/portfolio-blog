import { css } from "styled-components";
import { COLORS } from "../DesignTokens";

export const LightTheme = css`
    /* --color-text-primary: hsl(${COLORS.black}); */
    --color-text-primary: purple;
    --color-text-secondary: hsl(${COLORS.gray[300]});
    --color-background: hsl(${COLORS.white});
    --color-border: hsl(${COLORS.gray[100]});
`
export const DarkTheme = css`
     --color-text-primary: rgba(255, 255, 255, 0.81);
     /* --color-text-primary: hsl(${COLORS.white}); */
     --color-text-secondary: hsl(${COLORS.gray[400]});
     --color-background: #191919;
     /* --color-background: hsl(${COLORS.black}); */
     --color-border: hsl(${COLORS.gray[500]});
`