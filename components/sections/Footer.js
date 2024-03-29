import styled from "styled-components";
import { TitleAndDescription, H1, Paragraph } from "../ui/Typography";
import { NavLinkFooter } from "../nav/NavLinkFooter";
import { QUERY } from "../../styles/1-DesignTokens";

const Footer = () => {
  return (
    <SectionWrapper>
      <Title>Say hello</Title>
      <FooterLinks>
        <li><NavLinkFooter href="mailto:marco.pacifico@gmail.com" target="_blank" rel="noreferrer">Email</NavLinkFooter></li>
        <li><NavLinkFooter href="https://www.linkedin.com/in/marcopacifico/" target="_blank" rel="noreferrer">LinkedIn</NavLinkFooter></li>
        <li><NavLinkFooter href="https://twitter.com/marcopacifico" target="_blank" rel="noreferrer">Twitter</NavLinkFooter></li>
        <li><NavLinkFooter href="https://www.instagram.com/marcopacifico" target="_blank" rel="noreferrer">Instagram</NavLinkFooter></li>
      </FooterLinks>
    </SectionWrapper>
  );
};

export default Footer;

const SectionWrapper = styled.footer`
  border-radius: 40px 40px 0 0;
  --padding-top-min: var(--space-8);
  --padding-top-target: var(--space-fluid-11);
  --padding-top-max: var(--space-fluid-11);
  --padding-top: clamp(
    var(--padding-top-min),
    var(--padding-top-target),
    var(--padding-top-max)
  );
  --padding-bottom: calc(2 * var(--padding-top));
  --padding-left: var(--section-offset);
  padding: var(--padding-top) 0 var(--padding-bottom) var(--padding-left);
  /* border-top: 1px solid var(--color-border); */
  background-color: var(--color-background-darker);
`;

const Title = styled(H1)`
  /* --title-margin-min: var(--space-7);
  --title-margin-target: var(--space-fluid-8);
  --title-margin-max: var(--space-fluid-8);
  --title-margin: clamp(
    var(--title-margin-min),
    var(--title-margin-target),
    var(--title-margin-max)
  ); */
  margin-bottom: var(--space-8);
`;


const FooterLinks = styled.ol`
  margin-bottom: var(--space-8);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* flex-direction: column; */
  gap: var(--space-8);
  @media ${QUERY.phoneAndSmaller} {
    flex-direction: column;
    gap: var(--space-6);
  }
`
