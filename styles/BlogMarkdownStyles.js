import { css } from "styled-components";

export const BlogMarkdownStyles = css`
  img {
    height: auto;
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
  }
  h4 {
    font-size: var(--font-size-6);
  }
  h5 {
    font-size: var(--font-size-5);
  }
  h6 {
    font-size: var(--font-size-paragraph);
  }

  p,
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

  em {
    /* TODO: ADD ITALIC FONT DEFINITIONS FOR UNTITLED*/
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
