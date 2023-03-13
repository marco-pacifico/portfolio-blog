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
  transition: color 300ms ease-in;
`;

export const H1_Overline = styled.span`
  transition: color 300ms ease-in;
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
  transition: color 300ms ease-in;
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
  transition: color 300ms ease-in;
`;

// CARDS AND LIST ITMES
export const Overline = styled.h5`
  color: var(--color-text-primary);
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
  transition: color 300ms ease-in;
`;

export const TitleAndDescription = css`
  --font-size-min: var(--font-size-4);
  --font-size-target: var(--font-size-fluid-6);
  /* --font-size-max: var(--font-size-5); */
  --font-size-max: calc(var(--font-size-5) + 4*var(--font-size-bump));
  font-size: clamp(
    var(--font-size-min),
    var(--font-size-target),
    var(--font-size-max)
  );
  font-weight: var(--font-weight-regular);
  color: var(--color-text-strong);
  letter-spacing: ${LETTERSPACING[2]}em;
  transition: color 300ms ease-in;
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
  color: var(--color-text-primary);
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
  font-weight: var(--font-weight-bold);

  /* Use smaller font size for small variant */
  font-size: ${(p) =>
    p.size === "small" ? "var(--font-size-3)" : "var(--font-size-5)"};

  /* If href is current route, then apply active text color */
  color: ${(p) =>
    p.href === p.route
      ? "var(--color-nav-text-active)"
      : "var(--color-nav-text)"};

  transition: all 200ms ease-in;
`;

export const FooterItem = styled.p``;
