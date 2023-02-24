import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Overline, H4, Paragraph } from "./Typography";

const Card = ({ title, description, image, category = "", slug }) => {
  return (
    <StyledLink href={slug}>
      <Wrapper>
        <CardImage src={image} />
        <InfoWrapper>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InfoWrapper>
      </Wrapper>
    </StyledLink>
  );
};

export default Card;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;

const Wrapper = styled.article`
  --card-gap-min: var(--space-6);
  --card-gap-target: var(--space-fluid-7);
  --card-gap-max: var(--space-7);
  --card-gap: clamp(
    var(--card-gap-min),
    var(--card-gap-target),
    var(--card-gap-max)
  );
  display: flex;
  flex-direction: column;
  gap: var(--card-gap);
  max-width: 640px;
`;

const CardImage = styled(Image)`
  --radius-min: var(--space-5);
  --radius-target: var(--space-fluid-8);
  --radius-max: var(--space-8);
  --radius: clamp(
    var(--radius-min),
    var(--radius-target),
    var(--radius-max)
  );
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: var(--radius);
  transition: all 350ms ease-in-out;
  
  ${Wrapper}:hover & {
    transform: translateY(calc(-1 * var(--space-4)));
    transition: all 200ms ease-in-out;
    box-shadow: 0 .24rem 0.4rem rgba(0,0,0,0.04);
  }
`;

const InfoWrapper = styled.div`
  --info-gap-min: var(--space-2);
  --info-gap-target: var(--space-fluid-4);
  --info-gap-max: var(--space-4);
  --info-gap: clamp(
    var(--info-gap-min),
    var(--info-gap-target),
    var(--info-gap-max)
  );
  display: flex;
  flex-direction: column;
  gap: var(--info-gap);
`;

const Category = styled(Overline)`
`;
const Title = styled(H4)`
  transition: all 200ms ease-in-out;  
  ${Wrapper}:hover & {
    color: var(--color-text-link);
  }
`;
const Description = styled(Paragraph)`
`;
