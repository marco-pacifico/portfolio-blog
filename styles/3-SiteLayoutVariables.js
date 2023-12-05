import { css } from "styled-components";
import { SPACE, QUERY, BREAKPOINT } from "./1-DesignTokens";

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
  --space-12: ${SPACE[11] / 16}rem; // 128pxl

  /* FLUID SPACING */
  --viewportBasis: ${BREAKPOINT.desktoplarge};
    @media ${QUERY.laptopAndSmaller} {--viewportBasis: ${BREAKPOINT.desktop};}
    @media ${QUERY.tabletAndSmaller} {--viewportBasis: ${BREAKPOINT.laptop};}
    
  --space-fluid-1: calc(${SPACE[1]} / var(--viewportBasis) * 100vw);
  --space-fluid-2: calc(${SPACE[2]} / var(--viewportBasis) * 100vw);
  --space-fluid-3: calc(${SPACE[3]} / var(--viewportBasis) * 100vw);
  --space-fluid-4: calc(${SPACE[4]} / var(--viewportBasis) * 100vw);
  --space-fluid-5: calc(${SPACE[5]}/ var(--viewportBasis) * 100vw);
  --space-fluid-6: calc(${SPACE[6]} / var(--viewportBasis) * 100vw);
  --space-fluid-7: calc(${SPACE[7]} / var(--viewportBasis) * 100vw);
  --space-fluid-8: calc(${SPACE[8]} / var(--viewportBasis) * 100vw);
  --space-fluid-9: calc(${SPACE[9]} / var(--viewportBasis) * 100vw);
  --space-fluid-10: calc(${SPACE[10]} / var(--viewportBasis) * 100vw);
  --space-fluid-11: calc(${SPACE[11]} / var(--viewportBasis) * 100vw);

  /* FLUID WIDTHS */
  /* --width-fluid-1: 25vw;
  --width-fluid-2: 40vw;
  --width-fluid-3: 50vw;
  --width-fluid-4: 60vw;
  --width-fluid-5: 75vw;
  --width-fluid-6: 80vw;
  --width-fluid-7: 100vw; */

  /* FLUID HEIGHTS */

  /* SITE GUTTER */
  --site-gutter: var(--space-7);
    /* Tighten site gutter on mobile */
    @media ${QUERY.phoneAndSmaller} {
      --site-gutter: var(--space-5);
    }
  --section-offset: calc(6 * var(--site-gutter));
    @media ${QUERY.laptopAndSmaller} {--section-offset: calc(3 * var(--site-gutter))};
    @media ${QUERY.tabletAndSmaller} {--section-offset: var(--site-gutter)};

  /* WIDTHS */
  --width-site-max: calc(${BREAKPOINT.desktoplarge}rem / 16); 
  --width-blog-content: 58ch; 

  /* HEADER */
  /* --header-height: var(--space-10);  */
`;

