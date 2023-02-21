import { createGlobalStyle } from "styled-components";
import { RestCSS } from "./ResetCSS";
import { CustomFonts } from "./CustomFonts";
import {
  BaseTypographyVariables,
  BlogTypographyVariables,
} from "./TypographyVariables";
import { LightColors, DarkColors } from "./ColorVariables";
import { LinkStyles } from "./LinkStyles";

const GlobalStyles = createGlobalStyle`
	
	/* CSS RESET */
	${RestCSS}

	/* FONTS */
	/* @font-face rules for custom, local fonts */
	${CustomFonts}
	
	/* TYPOGRAPHY */
	:root {
		${BaseTypographyVariables}
		${BlogTypographyVariables}
    }
	*,
	*:before,
	*:after {
		font-family: var(--font-sans);
    }
	h1, h2, h3, h4, h5, h6, strong {
		font-weight: var(--font-weight-bold);
    }
	::selection {
		 background: var(--color-text-selection-background);
		 color: var(--color-text-selection-text);
  	}
	

	/* LIGHT AND DARK THEME */
	html {
		/* Defines CSS variables for colors. Default values are from the light theme. */
		${LightColors}
		/* Set default text and background color */
		color: var(--color-text-primary);
		background: var(--color-background);

		/* Check if user's OS or browser setting is dark mode */
		@media (prefers-color-scheme: dark) {
			color-scheme: dark;
			/* Update CSS variable values for colors to those defined in dark theme. */
			${DarkColors}
		}
	}

`;

export default GlobalStyles;
