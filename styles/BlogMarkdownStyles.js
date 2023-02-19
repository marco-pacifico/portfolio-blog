import { css } from "styled-components";

export const BlogMarkdownStyles = css`
  img {
    height: auto;
    border-radius: 16px;
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
    color: var(--text-color-strong);
  }
  h1 {
    font-size: var(--font-size-9);
    letter-spacing: var(--letter-spacing-display);
    margin: var(--margin-display);
  }
  h2 {
    font-size: var(--font-size-8);
    letter-spacing: var(--letter-spacing-display);
    margin: var(--margin-display);
  }
  h3 {
    font-size: var(--font-size-7);
    line-height: var(--line-height-heading-loose);
  }
  h4 {
    font-size: var(--font-size-6);
    line-height: var(--line-height-heading-loose);
  }
  h5 {
    font-size: var(--font-size-5);
    line-height: var(--line-height-paragraph);
  }
  h6 {
    font-size: var(--font-size-paragraph);
    line-height: var(--line-height-paragraph);
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
    font-weight: var(--font-weight-bold);
    color: var(--color-text-link);
    padding-bottom: 2px;
    border-bottom: 1px solid var(--color-text-secondary);
    text-decoration: none;
    background-image: linear-gradient(90deg, var(--color-text-link), var(--color-text-link));
    background-size: 0% 1px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 0.2s ease-out;

    &:hover {
        background-size: 100% 1px;
    }
  }

  em {
  }

  strong {
    font-weight: var(--font-weight-bold);
  }

  /* LIST PADDING */
  ul,
  ol {
    /* padding-left: var(--list-indent-level-1); */
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
    margin: var(--space-9) 0;
    /* margin-left: var(--space-3); */

    & blockquote {
      margin: var(--space-6) 0;
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
    padding: var(--space-6) var(--space-7);
    background: rgba(135, 131, 120, 0.15);
    border-radius: 12px;

    & code {
      background: none;
      padding: 0;
    }
  }
`;
