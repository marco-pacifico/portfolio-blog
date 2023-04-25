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
  --color-border: hsl(${COLORS.sidewalk[300]});

  /* NAV LINK COLORS */
  --color-nav-text: hsl(${COLORS.sidewalk[800]});
  --color-nav-background: hsl(${COLORS.sidewalk[400]});
  /* NAV LINK COLORS (HOVER) */
  --color-nav-text-hover: hsl(${COLORS.sidewalk[800]});
  --color-nav-background-hover: hsl(${COLORS.sidewalk[500]});
  /* NAV LINK COLORS (ACTIVE) */
  --color-nav-text-active: hsl(${COLORS.sidewalk[100]});
  --color-nav-background-active: hsl(${COLORS.sidewalk[900]});
  /* NAV LINK COLORS (ACTIVE, HOVER) */
  --color-nav-text-active-hover: hsl(${COLORS.sidewalk[100]});
  --color-nav-background-active-hover: hsl(${COLORS.sidewalk[800]});

  /* CODE SYNTAX HIGHLIGHTING */
  --syntax-bg: hsl(210deg, 30%, 12%);
  --syntax-highlight: hsl(210deg, 30%, 18%);
  --syntax-txt: #fff;
  --syntax-comment: #6c8998;
  --syntax-prop: #ff39a8;
  --syntax-bool: #ffd600;
  --syntax-val: #718e9c;
  --syntax-str: #303030; // keyword
  --syntax-name: #c653ff;
  --syntax-del: #ff5555;
  --syntax-regex: #ffd700;
  --syntax-fn: #652DF2; // function
`;

export const DarkColors = css`
  /* TEXT COLORS */
  --color-text-strong: hsl(${COLORS.white[800]});
  --color-text-primary: hsl(${COLORS.white[700]});
  --color-text-secondary: hsl(${COLORS.night[400]});
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
  --color-background-darker: hsl(${COLORS.night[800]});

  /* BORDER COLORS */
  --color-border: hsl(${COLORS.night[700]});

  /* NAV LINK COLORS */
  --color-nav-text: hsl(${COLORS.night[300]});
  --color-nav-background: hsl(${COLORS.night[600]});
  /* NAV LINK COLORS (HOVER) */
  --color-nav-text-hover: var(--color-text-link);
  --color-nav-background-hover: hsl(${COLORS.night[500]});
  /* NAV LINK COLORS (ACTIVE) */
  --color-nav-text-active: hsl(${COLORS.night[100]});
  --color-nav-background-active: hsl(${COLORS.night[500]});
  /* NAV LINK COLORS (ACTIVE, HOVER) */
  --color-nav-text-active-hover: var(--color-text-link);
  --color-nav-background-active-hover: hsl(${COLORS.night[600]});

  /* CODE SYNTAX HIGHLIGHTING */
  --syntax-inline-bg: hsl(226deg 25% 12%); // dark gray
  --syntax-inline-txt: #FF5555; //red
  --syntax-bg: hsl(226deg 25% 8%); // dark gray
  --syntax-txt: #fff; // white
  --syntax-keyword: #88DDFF; // cyan
  --syntax-fn: #00AAFF; // blue
  --syntax-module: #FFCC33; // yellow
  --syntax-control-flow: #FFCC33; // yellow
  --syntax-parameter: #FFCC33; // yellow
  --syntax-tag: #75A0EA; // light blue 
  --syntax-punctuation: #00AAFF; // blue
  --syntax-tag-punctuation: slategray; // slate gray
  --syntax-css-punctuation: #75A0EA; // light blue
  --syntax-attr-name: #88DDFF; // cyan
  --syntax-attr-value: #98EC65; // green
  --syntax-attr-equals: #FF66BB; //pink
  --syntax-const: #00AAFF; // blue
  --syntax-number: #9F80FF; // purple
  --syntax-string: #98EC65; // green
  --syntax-selector: #00AAFF; // blue
  --syntax-rule: #FF66BB; //pink
  --syntax-property: #fff; // white
  --syntax-url: #98EC65; // green
  --syntax-url-punctuation: #FF66BB; //pink
  --syntax-hexcode-color: #9F80FF; // purple



  --syntax-comment: #6c8998;
  --syntax-prop: #ff39a8;
  --syntax-bool: #ffd600;
  --syntax-val: #718e9c;
  --syntax-name: #c653ff;
  --syntax-del: #ff5555;
  --syntax-regex: #ffd700;
`;
