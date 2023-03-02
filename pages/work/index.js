import styled from "styled-components";
import Card from "../../components/ui/Card.js";
import Grid from "../../components/ui/Grid.js";
import PageHero from "../../components/sections/PageHero.js";
import { getSortedProjectsData } from "../../lib/getAndSaveProjects.js";
import { BREAKPOINT } from "../../styles/1-DesignTokens.js";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Work({ allProjectsData }) {
  return (
    <>
      <PageHero title="Work" />
      <List>
        {allProjectsData.map(({ slug, title, description }) => (
          <Card slug={slug} title={title} description={description} />
        ))}
      </List>
    </>
  );
}


const List = styled(Grid)`
  padding-left: var(--section-offset);
  padding-right: var(--section-offset);
  padding-bottom: var(--space-12);
  max-width: ${BREAKPOINT.desktoplarge / 16}rem;
  margin: 0 auto;
`
