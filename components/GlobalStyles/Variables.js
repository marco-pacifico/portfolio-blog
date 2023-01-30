import { css } from "styled-components";

export const CustomProperties = css`
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
        --fontFamilySoehne: "SOEHNE_BUCH", var(--fontFamilyFallbackSansSerif);
        --fontFamilySoehneMono: "SOEHNE_MONO", var(--fontFamilyFallbackMono);
        --fontFamilySoehneIkon: "SOEHNE_IKON";
        --fontFamilySignifier: "SIGNIFIER", var(--fontFamilyFallbackSerif);
        --fontFamilyTheFuture: "THE_FUTURE", var(--fontFamilyFallbackSansSerif);
        --gridColumnCount: 12;
        --gridColumnGap: calc(12 / 1680 * 100vw);
        --gridMarginGapRelative: 0.03333333333333333;
        --gridMarginGap: calc(var(--gridMarginGapRelative) * 100vw);
        --gridTemplateColumnsDefault: repeat(var(--gridColumnCount), minmax(0, 1fr));
        --lineHeightHeading1: 1;
        --lineHeightHeading2: 1.25;
        --lineHeightHeading3: 1.1;
        --lineHeightBody1: 1.3333;
        --lineHeightBody2: 1.5;
        --lineHeightBody3: 0.75;
        --lineHeightBody4: 1.8;
        --lineHeightSignifierBody: 1.4;
        --lineHeightSignifierBodyPx: calc(var(--lineHeightSignifierBody) * var(--fontSizeBlog));
        --lineHeightStandardBodyPx: calc(var(--lineHeightBody2) * var(--fontSizeFixed2));
        --lineHeightNavPx: 21px;
        --lineHeightNavHalfPx: 11px;
        --lineHeightNavOneAndHalfPx: 32px;
        --spacing0: calc(4 / var(--viewportBasis) * 100vw);
        --spacing1: calc(8 / var(--viewportBasis) * 100vw);
        --spacing2: calc(16 / var(--viewportBasis) * 100vw);
        --spacing3: calc(24 / var(--viewportBasis) * 100vw);
        --spacing4: calc(32 / var(--viewportBasis) * 100vw);
        --spacing5: calc(40 / var(--viewportBasis) * 100vw);
        --spacing6: calc(60 / var(--viewportBasis) * 100vw);
        --spacing7: calc(80 / var(--viewportBasis) * 100vw);
        --spacing8: calc(160 / var(--viewportBasis) * 100vw);
        --spacing9: calc(240 / var(--viewportBasis) * 100vw);
        --spacing10: calc(320 / var(--viewportBasis) * 100vw);
        --spacing11: calc(580 / var(--viewportBasis) * 100vw);
        --spacingCheckable: 0.33em;
        --streamFieldSpacing: calc(130 / var(--viewportBasis) * 100vw);
        --streamFieldSpacingGoldenRatio: calc(var(--streamFieldSpacing) / 1.61803398875);
        --baselineSpacing: var(--spacing6);
        --navbarPaddingTop: var(--lineHeightNavOneAndHalfPx);
        --navbarPaddingBottom: calc(var(--lineHeightNavPx) * 2 - var(--lineHeightNavHalfPx));
        --subnavPaddingTopBottom: var(--lineHeightNavHalfPx);
        --subnavPaddingBottomExpanded: var(--lineHeightNavOneAndHalfPx);
        --navbarHeight: calc(calc(var(--navbarPaddingTop) + var(--navbarPaddingBottom)) + var(--lineHeightNavPx));
        --subnavCollapsedHeight: calc(calc(var(--subnavPaddingTopBottom) * 2) + var(--lineHeightNavPx));
        --subnavInitialHeight: auto;
        --inFlowPaddingForNavbar: calc(var(--subnavInitialHeight) + var(--spacing5));
        --paddingPageDefault: var(--spacing8) 0;
        --transitionDurationFast: 50ms;
        --transitionDurationSlow: 200ms;
        --transitionEasingDefault: ease;
        --transitionFast: var(--transitionDurationFast) var(--transitionEasingDefault);
        --transitionSlow: var(--transitionDurationSlow) var(--transitionEasingDefault);
        --imageFilter: none;
        --imageOpacity: 1;
        --imageHoverOpacity: 0.8;
    }/*!sc*/

    @media screen and (max-width: 768px) {
        :root {
            --viewportBasis: 768;
        }
    }/*!sc*/

    @media screen and (max-width: 414px) {
        :root {
            --viewportBasis: 414;
        }
    }/*!sc*/

    @media screen and (max-width: 1366px) {
        :root {
            --fontSizeFixed1: 12px;
            --fontSizeFixed2: 14px;
            --fontSizeFixed3: 16px;
            --fontSizeFixed4: 20px;
            --fontSizeFixed5: 24px;
            --fontSizeFixed6: 30px;
            --fontSizeFixed7: 48px;
            --fontSizeFixed8: 72px;
        }
    }/*!sc*/

    @media screen and (max-width: 1024px) {
        :root {
            --fontSizeFixed1: 12px;
            --fontSizeFixed2: 14px;
            --fontSizeFixed3: 16px;
            --fontSizeFixed4: 18px;
            --fontSizeFixed5: 20px;
            --fontSizeFixed6: 24px;
            --fontSizeFixed7: 32px;
            --fontSizeFixed8: 56px;
        }
    }/*!sc*/

    @media screen and (min-width: 2000px) {
        :root {
            --fontSizeFixed1: 16px;
            --fontSizeFixed2: 18px;
            --fontSizeFixed3: 20px;
            --fontSizeFixed4: 28px;
            --fontSizeFixed5: 36px;
            --fontSizeFixed6: 56px;
            --fontSizeFixed7: 72px;
            --fontSizeFixed8: 120px;
        }
    }/*!sc*/

    @media screen and (max-width: 1680px) {
        :root {
            --fontSizeBlog: 20px;
            --fontSizeBlogGlyph: 19px;
        }
    }/*!sc*/

    @media screen and (max-width: 768px) {
        :root {
            --fontSizeBlog: 18px;
            --fontSizeBlogGlyph: 17px;
        }
    }/*!sc*/

    @media screen and (min-width: 2000px) {
        :root {
            --fontSizeBlog: 24px;
            --fontSizeBlogGlyph: 23px;
        }
    }/*!sc*/

    @media screen and (max-width: 768px) {
        :root {
            --baselineSpacing: var(--spacing5);
        }
    }/*!sc*/

    @media screen and (max-width: 768px) {
        :root {
            --baselineSpacing: var(--spacing5);
        }
    }/*!sc*/

    @media screen and (max-width: 414px) {
        :root {
            --baselineSpacing: 135px;
        }
    }/*!sc*/

    @media screen and (max-width: 414px) {
        :root {
            --paddingPageDefault: var(--spacing7) 0;
        }
    }/*!sc*/

    @media screen and (max-width: 768px) {
        :root {
            --gridColumnCount: 6;
            --gridColumnGap: calc(12 / 768 * 100vw);
            --gridMarginGapRelative: 0.03125;
        }
    }/*!sc*/

    @media screen and (max-width: 414px) {
        :root {
            --gridColumnCount: 6;
            --gridColumnGap: calc(10 / 414 * 100vw);
            --gridMarginGapRelative: 0.03864734299516908;
        }
    }/*!sc*/

    @media screen and (max-width: 1366px) {
        :root {
            --lineHeightNavPx: 19px;
            --lineHeightNavHalfPx: 9px;
            --lineHeightNavOneAndHalfPx: 28px;
        }
    }/*!sc*/

    @media screen and (max-width: 1024px) {
        :root {
            --lineHeightNavPx: 19px;
            --lineHeightNavHalfPx: 9px;
            --lineHeightNavOneAndHalfPx: 28px;
        }
    }/*!sc*/

    @media screen and (min-width: 2000px) {
        :root {
            --lineHeightNavPx: 24px;
            --lineHeightNavHalfPx: 12px;
            --lineHeightNavOneAndHalfPx: 36px;
        }
    }/*!sc*/



`