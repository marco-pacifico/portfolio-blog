import styled from "styled-components";
import Link from "next/link.js";
import { NavLink } from "../../components/nav/NavLink.js";

export default function Blog({ allPostsData }) {
  return (
    <PageWrapper>
      <Name>Blog</Name>
      <Welcome>This is a list of blog posts</Welcome>
      <List>
        {allPostsData.map(({ slug, title, description }) => (
          <li key={slug}>
            <StyledLink href={`/blog/${slug}`}>
              <h1>{title} →</h1>
              <p>{description}</p>
            </StyledLink>
          </li>
        ))}
      </List>
    </PageWrapper>
  );
}

const PageWrapper = styled.section`
  /* height: 100%; */
  padding: 2rem; // site padding
`;
const Name = styled.h1`
  font-size: var(--fontSizeFluid9);
  font-weight: 300;
`;
const Welcome = styled.p`
  font-size: var(--fontSizeFluid5);
  font-weight: 400;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 2rem 0;
`
const StyledLink = styled(Link)`
    text-decoration: none;

    h1 {
        font-size: var(--font-size-6);
        color: var(--color-text-primary);
        margin-bottom: 4px;
    }

    p {
        font-size: var(--font-size-4);
        color: var(--color-text-secondary);

    }

    &:hover h1 {
        color: var(--color-text-link);
    }
`

import { getSortedPostsData } from "../../lib/getAndSavePosts.js";
import { LinkStyles } from "../../styles/LinkStyles.js";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
