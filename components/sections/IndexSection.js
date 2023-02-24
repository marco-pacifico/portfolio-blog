import styled from "styled-components";
import { H2, H3 } from "../ui/Typography";

const IndexSection = ({title, description, children}) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {children}
    </SectionWrapper>
  );
};

export default IndexSection;

const SectionWrapper = styled.section`
  --section-padding-block-min: var(--space-9);
  --section-padding-block-target: var(--space-fluid-11);
  --section-padding-block-max: var(--space-fluid-11);
  --section-padding-block: clamp(
    var(--section-padding-block-min),
    var(--section-padding-block-target),
    var(--section-padding-block-max)
  );
  padding-block: var(--section-padding-block);
  padding-right: var(--section-offset);
  margin-left: var(--section-offset);
  border-top: 1px solid var(--color-border);
`;

const Title = styled(H2)`
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

const Description = styled(H3)`
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
