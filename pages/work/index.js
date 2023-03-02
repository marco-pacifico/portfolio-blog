import styled from "styled-components";
import Card from "../../components/ui/Card.js";
import Grid from "../../components/ui/Grid.js";
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

export default function Work({ allPostsData }) {
  return (
    <>
      <PageHero title="Writing" />
      <Grid>
        {allPostsData.map(({ slug, title, description }) => (
          <Card slug={slug} title={title} description={description} />
        ))}
      </Grid>
    </>
  );
}


const List = styled.ol`
  padding-left: var(--section-offset);
  padding-right: var(--section-offset);
  padding-bottom: var(--space-12);
  max-width: ${BREAKPOINT.desktoplarge / 16}rem;
  margin: 0 auto;
`
