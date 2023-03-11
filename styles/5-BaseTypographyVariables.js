import { css } from "styled-components";
import { FONTSIZE, FONTWEIGHT } from "./1-DesignTokens";

export const BaseTypographyVariables = css`
  /* FONT FAMILY FALLBACKS */
  /* --font-fallback-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  --font-fallback-serif: Georgia, Cambria, "Times New Roman", Times, serif; */

  /* FONT FAMILIES */
  /* --font-sans: "Untitled Sans", var(--font-fallback-sans);
  --font-serif: "Untitled Serif", var(--font-fallback-serif); */

  --font-family-paragraph: var(--font-serif);

  /* FONT WEIGHTS */
  --font-weight-light: ${FONTWEIGHT[0]};
  --font-weight-regular: ${FONTWEIGHT[1]};
  --font-weight-medium: ${FONTWEIGHT[2]};
  --font-weight-bold: var(--font-weight-medium);

  /* FIXED FONT SIZES */
  --font-size-1: ${FONTSIZE[0] / 16}rem; // 12px
  --font-size-2: ${FONTSIZE[1] / 16}rem; // 14px
  --font-size-3: ${FONTSIZE[2] / 16}rem; // 16px
  --font-size-4: ${FONTSIZE[3] / 16}rem; // 20px
  --font-size-5: ${FONTSIZE[4] / 16}rem; // 24px
  --font-size-6: ${FONTSIZE[5] / 16}rem; // 32px
  --font-size-7: ${FONTSIZE[6] / 16}rem; // 40px
  --font-size-8: ${FONTSIZE[7] / 16}rem; // 64px
  --font-size-9: ${FONTSIZE[8] / 16}rem; // 80px
  --font-size-10: ${FONTSIZE[9] / 16}rem; // 104px
  --font-size-bump: 1rem / 16;

  /* FLUID FONT SIZES */
  --font-size-fluid-1: calc(${FONTSIZE[1]} / var(--viewportBasis) * 100vw);
  --font-size-fluid-2: calc(${FONTSIZE[2]} / var(--viewportBasis) * 100vw);
  --font-size-fluid-3: calc(${FONTSIZE[3]} / var(--viewportBasis) * 100vw);
  --font-size-fluid-4: calc(${FONTSIZE[4]} / var(--viewportBasis) * 100vw);
  --font-size-fluid-5: calc(${FONTSIZE[5]} / var(--viewportBasis) * 100vw);
  --font-size-fluid-6: calc(${FONTSIZE[6]} / var(--viewportBasis) * 100vw);
  --font-size-fluid-7: calc(${FONTSIZE[7]} / var(--viewportBasis) * 100vw);
  --font-size-fluid-8: calc(${FONTSIZE[8]} / var(--viewportBasis) * 100vw);
  --font-size-fluid-9: calc(${FONTSIZE[9]} / var(--viewportBasis) * 100vw);
`;

