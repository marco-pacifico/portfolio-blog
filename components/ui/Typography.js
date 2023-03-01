import styled, { css } from "styled-components";
import { LINEHEIGHT, LETTERSPACING, QUERY } from "../../styles/1-DesignTokens";

// INDEX HERO
export const H1 = styled.h1`
  --font-size-min: var(--font-size-6);
  --font-size-target: var(--font-size-fluid-9);
  --font-size-max: var(--font-size-fluid-9);
  font-size: clamp(
    var(--font-size-min),
    var(--font-size-target),
    var(--font-size-max)
  );
  font-weight: var(--font-weight-light);
  line-height: 1.2;
  /* @media ${QUERY.phoneAndSmaller} {
    line-height: ${LINEHEIGHT[3]};
  } */
  color: var(--color-text-strong);
  letter-spacing: ${LETTERSPACING[2]}em;
`;

export const H1_Overline = styled.span`
  color: var(--color-text-tertiary);
  line-height: ${LINEHEIGHT[4]};
  &::selection {
    color: var(--color-text-tertiary);
  }
`;

// INDEX SECTION
export const H2 = styled.h2`
  --font-size-min: calc(var(--font-size-7) + 10 * var(--font-size-bump));
  --font-size-target: var(--font-size-fluid-9);
  --font-size-max: var(--font-size-10);
  font-size: clamp(
    var(--font-size-min),
    var(--font-size-target),
    var(--font-size-max)
  );
  font-weight: var(--font-weight-light);
  line-height: ${LINEHEIGHT[2]};
  color: var(--color-text-strong);
  letter-spacing: ${LETTERSPACING[2]}em;
`;

export const H3 = styled.h3`
  --font-size-min: var(--font-size-6);
  --font-size-target: var(--font-size-fluid-7);
  --font-size-max: var(--font-size-8);
  font-size: clamp(
    var(--font-size-min),
    var(--font-size-target),
    var(--font-size-max)
  );
  font-weight: var(--font-weight-light);
  line-height: ${LINEHEIGHT[3]};
  color: var(--color-text-strong);
  letter-spacing: ${LETTERSPACING[2]}em;
`;

// CARDS AND LIST ITMES
export const Overline = styled.h5`
  --font-size-min: var(--font-size-1);
  --font-size-target: var(--font-size-fluid-2);
  --font-size-max: var(--font-size-2);
  font-size: clamp(
    var(--font-size-min),
    var(--font-size-target),
    var(--font-size-max)
  );
  text-transform: uppercase;
  letter-spacing: ${LETTERSPACING[4]}rem;
`;

export const TitleAndDescription = css`
  --font-size-min: var(--font-size-4);
  --font-size-target: var(--font-size-fluid-6);
  --font-size-max: var(--font-size-7);
  font-size: clamp(
    var(--font-size-min),
    var(--font-size-target),
    var(--font-size-max)
  );
  font-weight: var(--font-weight-regular);
  color: var(--color-text-strong);
  letter-spacing: ${LETTERSPACING[2]}em;
`;

export const H4 = styled.h4`
  ${TitleAndDescription}
  @media ${QUERY.desktopAndSmaller} {
    font-weight: var(--font-weight-medium);
  }
`;

export const Paragraph = styled.p`
  ${TitleAndDescription}
  color: var(--color-text-secondary);
`;

export const LinkAffordance = styled.span`
  --font-size-min: var(--font-size-5);
  --font-size-target: var(--font-size-fluid-7);
  --font-size-max: var(--font-size-7);
  font-size: clamp(
    var(--font-size-min),
    var(--font-size-target),
    var(--font-size-max)
  );
  font-weight: var(--font-weight-light);
  line-height: 1em;
`;

export const NavText = styled.p`
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-bold);
`;
