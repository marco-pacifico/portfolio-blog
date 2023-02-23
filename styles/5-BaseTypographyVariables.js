import { css } from "styled-components";
import {
  FONTSIZE,
  FONTWEIGHT,
} from "./1-DesignTokens";

export const BaseTypographyVariables = css`
  /* FONT FAMILY FALLBACKS */
  --font-fallback-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  --font-fallback-serif: Georgia, Cambria, "Times New Roman", Times, serif;

  /* FONT FAMILIES */
  --font-sans: "Untitled Sans", var(--font-fallback-sans);
  --font-serif: "Untitled Serif", var(--font-fallback-serif);

  --font-family-paragraph: var(--font-serif);

  /* FONT WEIGHTS */
  --font-weight-light: ${FONTWEIGHT[0]};
  --font-weight-regular: ${FONTWEIGHT[1]};
  --font-weight-medium: ${FONTWEIGHT[2]};
  --font-weight-bold: var(--font-weight-medium);

  /* FIXED FONT SIZES */
  --font-size-1: ${FONTSIZE[0] / 16}rem;
  --font-size-2: ${FONTSIZE[1] / 16}rem;
  --font-size-3: ${FONTSIZE[2] / 16}rem;
  --font-size-4: ${FONTSIZE[3] / 16}rem;
  --font-size-5: ${FONTSIZE[4] / 16}rem;
  --font-size-6: ${FONTSIZE[5] / 16}rem;
  --font-size-7: ${FONTSIZE[6] / 16}rem;
  --font-size-8: ${FONTSIZE[7] / 16}rem;
  --font-size-9: ${FONTSIZE[8] / 16}rem;
  --font-size-bump: 1rem / 16;
`;


