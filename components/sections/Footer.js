import styled from "styled-components";
import { TitleAndDescription, H2, Paragraph } from "../ui/Typography";
import { NavLink } from "../nav/NavLink";
import { QUERY } from "../../styles/1-DesignTokens";

const Footer = () => {
  return (
    <SectionWrapper>
      <Title>Say hello</Title>
      {/* <Description>Reach out if you'ld like to meet.</Description> */}
      <FooterLinks>
        <FooterLink href="mailto:marco.pacifico@gmail.com" target="_blank" rel="noreferrer">Email</FooterLink>
        <FooterLink href="https://www.linkedin.com/in/marcopacifico/" target="_blank" rel="noreferrer">LinkedIn</FooterLink>
        <FooterLink href="https://twitter.com/marcopacifico" target="_blank" rel="noreferrer">Twitter</FooterLink>
        <FooterLink href="https://www.instagram.com/marcopacifico" target="_blank" rel="noreferrer">Instagram</FooterLink>
      </FooterLinks>
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
  background-color: var(--color-background-darker);
`;

const Title = styled(H2)`
  --title-margin-min: var(--space-5);
  --title-margin-target: var(--space-fluid-8);
  --title-margin-max: var(--space-fluid-8);
  --title-margin: clamp(
    var(--title-margin-min),
    var(--title-margin-target),
    var(--title-margin-max)
  );
  margin-bottom: var(--title-margin);
`;

const Description = styled(Paragraph)`
`;

const FooterLinks = styled.ol`
  margin-top: var(--space-8);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* flex-direction: column; */
  gap: var(--space-8);
  @media ${QUERY.phoneAndSmaller} {
    flex-direction: column;
    gap: var(--space-5);
  }
`
const FooterLink = styled(NavLink)`
  ${TitleAndDescription}
`