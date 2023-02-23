import { css } from "styled-components";
import { SPACE, QUERY } from "./1-DesignTokens";

export const SiteLayoutVariables = css`
  /* FIXED SPACING */
  --space-1: ${SPACE[0] / 16}rem;   // 2px
  --space-2: ${SPACE[1] / 16}rem;   // 4px
  --space-3: ${SPACE[2] / 16}rem;   // 8px
  --space-4: ${SPACE[3] / 16}rem;   // 12px   
  --space-5: ${SPACE[4] / 16}rem;   // 16px
  --space-6: ${SPACE[5] / 16}rem;   // 24px
  --space-7: ${SPACE[6] / 16}rem;   // 32px
  --space-8: ${SPACE[7] / 16}rem;   // 40px
  --space-9: ${SPACE[8] / 16}rem;   // 64px
  --space-10: ${SPACE[9] / 16}rem;  // 72px
  --space-11: ${SPACE[10] / 16}rem; // 80px
  --space-12: ${SPACE[11] / 16}rem; // 128px

  /* FLUID WIDTHS */
  /* --width-fluid-1: 25vw;
  --width-fluid-2: 40vw;
  --width-fluid-3: 50vw;
  --width-fluid-4: 60vw;
  --width-fluid-5: 75vw;
  --width-fluid-6: 80vw;
  --width-fluid-7: 100vw; */

  /* SITE GUTTER */
  --site-gutter: var(--space-7);
  /* Tighten site gutter on mobile */
  @media ${QUERY.phoneAndSmaller} {
    --site-gutter: var(--space-5);
  }

  /* WIDTHS */
  --width-site: calc(2000rem / 16); 
  --width-blog-content: calc(680rem / 16); 
  
  
`;

