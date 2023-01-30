import { createGlobalStyle } from 'styled-components'
import { RestCSS } from './ResetCSS'
import { Fonts } from './Fonts'
import { CustomProperties } from './Variables'
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
	h1, h2, h3, h4, h5, h6, strong {
		font-weight: ${FONTWEIGHTS.medium};
    }
	p {
		font-weight: ${FONTWEIGHTS.regular};
	}

	:root {
		--viewportBasis: 1680;
        --fontSizeFluid1: calc(14 / var(--viewportBasis) * 100vw);
        --fontSizeFluid2: calc(16 / var(--viewportBasis) * 100vw);
        --fontSizeFluid3: calc(18 / var(--viewportBasis) * 100vw);
        --fontSizeFluid4: calc(24 / var(--viewportBasis) * 100vw);
        --fontSizeFluid5: calc(30 / var(--viewportBasis) * 100vw);
        --fontSizeFluid6: calc(48 / var(--viewportBasis) * 100vw);
        --fontSizeFluid7: calc(64 / var(--viewportBasis) * 100vw);
        --fontSizeFluid8: calc(80 / var(--viewportBasis) * 100vw);
        --fontSizeFluid9: calc(100 / var(--viewportBasis) * 100vw);
        --fontSizeFixed1: 14px;
        --fontSizeFixed2: 16px;
        --fontSizeFixed3: 18px;
        --fontSizeFixed4: 24px;
        --fontSizeFixed5: 30px;
        --fontSizeFixed6: 48px;
        --fontSizeFixed7: 64px;
        --fontSizeFixed8: 100px;
        --fontSizeBlog: 22px;
        --fontSizeBlogGlyph: 21px;
        --fontSizeNav: var(--fontSizeFixed2);
        --fontFamilyFallbackSansSerif: -apple-system, system-ui, BlinkMacSystemFont, 'Helvetica', 'Arial', sans-serif;
        --fontFamilyFallbackSerif: Georgia, Cambria, 'Times New Roman', Times, serif;
        --fontFamilyFallbackMono: "Lucida Console", Monaco, monospace;

		${CustomProperties}
	}
`

export default GlobalStyles