import styled from "styled-components";
import Image from "next/image";
import { UnstyledLink } from "./UnstyledLink";
import { Overline, H4, Paragraph } from "./Typography";
import { QUERY } from "../../styles/1-DesignTokens";

const Card = ({ id, href, thumbnail, title, description, category = "" }) => {
  return (
    <li key={id}>
      <CardLink href={href}>
        <Wrapper>
          <ImageWrapper>
            <CardImage alt={title} src={thumbnail} width="800" height="600" />
          </ImageWrapper>
          <InfoWrapper>
            <Category>{category}</Category>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </InfoWrapper>
        </Wrapper>
      </CardLink>
    </li>
  );
};

export default Card;

const CardLink = styled(UnstyledLink)`
  flex: 1;
  min-width: 320px;
`;

const Wrapper = styled.div`
  /* --card-gap-min: var(--space-5);
  --card-gap-target: var(--space-fluid-6);
  --card-gap-max: var(--space-6);
  --card-gap: clamp(
    var(--card-gap-min),
    var(--card-gap-target),
    var(--card-gap-max)
  ); */
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  /* max-width: var(--width-blog-content); */
  @media ${QUERY.tabletAndSmaller} {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  border: 1px solid var(--color-border);
  --radius: clamp(var(--space-6), var(--space-fluid-7), var(--space-7));
  border-radius: var(--radius);
  overflow: hidden;
  isolation: isolate; // fixes bug on Safari with border radius ignoring overflow: hidden
`;

const CardImage = styled(Image)`
  width: 100%;
  height: auto;

  transition: transform 350ms ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    ${Wrapper}:hover & {
      transform: scale(1.025);
      transition: transform 200ms ease-in-out;
    }
  }
`;

const InfoWrapper = styled.div`
  /* --info-gap-min: var(--space-2);
  --info-gap-target: var(--space-fluid-1);
  --info-gap-max: var(--space-fluid-1);
  --info-gap: clamp(
    var(--info-gap-min),
    var(--info-gap-target),
    var(--info-gap-max)
  ); */
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-left: var(--space-3);
`;

const Category = styled(Overline)`
  font-size: var(--font-size-1);
  color: var(--color-text-secondary);
  margin-left: var(--space-1);
  @media ${QUERY.laptopAndSmaller} {
    margin-left: calc(var(--space-1) / 2);
  }
  @media ${QUERY.phoneAndSmaller} {
    margin-left: 0;
  }
`;

const Title = styled(H4)`
  transition: color 200ms ease-in-out;
  @media (hover: hover) and (pointer: fine) {
    ${Wrapper}:hover & {
      color: var(--color-text-link-hover);
    }
  }
`;
const Description = styled(Paragraph)``;
