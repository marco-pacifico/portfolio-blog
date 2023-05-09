import { css } from "styled-components";
import { COLORS } from "./1-DesignTokens";


export const LightColors = css`
  /* TEXT COLORS */
  --color-text-strong: hsl(${COLORS.sidewalk[900]});
  --color-text-primary: hsl(${COLORS.sidewalk[800]});
  --color-text-secondary: hsl(${COLORS.sidewalk[600]});
  --color-text-tertiary: hsl(${COLORS.sidewalk[500]});

  /* LINK COLORS */
  --color-text-link: hsl(${COLORS.sky[600]});
  --color-text-link-underline: hsl(${COLORS.sidewalk[400]});
  --color-text-selection-background: var(--color-text-link);
  --color-text-selection-text: var(--color-text-strong);

  /* BACKGROUND COLORS */
  --color-background: hsl(${COLORS.sidewalk[100]});
  --color-background-lighter: hsl(${COLORS.sidewalk[50]});
  --color-background-darker: hsl(${COLORS.sidewalk[200]});

  /* BORDER COLORS */
  --color-border: hsl(${COLORS.sidewalk[200]});

  /* NAV LINK COLORS */
  --color-nav-text: hsl(${COLORS.sidewalk[700]});
  --color-nav-background: var(--color-background);
  --color-nav-border: hsl(${COLORS.sidewalk[200]});
  /* NAV LINK COLORS (HOVER) */
  --color-nav-text-hover: hsl(${COLORS.sidewalk[800]});
  --color-nav-background-hover: var(--color-background-darker);
  /* NAV LINK COLORS (ACTIVE) */
  --color-nav-text-active: hsl(${COLORS.sidewalk[800]});
  --color-nav-background-active: var(--color-background-darker);
  /* NAV LINK COLORS (ACTIVE, HOVER) */
  --color-nav-text-active-hover: hsl(${COLORS.sidewalk[800]});
  --color-nav-background-active-hover: hsl(${COLORS.sidewalk[300]});

  /* CODE SYNTAX HIGHLIGHTING */
  --syntax-bg: var(--color-background-darker);
  --syntax-inline-bg: var(--color-background-darker);
  --syntax-tag-punctuation: #696969; // light gray
  --syntax-comment: #696969; // light gray
  --syntax-inline-txt: #CB0101; // red
  --syntax-txt: #303030; // dark gray 
  --syntax-parameter: #303030; // dark gray 
  --syntax-property: #303030; // dark gray 
  --syntax-fn: #0062BD; // blue
  --syntax-selector: #0062BD; // blue
  --syntax-const: #0062BD; // blue
  --syntax-tag: #00735E; // moss
  --syntax-punctuation: #00735E; // moss
  --syntax-css-txt: #00735E; // moss
  --syntax-css-punctuation: #00735E; // moss
  --syntax-css-unit: #00735E; // moss
  --syntax-keyword: #017189; // cyan
  --syntax-method-access: #017189; // cyan
  --syntax-attr-name: #017189; // cyan
  --syntax-module: #806000; // gold 
  --syntax-control-flow: #806000; // gold 
  --syntax-parameter-punctuation: #806000; // gold 
  --syntax-css-variable: #806000; // gold 
  --syntax-css-number: #652DF2; // purple
  --syntax-hexcode-color: #652DF2; // purple
  --syntax-number: #652DF2; // purple
  --syntax-operator: #BF006A; // pink
  --syntax-rule: #BF006A; // pink
  --syntax-url-punctuation: #BF006A; // pink
  --syntax-string: #147500; // green
  --syntax-attr-value: #147500; // green
  --syntax-url: #147500; // green
`;

export const DarkColors = css`
  /* TEXT COLORS */
  --color-text-strong: hsl(${COLORS.white[800]});
  --color-text-primary: hsl(${COLORS.white[700]});
  --color-text-secondary: hsl(${COLORS.night[300]});
  --color-text-tertiary: hsl(${COLORS.night[400]});

  /* TEXT SELECTION COLRS */
  --color-text-selection-background: var(--color-text-link);
  --color-text-selection-text: var(--color-text-strong);

  /* HYPERLINK COLORS */
  --color-text-link: hsl(${COLORS.moss[500]});
  --color-text-link-underline: hsl(${COLORS.night[400]});

  /* BACKGROUND COLORS */
  --color-background: hsl(${COLORS.night[900]});
  --color-background-lighter: hsl(${COLORS.night[600]});
  --color-background-darker: hsl(${COLORS.night[700]});

  /* BORDER COLORS */
  --color-border: hsl(${COLORS.night[600]});

  /* NAV LINK COLORS */
  --color-nav-text: hsl(${COLORS.night[300]});
  --color-nav-background: hsl(${COLORS.night[800]});
  --color-nav-border: hsl(${COLORS.night[600]});
  /* NAV LINK COLORS (HOVER) */
  --color-nav-text-hover: hsl(${COLORS.night[100]});
  --color-nav-background-hover: hsl(${COLORS.night[600]});
  /* NAV LINK COLORS (ACTIVE) */
  --color-nav-text-active: hsl(${COLORS.night[100]});
  --color-nav-background-active: hsl(${COLORS.night[600]});
  /* NAV LINK COLORS (ACTIVE, HOVER) */
  --color-nav-text-active-hover: hsl(${COLORS.night[100]});
  --color-nav-background-active-hover: hsl(${COLORS.night[700]});

  /* CODE SYNTAX HIGHLIGHTING */
  --syntax-inline-bg: hsl(226deg 20% 14%); // dark gray
  --syntax-inline-txt: #FF5555; // red
  --syntax-bg: hsl(226deg 15% 9%); // dark gray
  --syntax-txt: #fff; // white
  --syntax-keyword: #88DDFF; // cyan
  --syntax-fn: #00AAFF; // blue
  --syntax-parameter: #fff; // white
  --syntax-module: #FFCC33; // yellow
  --syntax-control-flow: #FFCC33; // yellow
  --syntax-tag: #75A0EA; // light blue 
  --syntax-punctuation: #75A0EA; // light blue 
  --syntax-parameter-punctuation: #FFCC33; // yellow
  --syntax-tag-punctuation: hsl(226deg 13% 55%); // gray
  --syntax-comment: hsl(226deg 13% 55%); // gray
  --syntax-css-txt: #75A0EA; // light blue
  --syntax-css-punctuation: #75A0EA; // light blue
  --syntax-css-number: #9F80FF; // purple
  --syntax-css-unit: #75A0EA; // light blue
  --syntax-css-variable: #FFCC33; // yellow
  --syntax-hexcode-color: #9F80FF; // purple
  --syntax-attr-name: #88DDFF; // cyan
  --syntax-attr-value: #ABEA77; // green
  --syntax-operator: #FF66BB; //pink
  --syntax-const: #00AAFF; // blue
  --syntax-number: #9F80FF; // purple
  --syntax-string: #ABEA77; // green
  --syntax-selector: #00AAFF; // blue
  --syntax-rule: #FF66BB; //pink
  --syntax-property: #fff; // white
  --syntax-url: #ABEA77; // green
  --syntax-url-punctuation: #FF66BB; //pink
  --syntax-method-access: #88DDFF; // cyan
`;
