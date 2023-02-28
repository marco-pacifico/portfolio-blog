import styled from "styled-components";
import ListItem from "../../components/ui/WritingListItem.js";
import BlogPostHero from "../../components/sections/BlogPostHero.js";
import { getSortedPostsData } from "../../lib/getAndSavePosts.js";
import { BREAKPOINT } from "../../styles/1-DesignTokens.js";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <BlogPostHero 
        title="Writing"
        description="This is a list of blog posts"
      />
      <List>
        {allPostsData.map(({ slug, title, description }) => (
          <ListItem 
            slug={slug}
            title={title}
            description={description}
          />
          // <li key={slug}>
          //   <StyledLink href={`/blog/${slug}`}>
          //     <h1>{title} →</h1>
          //     <p>{description}</p>
          //   </StyledLink>
          // </li>
        ))}
      </List>
    </>
  );
}

const PageWrapper = styled.section`
  /* height: 100%; */
  padding: 2rem; // site padding
`;

const List = styled.ul`
    padding-left: var(--section-offset);
    padding-right: var(--site-gutter);
    padding-bottom: var(--space-12);
    max-width: ${BREAKPOINT.desktoplarge /16}rem;
    margin: 0 auto;
    /* display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 2rem 0; */
`
// const StyledLink = styled(Link)`
//     text-decoration: none;

//     h1 {
//         font-size: var(--font-size-6);
//         color: var(--color-text-primary);
//         margin-bottom: 4px;
//     }

//     p {
//         font-size: var(--font-size-4);
//         color: var(--color-text-secondary);

//     }

//     &:hover h1 {
//         color: var(--color-text-link);
//     }
// `
