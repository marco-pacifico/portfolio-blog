import { css } from "styled-components";
import {
  SPACE,
  FONTSIZE,
  FONTWEIGHT,
  LINEHEIGHT,
  LETTERSPACING,
} from "../constants/DesignTokens";

export const BlogTypographyVariables = css`
  /* FONT SIZES */
  --font-size-1: ${FONTSIZE[0] / 16}rem;
  --font-size-2: ${FONTSIZE[1] / 16}rem;
  --font-size-3: ${FONTSIZE[2] / 16}rem;
  --font-size-4: ${FONTSIZE[3] / 16}rem;
  --font-size-5: ${FONTSIZE[4] / 16}rem;
  --font-size-6: ${FONTSIZE[5] / 16}rem;
  --font-size-7: ${FONTSIZE[6] / 16}rem;
  --font-size-8: ${FONTSIZE[7] / 16}rem;
  --font-size-9: ${FONTSIZE[8] / 16}rem;
  --font-size-paragraph: var(--font-size-4);

  /* FONT WEIGHTS */
  --font-weight-light: ${FONTWEIGHT[0]};
  --font-weight-regular: ${FONTWEIGHT[1]};
  --font-weight-medium: ${FONTWEIGHT[2]};
  --font-weight-bold: var(--font-weight-medium);

  /* LINE HEIGHT */
  --line-height-heading: ${LINEHEIGHT[1]}em;
  --line-height-paragraph: ${LINEHEIGHT[3]}em;

  /* LETTER SPACING */
  --letter-spacing-display: ${LETTERSPACING[0]}em;
  --letter-spacing-heading: ${LETTERSPACING[1]}em;

  /* SPACING */
  --space-1: ${SPACE[0] / 16}rem;
  --space-2: ${SPACE[1] / 16}rem;
  --space-3: ${SPACE[2] / 16}rem;
  --space-4: ${SPACE[3] / 16}rem;
  --space-5: ${SPACE[4] / 16}rem;
  --space-6: ${SPACE[5] / 16}rem;
  --space-7: ${SPACE[6] / 16}rem;
  --space-8: ${SPACE[7] / 16}rem;
  --space-9: ${SPACE[8] / 16}rem;

  /* MARGIN */
  --margin-display: var(--space-8) 0;
  --margin-heading: var(--space-6) 0;
  --margin-paragraph: var(--space-5) 0;
  --margin-list-items: var(--space-4) 0;

  /* PADDING */
  --list-indent-bullets: var(--space-7);
  --list-indent-level-1: var(--space-3);
  /* --listBulletPadding: var(--space5); */
  --list-bullet-padding: var(--space-3);
  --list-indent-level-2: calc(
    var(--list-indent-level-1) * 2 + var(--list-bullet-padding)
  );

  /* COLORS */
  --list-bullet-color: var(--color-text-secondary);
`;
