import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import PageHero from "../sections/PageHero";
import MoreWriting from "../sections/MoreWriting";
import MoreWork from "../sections/MoreWork";
import { BlogMarkdownStyles } from "../../styles/BlogMarkdownStyles";
import { BREAKPOINT, QUERY} from "../../styles/1-DesignTokens";
// import localFont from "@next/font/local";
// const UntitledSerif = localFont({
//   variable: "--font-serif",
//   src: [
//     {
//       path: "../../fonts/untitled-serif-web-medium-italic.woff",
//       weight: "500",
//       style: "italic",
//     },
//     {
//       path: "../../fonts/untitled-serif-web-medium.woff2",
//       weight: "500",
//       style: "regular",
//     },
//     {
//       path: "../../fonts/untitled-serif-web-regular-italic.woff",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../../fonts/untitled-serif-web-regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//   ],
// });

export default function BlogPostLayout({ children, meta }) {
  const router = useRouter();
  const isAboutPage = router.asPath.includes("about");
  const isWorkPage = router.asPath.includes("work");
  const isWritingPage = router.asPath.includes("writing");

  return (
    <>
      <Head>
        <title>{`${meta.title} | Marco Pacifico`}</title>
        <meta property="og:title" content={meta.title} key="title" />
        <meta name="description" content={meta.description} />
      </Head>
      <PageHero category={meta.category} title={meta.title} description={meta.description} />
      <BlogPostContent>{children}</BlogPostContent>
      {isAboutPage && <PageBottomSpacing/>}
      {isWritingPage && <MoreWriting currentPost={meta.slug} />}
      {isWorkPage && <MoreWork currentPost={meta.slug} />}
      {/* {isAboutPage ? (
        <PageBottomSpacing />
      ) : (
        <MoreWriting currentPost={meta.slug} />
      )} */}
    </>
  );
}

// const Wrapper = styled.div`
// `;

const BlogPostContent = styled.article`
  ${BlogMarkdownStyles}
  max-width: ${BREAKPOINT.desktoplarge / 16}rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns:
    1fr
    min(var(--width-blog-content), 100%)
    1fr;
    --page-padding-block-min: var(--space-9);
    --page-padding-block-target: var(--space-fluid-11);
    --page-padding-block-max: var(--space-11);
    --page-padding-block: clamp(
      var(--page-padding-block-min),
      var(--page-padding-block-target),
      var(--page-padding-block-max)
      );
    padding: var(--page-padding-block) var(--site-gutter);
    padding-top: var(--space-8);
    & > * {
    grid-column: 2;

    // Hero image or hero div (for code posts) are spaced closer to the title vs. text-only posts
    // If the first child of the article not an image or div, give it a larger top margin to create more space between the title and the first paragraph
    &:first-child:not(img):not(div){
      margin-top: var(--space-12);

      @media ${QUERY.phoneAndSmaller} {
        margin-top: var(--space-8);
      }
    }

  }
 
  grid-row-gap: var(--space-3);
`;

const PageBottomSpacing = styled.div`
  padding: var(--space-12) var(--site-gutter);
`;
