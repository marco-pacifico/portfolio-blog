import styled from "styled-components";
import Link from "next/link.js";

export default function Blog({ allPostsData }) {
  return (
    <>
      <Name>Blog</Name>
      <Welcome>This is a list of blog posts</Welcome>
      <ul>
        {allPostsData.map(({ slug, title, description }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <h1>{title}</h1>
              <p>{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

const Name = styled.h1`
  font-size: var(--fontSizeFluid9);
  font-weight: 300;
`;
const Welcome = styled.p`
  font-size: var(--fontSizeFluid5);
  font-weight: 400;
`;

import { getSortedPostsData } from "../../lib/getAndSavePosts.js";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
