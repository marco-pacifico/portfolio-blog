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
  padding: 2rem; // site padding
  max-width: 680px; // blog content width
  ${BlogMarkdownStyles}
`;

const BlogPostHero = styled.section`
  padding: 2rem; // site padding
`;

const PageBottomSpacing = styled.div`
    padding: 4rem 2rem 8rem 2rem;
    margin-top: 4rem;
`