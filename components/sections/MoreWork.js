import styled from "styled-components";
import Card from "../ui/Card";
import Grid from "../ui/Grid";
import PROJECTS from "../../data/PROJECTS";
import { Overline } from "../ui/Typography.js";
import { BREAKPOINT } from "../../styles/1-DesignTokens.js";

const MoreWork = ({ currentPost }) => {
  const filteredPROJECTS = PROJECTS.filter(
    (project) => project.slug !== currentPost
  );
  return (
    <MorePostsSection>
      <Overline>More Work</Overline>
      <Grid>
        {filteredPROJECTS.map(
          ({ slug, thumbnail, title, description, category }) => (
            <Card
              key={slug}
              href={`/work/${slug}`}
              thumbnail={`/thumbnails/${thumbnail}`}
              category={category}
              title={title}
              description={description}
            />
          )
        )}
      </Grid>
    </MorePostsSection>
  );
};

export default MoreWork;

const MorePostsSection = styled.section`
  --list-item-space-min: var(--space-7);
  --list-item-space-target: var(--space-fluid-8);
  --list-item-space-max: var(--space-fluid-8);
  --list-item-space: clamp(
    var(--list-item-space-min),
    var(--list-item-space-target),
    var(--list-item-space-max)
  );
  display: flex;
  flex-direction: column;
  gap: var(--list-item-space);

  margin-top: var(--space-9);
  padding-top: var(--space-9);
  padding-inline: var(--section-offset);
  padding-bottom: var(--space-12);
  
  max-width: ${BREAKPOINT.desktoplarge / 16}rem;
  margin-inline: auto;
  border-top: 1px solid var(--color-border);
`;
