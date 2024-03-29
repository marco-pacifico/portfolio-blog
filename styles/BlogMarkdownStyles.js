import { css } from "styled-components";
import { LinkStyles } from "./LinkStyles";
import { LINEHEIGHT, LETTERSPACING, QUERY } from "./1-DesignTokens";
import { CodeSyntax } from "./7-CodeSyntax";

const BlogTypographyVariables = css`
  /* FONT SIZES */
  /* --font-size-paragraph: calc(var(--font-size-4) + 2 * var(--font-size-bump)); */
  --font-size-paragraph: 1.375rem;
  /* --font-size-paragraph: var(--font-size-4); */
  /* @media ${QUERY.tabletAndSmaller} {
    --font-size-paragraph: var(--font-size-4);
  } */
  --font-size-code: var(--font-size-3);
  --font-size-caption: var(--font-size-3);

  /* LINE HEIGHT */
  --line-height-heading-tight: ${LINEHEIGHT[0]}em;
  --line-height-heading: ${LINEHEIGHT[2]}em;
  --line-height-heading-loose: ${LINEHEIGHT[3]}em;
  /* --line-height-paragraph: ${LINEHEIGHT[3]}em; */
  --line-height-paragraph: 2.125rem;
  /* @media ${QUERY.tabletAndSmaller} {
    --line-height-paragraph: 2rem;
  } */

  /* LETTER SPACING */
  --letter-spacing-display: ${LETTERSPACING[0]}em;
  --letter-spacing-heading: ${LETTERSPACING[1]}em;

  /* TYPOGRAPHY MARGIN */
  /* No margin collapse because using CSS Grid on blog layout */
  --margin-image: var(--space-8) 0;
  --margin-display: var(--space-9) 0 var(--space-2) 0;
  --margin-heading: var(--space-8) 0 var(--space-4) 0;
  --margin-paragraph: var(--space-5) 0 0 0;
  @media ${QUERY.tabletAndSmaller} {
    --margin-paragraph: var(--space-4) 0 0 0;
  }

  --margin-list: 0;
  --margin-list-items: var(--space-4) 0;
  --margin-blockquote-level-1: var(--space-8) 0;
  --margin-blockquote-level-2: var(--space-6) 0;
  --margin-divider: var(--space-8) auto;

  /* LIST AND BULLET PADDING */
  --list-indent-bullets: var(--space-6);
  --list-indent-level-1: var(--space-3);
  --list-bullet-padding: var(--space-2);
  --list-indent-level-2: calc(
    var(--list-indent-level-1) * 3 + var(--list-bullet-padding)
  );

  /* LIST AND BULLET COLORS */
  --list-bullet-color: var(--color-text-secondary);
`;

export const BlogMarkdownStyles = css`
  ${BlogTypographyVariables}

 
  details {

    & summary {
      cursor: pointer;
      padding: var(--space-2) var(--space-4);
      margin-left: calc(-1 * var(--space-4));

      border-radius: var(--space-5);
      overflow: hidden;
      font-family: var(--font-sans);
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-paragraph);
      line-height: var(--line-height-paragraph);
      color: var(--color-text-primary);
      transition: color 200ms ease-in;
    }
    & summary:hover {
      color: var(--color-text-strong);
    }
  }
  hr {
    margin: var(--margin-divider);
    height: 1px;
    background-color: var(--color-text-tertiary);
    border: none;
    width: 100%;
    transition: background-color 300ms ease-in;
  }
  /* Images will span full width of page layout */
  img {
    grid-column: 1 / -1;
    width: 100%;
    height: auto;
    border-radius: 16px;
    margin: var(--margin-image);

    // First image has no top margin
    &:first-of-type {
      margin-top: 0;
    }
  }

  /* Surround images with em tag set image with same as content width */
  em > img {
    grid-column: 2;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-sans);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-heading);
    letter-spacing: var(--letter-spacing-heading);
    margin: var(--margin-heading);
    color: var(--color-text-strong);
    transition: color 300ms ease-in;
  }
  h1 {
    font-size: var(--font-size-7);
    line-height: var(--line-height-heading-loose);
    @media ${QUERY.tabletAndSmaller} {
      font-size: calc(var(--font-size-7) -4 * var(--font-size-bump));
    }
    /* margin-left: -1px; */
  }
  h2 {
    font-size: var(--font-size-6);
    /* font-size: 2.125rem; */
    line-height: 1.2em;
    letter-spacing: ${LETTERSPACING[2]}em;
    /* @media ${QUERY.tabletAndSmaller} {
      font-size: calc(var(--font-size-6) - 4 * var(--font-size-bump));
    } */
    /* margin-left: -1px; */
  }
  h3 {
    font-size: calc(var(--font-size-5) + 2 * var(--font-size-bump));
    line-height: var(--line-height-paragraph);
    @media ${QUERY.tabletAndSmaller} {
      font-size: var(--font-size-5);
    }
    /* margin-left: -1px; */
  }
  h4,
  h5,
  h6 {
    font-size: var(--font-size-paragraph);
    line-height: var(--line-height-paragraph);
    /* margin-left: -1px; */
  }

  p,
  a,
  em,
  strong,
  ul,
  ol,
  li {
    font-family: var(--font-family-paragraph);
    font-size: var(--font-size-paragraph);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-paragraph);
    margin: var(--margin-paragraph);
    letter-spacing: -0.0125em;
    /* letter-spacing: -0.01875em; */
  }

  a {
    ${LinkStyles}
  }

  em {
  }

  strong {
    font-weight: var(--font-weight-bold);
    color: var(--color-text-strong);
    transition: color 300ms ease-in;
  }

  /* LIST PADDING */
  ul,
  ol {
    margin: var(--margin-list);
    padding-left: var(--list-indent-bullets);
  }
  ol {
    padding-left: var(--space-7);
  }
  li {
    margin: var(--margin-list-items);
    padding-left: var(--list-bullet-padding);

    & ul,
    ol {
      margin: var(--margin-list-items);
      padding-left: var(--list-indent-level-2);
    }
  }

  /* LIST BULLET STYLES */
  ul li {
    list-style: square;
    // Nested List
    & ul {
      & li {
        list-style: circle;
      }
    }
  }

  ol li {
    list-style-type: decimal;
    // Nested List
    & ol {
      & li {
        list-style: lower-roman;
      }
    }
  }

  blockquote {
    padding-left: var(--space-6);
    display: block;
    position: relative;
    margin: var(--margin-blockquote-level-1);
    /* margin-left: var(--space-3); */

    & blockquote {
      margin: var(--margin-blockquote-level-2);
    }

    &:before {
      content: "";
      height: 100%;
      width: 2px;
      border-radius: 4px;
      background: var(--color-border);
      position: absolute;
      left: 0;
      transition: background 300ms ease-in;
    }

    p {
      font-family: var(--font-sans);
      font-weight: var(--font-weight-light);
      font-size: var(--font-size-5);
      padding-bottom: var(--space-3);
      color: var(--color-text-strong);
    }

    figcaption {
      font-size: var(--font-size-caption);
      margin-top: var(--space-6);
      color: var(--color-text-primary);
    }
  }

  ${CodeSyntax}
`;
