import { createGlobalStyle } from 'styled-components'
import { RestCSS } from '../styles/ResetCSS'
import { CustomFonts } from '../styles/CustomFonts'
import { BlogTypographyVariables } from '../styles/BlogTypographyVariables'
import { LightColors, DarkColors } from '../styles/ColorThemes'


const GlobalStyles = createGlobalStyle`
	
	/* CSS RESET */
	${RestCSS}

	/* FONTS */
	/* @font-face rules for custom, local fonts */
	${CustomFonts}
	
	/* TYPOGRAPHY */
	:root {
		--font-fallback-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        --font-fallback-serif: Georgia, Cambria, 'Times New Roman', Times, serif;

        --font-sans: 'Untitled Sans', var(--font-fallback-sans);
        --font-serif: 'Untitled Serif', var(--font-fallback-serif);

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
	p {
		font-weight: var(--font-weight-regular);
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