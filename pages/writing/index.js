import styled from "styled-components";
import ListItem from "../../components/ui/WritingListItem.js";
import PageHero from "../../components/sections/PageHero.js";
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

export default function Writing({ allPostsData }) {
  return (
    <>
      <PageHero title="Writing" />
      <List>
        {allPostsData.map(({ slug, title, description }) => (
          <ListItem slug={slug} title={title} description={description} />
        ))}
      </List>
    </>
  );
}


const List = styled.ul`
  padding-left: var(--section-offset);
  padding-right: var(--site-gutter);
  padding-bottom: var(--space-12);
  max-width: ${BREAKPOINT.desktoplarge / 16}rem;
  margin: 0 auto;
`
