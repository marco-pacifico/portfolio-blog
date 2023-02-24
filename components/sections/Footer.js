import styled from "styled-components";
import { H3, H2, Paragraph } from "../ui/Typography";
import { LINEHEIGHT} from "../../styles/1-DesignTokens";

const Footer = () => {
  return (
    <SectionWrapper>
      <Title>Say hello</Title>
      <Description>Content goes here</Description>
    </SectionWrapper>
  );
};

export default Footer;

const SectionWrapper = styled.footer`
  --padding-top-min: var(--space-8);
  --padding-top-target: var(--space-fluid-11);
  --padding-top-max: var(--space-fluid-11);
  --padding-top: clamp(
    var(--padding-top-min),
    var(--padding-top-target),
    var(--padding-top-max)
  );
  --padding-bottom: calc(var(--padding-top) + var(--header-height));
  --padding-left: var(--section-offset);
  padding: var(--padding-top) 0 var(--padding-bottom) var(--padding-left);
  
  border-top: 1px solid var(--color-border);
  background-color: var(--color-background-dark);
`;

const Title = styled(H2)`
  margin-bottom: max(var(--space-fluid-7), var(--space-6)); 
`;

const Description = styled(Paragraph)`
`;
