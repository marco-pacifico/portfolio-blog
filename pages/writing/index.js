import styled from "styled-components";
import ListItem from "../../components/ui/ListItem.js";
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
          <ListItem key={slug} href={`/writing/${slug}`} title={title} description={description} isShown={true}/>
        ))}
      </List>
    </>
  );
}


const List = styled.ol`
  padding-left: var(--section-offset);
  padding-right: var(--section-offset);
  padding-bottom: var(--space-12);
  max-width: var(--width-site-max);
  margin: 0 auto;
`
