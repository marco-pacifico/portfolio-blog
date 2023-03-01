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
  max-width: ${BREAKPOINT.desktoplarge / 16}rem;
  margin: 0 auto;
  --section-padding-top-min: var(--space-9);
  --section-padding-top-target: var(--space-fluid-11);
  --section-padding-top-max: var(--space-fluid-11);
  --section-padding-top: clamp(
    var(--section-padding-top-min),
    var(--section-padding-top-target),
    var(--section-padding-top-max)
  );
  --section-padding-bottom-min: var(--space-5);
  --section-padding-bottom-target: var(--space-fluid-7);
  --section-padding-bottom-max: var(--space-fluid-7);
  --section-padding-bottom: clamp(
    var(--section-padding-bottom-min),
    var(--section-padding-bottom-target),
    var(--section-padding-bottom-max)
  );
  padding-top: var(--section-padding-top);
  padding-bottom: var(--section-padding-bottom);
  padding-right: var(--section-offset);
  padding-left: var(--section-offset);
`;

const Category = styled(Overline)`
  --title-margin-min: var(--space-3);
  --title-margin-target: var(--space-fluid-4);
  --title-margin-max: var(--space-fluid-4);
  --title-margin: clamp(
    var(--title-margin-min),
    var(--title-margin-target),
    var(--title-margin-max)
  );
  margin-bottom: var(--title-margin);
`;
const Title = styled(H2)`
  --title-margin-min: var(--space-4);
  --title-margin-target: var(--space-fluid-3);
  --title-margin-max: var(--space-fluid-3);
  --title-margin: clamp(
    var(--title-margin-min),
    var(--title-margin-target),
    var(--title-margin-max)
  );
  margin-bottom: var(--title-margin);
  line-height: 1.1em;
`;

const Description = styled(H3)`
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
