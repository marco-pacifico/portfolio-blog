import { css } from "styled-components";

export const CodeSyntax = css`
  code {
    font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
      Courier, monospace;
    line-height: normal;
    background: rgba(135, 131, 120, 0.15);
    color: #eb5757;
    border-radius: 5px;
    font-size: var(--font-size-code);
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

  .token {
    font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
      Courier, monospace;
    line-height: 30px;
  }
  .token.keyword {
    color: var(--syntax-prop);
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #999;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }
  .token.function,
  .token.class-name {
    color: #dd4a68;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
`;
