import styled from "styled-components";
import { BREAKPOINT, QUERY } from "../../styles/1-DesignTokens";
import { H2, H3, Overline } from "../ui/Typography";

const BlogPostHero = ({ category, title, description }) => {
  return (
    <SectionWrapper>
      {category && 
      <Category>{category}</Category>}
      <Title as="h1">{title}</Title>
      <Description as="p">{description}</Description>
    </SectionWrapper>
  );
};

export default BlogPostHero;

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
  padding-top: var(--section-padding-top);
  padding-bottom: 0;
  padding-right: var(--section-offset);
  padding-left: var(--section-offset);

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;

  @media ${QUERY.phoneAndSmaller} {
    display: revert;
    height: revert;
  }
  /* border-bottom: 1px solid var(--color-border); */
  /* background: linear-gradient(
    0deg,
    var(--color-background),
    10%,
    var(--color-background-lighter),
  ); */
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
  margin-left: var(--space-2);
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

  /* max-width: 38ch;
  /* margin: 0; */
`;
