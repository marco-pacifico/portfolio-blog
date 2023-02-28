import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import BlogPostHero from "../sections/BlogPostHero";
import MorePosts from "../sections/MorePosts";
import { BlogMarkdownStyles } from "../../styles/BlogMarkdownStyles";
import { BREAKPOINT } from "../../styles/1-DesignTokens";

export default function BlogPostLayout({ children, meta }) {
  const router = useRouter();
  const isAboutPage = router.asPath.includes("about");
  return (
    <>
      <Head>
        <title>{`${meta.title} | Marco Pacifico`}</title>
        <meta property="og:title" content={meta.title} key="title" />
        <meta name="description" content={meta.description} />
      </Head>
      {/* <BlogPostHero
        title={meta.title}
        description={meta.description}
      /> */}
      {/* <Wrapper>
      </Wrapper> */}
      <BlogPostContent>{children}</BlogPostContent>
      {isAboutPage ? (
        <PageBottomSpacing />
      ) : (
        <MorePosts currentPost={meta.slug} />
      )}
    </>
  );
}

const Wrapper = styled.div`
  /* background-color: var(--color-background-lighter); */
`;
const BlogPostContent = styled.article`
  /* margin: 0 auto;
  padding: var(--site-gutter); 
  max-width: var(--width-blog-content); */
  ${BlogMarkdownStyles}
  max-width: ${BREAKPOINT.desktoplarge/16}rem;
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
