import styled from "styled-components";
import { BREAKPOINT, QUERY } from "../../styles/1-DesignTokens";
import { H2, H3, Overline } from "../ui/Typography";

const PageHero = ({ category, title, description }) => {
  return (
    <SectionWrapper>
      {category && <Category>{category}</Category>}
      <Title as="h1">{title}</Title>
      {description && <Description as="p">{description}</Description>}
    </SectionWrapper>
  );
};

export default PageHero;

const SectionWrapper = styled.section`
  background-color: var(--color-background-darker);
  @media ${QUERY.phoneAndSmaller} {
      background-color: transparent;
      padding-bottom: 0;
    };
  max-width: ${BREAKPOINT.desktoplarge / 16}rem;
  margin: 0 auto;
  --section-padding-block-min: var(--space-9);
  --section-padding-block-target: var(--space-fluid-11);
  --section-padding-block-max: var(--space-fluid-11);
  --section-padding-block: clamp(
    var(--section-padding-block-min),
    var(--section-padding-block-target),
    var(--section-padding-block-max)
  );
  padding: var(--section-padding-block) var(--section-offset);

`;

const Category = styled(Overline)`
  /* font-size: var(--font-size-2); */
  --title-margin-min: var(--space-3);
  --title-margin-target: var(--space-fluid-4);
  --title-margin-max: var(--space-fluid-4);
  --title-margin: clamp(
    var(--title-margin-min),
    var(--title-margin-target),
    var(--title-margin-max)
  );
  margin-left: var(--space-fluid-2);
  margin-bottom: var(--title-margin);
`;
const Title = styled(H2)`
  font-size: 3.5rem;
  @media ${QUERY.phoneAndSmaller} {
      font-size: 2.75rem;
      line-height: 1.3em;
    };
 
  --title-margin-min: var(--space-5);
  --title-margin-target: var(--space-fluid-3);
  --title-margin-max: var(--space-fluid-3);
  --title-margin: clamp(
    var(--title-margin-min),
    var(--title-margin-target),
    var(--title-margin-max)
  );
  margin-bottom: var(--title-margin);
  /* margin-bottom: 1rem; */
  line-height: 1.1em;
`;

const Description = styled(H3)`
  font-size: 2.125rem;
  @media ${QUERY.phoneAndSmaller} {
      font-size: 1.875rem;
      line-height: 1.4em;
    };
  color: var(--color-text-secondary);
  --description-margin-min: var(--space-5);
  --description-margin-target: var(--space-fluid-6);
  --description-margin-max: var(--space-fluid-6);
  --description-margin: clamp(
    var(--description-margin-min),
    var(--description-margin-target),
    var(--description-margin-max)
  );
  margin-bottom: var(--description-margin);
  @media ${QUERY.phoneAndSmaller} {
    margin-bottom: 0;
  }
`;
