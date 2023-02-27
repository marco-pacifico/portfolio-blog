import styled from "styled-components";
import { H4, H3 } from "../ui/Typography";

const BlogPostHero = ({title, description}) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </SectionWrapper>
  );
};

export default BlogPostHero;

const SectionWrapper = styled.section`
  --section-padding-top-min: var(--space-9);
  --section-padding-top-target: var(--space-fluid-11);
  --section-padding-top-max: var(--space-fluid-11);
  --section-padding-top: clamp(
    var(--section-padding-top-min),
    var(--section-padding-top-target),
    var(--section-padding-top-max)
  );
  --section-padding-bottom: calc(2 * var(--section-padding-top));

  padding-top: var(--section-padding-top);
  padding-bottom: var(--section-padding-bottom);
  padding-right: var(--section-offset);
  margin-left: var(--section-offset);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 70vh;
  border-bottom: 1px solid var(--color-border);
  /* background: linear-gradient(
    0deg,
    var(--color-background),
    10%,
    var(--color-background-lighter),
  ); */
`;

const Title = styled(H3)`
  --title-margin-min: var(--space-5);
  --title-margin-target: var(--space-fluid-7);
  --title-margin-max: var(--space-fluid-7);
  --title-margin: clamp(
    var(--title-margin-min),
    var(--title-margin-target),
    var(--title-margin-max)
  );
  margin-bottom: var(--title-margin);
`;

const Description = styled(H4)`
  --description-margin-min: var(--space-9);
  --description-margin-target: var(--space-fluid-11);
  --description-margin-max: var(--space-fluid-11);
  --description-margin: clamp(
    var(--description-margin-min),
    var(--description-margin-target),
    var(--description-margin-max)
  );
  margin-bottom: var(--description-margin);
  max-width: 38ch;
`;
