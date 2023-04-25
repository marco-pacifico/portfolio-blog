import { css } from "styled-components";

export const CodeSyntax = css`
  code {
    font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
      Courier, monospace;
    line-height: normal;
    /* background: rgba(135, 131, 120, 0.15);  */
    background: var(--syntax-inline-bg);
    color: var(--syntax-inline-txt);
    border-radius: 5px;
    font-size: var(--font-size-code);

    padding: 0.2em 0.4em;
  }

  pre {
    margin: var(--margin-paragraph);
    padding: var(--space-6) var(--space-7);
    /* background: rgba(135, 131, 120, 0.15); */
    background: var(--syntax-bg);
    border-radius: 12px;

    & code {
      background: none;
      padding: 0;
      color: var(--syntax-txt);
    }
  }

  /* Inline code */
  /* :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  } */
  .token {
    font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
      Courier, monospace;
    line-height: 30px;
  }
  .token.function {
    color: var(--syntax-fn);
  }
  .token.keyword {
    color: var(--syntax-keyword);
  }
  .token.keyword.module {
    color: var(--syntax-module);
  }
  .token.keyword.control-flow {
    color: var(--syntax-control-flow);
  }
  .token.punctuation {
    color: var(--syntax-punctuation);
  }
  .token.parameter {
    color: var(--syntax-parameter);
  }
  .token.parameter .punctuation {
    color: var(--syntax-parameter);
  }
  .token.tag {
    color: var(--syntax-tag);
  }
  .token.tag .punctuation {
    color: var(--syntax-tag-punctuation);
  }
  .token.attr-name {
    color: var(--syntax-attr-name);
  }
  .token.attr-value,  .token.attr-value .punctuation {
    color: var(--syntax-attr-value);
  }
  .token.attr-value .attr-equals,
  .token.operator {
    color: var(--syntax-attr-equals);
  }
  .token.number {
    color: var(--syntax-number);
  }
  .token.constant {
    color: var(--syntax-const);
  }
  .token.string {
    color: var(--syntax-string);
  }
  .token.rule {
    color: var(--syntax-rule);
  }
  .language-css, .token.selector, .token.variable {
    color: var(--syntax-selector);
  }
  .language-css .punctuation {
    color: var(--syntax-css-punctuation);
  }
  .token.property {
    color: var(--syntax-property);
  }
  .token.url {
    color: var(--syntax-url);
  }
  .token.url .punctuation {
    color: var(--syntax-url-punctuation);
  }
  .token.hexcode.color {
    color: var(--syntax-hexcode-color);
  }


  .token.entity,
  .style .token.string {
    color: #9a6e3a;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.namespace {
    opacity: 0.7;
  }
 
  .token.boolean,
  .token.symbol,
  .token.deleted {
    color: #905;
  }
  
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  
  .token.atrule {
    color: #07a;
  }
  .token.class-name {
    color: #00aaff;
  }
  .token.regex,
  .token.important {
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
