import { createGlobalStyle } from 'styled-components'
import { RestCSS } from '../styles/ResetCSS'
import { CustomFonts } from '../styles/CustomFonts'
import { BaseTypographyVariables, BlogTypographyVariables } from '../styles/TypographyVariables'
import { LightColors, DarkColors } from '../styles/ColorVariables'


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

`

export default GlobalStyles