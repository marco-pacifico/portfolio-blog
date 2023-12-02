import { css } from "styled-components";

export const CodeSyntax = css`
  --font-code: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
    Courier, monospace;
  code {
    font-family: var(--font-code);
    font-size: 78%;
    background: var(--syntax-inline-bg);
    color: var(--syntax-inline-txt);
    border-radius: 7px;
    padding: 0.25em 0.4em;
    display: inline-block;
    transform: translateY(-0.05em);
    line-height: normal
  }
  pre {
    font-size: var(--font-size-paragraph);
    margin: var(--margin-image);
    padding: var(--space-6) var(--space-7);
    background: var(--syntax-bg);
    border-radius: 12px;
    overflow: auto;
    
    & code {
      background: none;
      padding: 0;
      color: var(--syntax-txt);
      line-height: var(--line-height-paragraph);
    }
  }
  .token {
    font-family: var(--font-code);
    line-height: 30px;
  }
  .token.function,
  .token.class-name {
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
  .token.punctuation,
  .token.script.language-javascript .punctuation {
    color: var(--syntax-punctuation);
  }
  .token.parameter,
  .token.script.language-javascript {
    color: var(--syntax-parameter);
  }
  .token.parameter .punctuation {
    color: var(--syntax-parameter-punctuation);
  }
  .token.tag,
  .token.doctype-tag,
  .token.doctype .name {
    color: var(--syntax-tag);
  }
  .token.tag .punctuation,
  .token.doctype .punctuation {
    color: var(--syntax-tag-punctuation);
  }
  .token.attr-name,
  .token.doctype .name {
    color: var(--syntax-attr-name);
  }
  .token.attr-value,
  .token.attr-value .punctuation,
  .token.name {
    color: var(--syntax-attr-value);
  }
  .token.operator,
  .token.script.language-javascript .script-punctuation.punctuation,
  .token.attr-value .attr-equals,
  .token.boolean,
  .token.symbol,
  .token.deleted,
  .token.important {
    color: var(--syntax-operator);
  }

  .token.number {
    color: var(--syntax-number);
  }
  .token.constant {
    color: var(--syntax-const);
  }

  .token.string,
  .token.entity,
  .style .token.string,
  .token.regex .regex-delimiter,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--syntax-string);
  }
  .token.rule,
  .token.atrule {
    color: var(--syntax-rule);
  }
  .language-css {
    color: var(--syntax-css-txt);
  }
  .token.selector,
  .token.variable {
    color: var(--syntax-selector);
  }
  .language-css .punctuation {
    color: var(--syntax-css-punctuation);
  }
  .language-css .token.variable {
    color: var(--syntax-css-variable);
  }
  .language-css .token.number {
    color: var(--syntax-css-number);
  }
  .language-css .token.unit {
    color: var(--syntax-css-unit);
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
  .token.hexcode.color,
  .token.regex {
    color: var(--syntax-hexcode-color);
  }
  .token.method.token.function.property-access {
    color: var(--syntax-method-access);
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.namespace {
    color: var(--syntax-comment);
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
