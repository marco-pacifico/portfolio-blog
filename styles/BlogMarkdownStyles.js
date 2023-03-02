import { css } from "styled-components";
import { LinkStyles } from "./LinkStyles";
import {
    LINEHEIGHT,
    LETTERSPACING,
  } from "./1-DesignTokens";

const BlogTypographyVariables = css`
  /* FONT SIZES */
  --font-size-paragraph: calc(var(--font-size-4) + 2*var(--font-size-bump));
  --font-size-caption: var(--font-size-2);

  /* LINE HEIGHT */
  --line-height-heading-tight: ${LINEHEIGHT[0]}em; 
  --line-height-heading: ${LINEHEIGHT[1]}em;
  --line-height-heading-loose: ${LINEHEIGHT[2]}em; 
  --line-height-paragraph: ${LINEHEIGHT[3]}em;

  /* LETTER SPACING */
  --letter-spacing-display: ${LETTERSPACING[0]}em;
  --letter-spacing-heading: ${LETTERSPACING[1]}em;

  /* TYPOGRAPHY MARGIN */
  --margin-image: var(--space-8) 0;
  /* --margin-display: var(--space-9) 0 var(--space-7) 0; */
  --margin-display: var(--space-9) 0 0 0; // Removing bottom margin because blog layout is using css grid which prevents margin collapse
  /* --margin-heading: var(--space-8) 0 var(--space-4) 0; */
  --margin-heading: var(--space-8) 0 0 0; // Removing bottom margin because blog layout is using css grid which prevents margin collapse
  /* --margin-paragraph: var(--space-5) 0; */
  --margin-paragraph: var(--space-5) 0 0 0; // Removing bottom margin because blog layout is using css grid which prevents margin collapse
  /* --margin-list: var(--space-5) 0; */
  --margin-list: 0; // Removing margin because blog layout is using css grid which prevents margin collapse
  --margin-list-items: var(--space-4) 0;
  --margin-blockquote-level-1: var(--space-8) 0;
  --margin-blockquote-level-2: var(--space-6) 0;
  --margin-divider: var(--space-8) auto;

  /* LIST AND BULLET PADDING */
  --list-indent-bullets: var(--space-7);
  --list-indent-level-1: var(--space-3);
  /* --listBulletPadding: var(--space5); */
  --list-bullet-padding: var(--space-2);
  --list-indent-level-2: calc(
    var(--list-indent-level-1) * 3 + var(--list-bullet-padding)
  );

  /* LIST AND BULLET COLORS */
  --list-bullet-color: var(--color-text-secondary);
`;

export const BlogMarkdownStyles = css`

  ${BlogTypographyVariables}
  /* Images will span full width of page layout */
  hr {
    margin: var(--margin-divider);
    height: 1px;
    background-color: var(--color-text-tertiary);
    border: none;
    width: 75%;
  }
  img {
    grid-column: 1 / -1;
    width: 100%;
    height: auto;
    border-radius: 16px;
    margin: var(--margin-image);
    background-color: white;
    /* max-height: 800px;
    object-fit: cover; */
  }
  /* Surround images with em tag set image with same as content width */
  em > img {
    grid-column: 2
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-sans);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-heading);
    letter-spacing: var(--letter-spacing-heading);
    margin: var(--margin-heading);
    color: var(--color-text-strong);
  }
  /* h1 {
    font-size: var(--font-size-9);
    letter-spacing: var(--letter-spacing-display);
    margin: var(--margin-display);
    margin-left: -5px;
  } */
  /* h1 {
    font-size: var(--font-size-8);
    letter-spacing: var(--letter-spacing-display);
    margin: var(--margin-display);
    margin-left: -4px;
  }  */
  h1 {
    font-size: var(--font-size-7);
    line-height: var(--line-height-heading-loose);
    /* margin-left: -1px; */
  }
  h2 {
    font-size: var(--font-size-6);
    line-height: var(--line-height-heading-loose);
    /* margin-left: -1px; */
  }
  h3 {
    font-size: var(--font-size-5);
    line-height: var(--line-height-paragraph);
    /* margin-left: -1px; */
  }
  h4, h5, h6 {
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
  }

  a {
    ${LinkStyles}
  }

  em {
  }

  strong {
    font-weight: var(--font-weight-bold);
    color: var(--color-text-strong);
  }

  /* LIST PADDING */
  ul,
  ol {
    margin: var(--margin-list);
    padding-left: var(--list-indent-bullets);
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
    /* display: flex; */
    list-style: square;
    /* &::before {
            content: "→";
            color: var(--list-bullet-color);
            padding-right: var(--list-bulletadding);

        } */
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
    }

    p {
      font-family: var(--font-sans);
      font-weight: var(--font-weight-light);
      font-size: var(--font-size-6);
      padding-bottom: var(--space-3);
    }

    figcaption {
      font-size: var(--font-size-caption);
      margin-top: var(--space-6);
    }
  }

  code {
    font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
      Courier, monospace;
    line-height: normal;
    background: rgba(135, 131, 120, 0.15);
    color: #eb5757;
    border-radius: 5px;
    font-size: 85%;
    padding: 0.2em 0.4em;
  }

  pre {
    margin: var(--margin-paragraph);
    padding: var(--space-6) var(--space-7);
    background: rgba(135, 131, 120, 0.15);
    border-radius: 12px;

    & code {
      background: none;
      padding: 0;
    }
  }
`;
