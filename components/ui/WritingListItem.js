import styled from "styled-components";
import Link from "next/link";
import { H4, Paragraph, LinkAffordance } from "./Typography";
import { QUERY } from "../../styles/1-DesignTokens";

const ListItem = ({ title, description }) => {
  return (
    <StyledLink href="/blog/post-one">
      <Wrapper>
        <InfoWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InfoWrapper>
        <Arrow>→</Arrow>
      </Wrapper>
    </StyledLink>
  );
};

export default ListItem;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;

const Wrapper = styled.li`
  --list-item-space-min: var(--space-8);
  --list-item-space-target: var(--space-fluid-10);
  --list-item-space-max: var(--space-fluid-10);
  --list-item-space: clamp(
    var(--list-item-space-min),
    var(--list-item-space-target),
    var(--list-item-space-max)
  );
  
  padding-bottom: var(--list-item-space);
  margin-top: var(--list-item-space);
  margin-right: calc(-1 * var(--section-offset));
  border-bottom: 1px solid var(--color-border);
  display: flex;
  gap: var(--space-3);
  align-items: center;
  padding-right: var(--space-6);
  @media ${QUERY.phoneAndSmaller} {
    align-items: flex-start;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex-grow: 1;
`;

const Title = styled(H4)`
  transition: all 200ms ease-in-out;
  ${Wrapper}:hover & {
    color: var(--color-text-link);
  }
`;
const Description = styled(Paragraph)``;

const Arrow = styled(LinkAffordance)`
  margin-right: var(--section-offset);
  @media ${QUERY.phoneAndSmaller} {
    margin-right: 0;
  }
  transition: all 200ms ease-in-out;
  ${Wrapper}:hover & {
    color: var(--color-text-link);
    transform: translateX(var(--space-4));
  }
`;
