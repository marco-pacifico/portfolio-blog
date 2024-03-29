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
      <Section>
        <Grid>
          {allProjectsData.map(({ slug, thumbnail, title, description, category }) => (
            <Card
              key={slug}
              href={`/work/${slug}`}
              thumbnail={`/thumbnails/${thumbnail}`}
              category={category}
              title={title}
              description={description}
            />
          ))}
        </Grid>
      </Section>
    </>
  );
}

const Section = styled.section`
  padding-left: var(--section-offset);
  padding-right: var(--section-offset);
  padding-bottom: var(--space-12);
  padding-top: calc(var(--space-9) + var(--space-7));
  max-width: ${BREAKPOINT.desktoplarge / 16}rem;
  margin: 0 auto;
`;
