import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import PageHero from "../sections/PageHero";
import MoreWriting from "../sections/MoreWriting";
import MoreWork from "../sections/MoreWork";
import { BlogMarkdownStyles } from "../../styles/BlogMarkdownStyles";
import { BREAKPOINT } from "../../styles/1-DesignTokens";
import localFont from "@next/font/local";
const UntitledSerif = localFont({
  variable: "--font-serif",
  src: [
    {
      path: "../../fonts/untitled-serif-web-medium-italic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/untitled-serif-web-medium.woff2",
      weight: "500",
      style: "regular",
    },
    {
      path: "../../fonts/untitled-serif-web-regular-italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/untitled-serif-web-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

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
      <BlogPostContent className={UntitledSerif.variable}>{children}</BlogPostContent>
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
  padding-left: var(--site-gutter);
  padding-right: var(--site-gutter);
  & > * {
    grid-column: 2;
  }
`;

const PageBottomSpacing = styled.div`
  padding: var(--space-12) var(--site-gutter);
`;
