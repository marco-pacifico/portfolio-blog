import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import MorePosts from "../components/MorePosts";
import { BlogMarkdownStyles } from "../styles/BlogMarkdownStyles";

export default function BlogPostLayout({ children, meta }) {
  const router = useRouter();
  const isAboutPage = router.asPath.includes("about")
  return (
    <>
      <Head>
        <title>{`${meta.title} | Marco Pacifico`}</title>
        <meta property="og:title" content={meta.title} key="title" />
        <meta name="description" content={meta.description} />
      </Head>
      <BlogPostHero>
        <h1>{meta.title}</h1>
        <h3>{meta.description}</h3>
      </BlogPostHero>
      <BlogPostContent>{children}</BlogPostContent>
      {isAboutPage ? <PageBottomSpacing/> : <MorePosts currentPost={meta.slug} />}
    </>
  );
}

const BlogPostContent = styled.article`
  margin: 0 auto;
  padding: var(--site-gutter); 
  max-width: var(--width-blog-content);
  ${BlogMarkdownStyles}
`;

const BlogPostHero = styled.section`
  padding: var(--site-gutter); 
`;

const PageBottomSpacing = styled.div`
    padding: var(--space-12) var(--site-gutter);
`