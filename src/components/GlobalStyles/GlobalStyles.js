import { createGlobalStyle } from 'styled-components'
import { RestCSS } from './ResetCSS'
import { Fonts } from './Fonts'
import { LightTheme, DarkTheme } from './Themes'
import { FONTWEIGHTS } from '../DesignTokens'

const GlobalStyles = createGlobalStyle`
	
	/* CSS RESET */
	${RestCSS}

	/* FONTS */
	/* @font-face rules for custom, local fonts */
	${Fonts}
	/* Set default font family */
	*,
	*:before,
	*:after {
		font-family: var(--font-sans);
    }

	/* LIGHT AND DARK THEME */
	html {
		/* Defines CSS variables for colors. Default values are from the light theme. */
		${LightTheme}
		/* Set default text and background color */
		color: var(--color-text-primary);
		background: var(--color-background);

		/* Check if user's OS or browser setting is dark mode */
		@media (prefers-color-scheme: dark) {
			color-scheme: dark;
			/* Update CSS variable values for colors to those defined in dark theme. */
			${DarkTheme}
		}
	}

	/* BASELINE TYPOGRAPHY STYLES */
	h1, h2, h3, h4, h5, h6 {
		font-weight: ${FONTWEIGHTS.medium};
    }
	p {
		font-weight: ${FONTWEIGHTS.regular};
	}
`

export default GlobalStyles