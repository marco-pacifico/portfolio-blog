import styled from "styled-components";
import { UnstyledLink } from "./UnstyledLink";
import { H4, Paragraph, LinkAffordance } from "./Typography";
import { QUERY } from "../../styles/1-DesignTokens";

const ListItem = ({ id, href, title, description }) => {
  return (
    <li key={id}>
      <UnstyledLink href={href}>
        <Wrapper>
          <InfoWrapper>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </InfoWrapper>
          <Arrow>→</Arrow>
        </Wrapper>
      </UnstyledLink>
    </li>
  );
};

export default ListItem;

const Wrapper = styled.div`
  --list-item-space-min: var(--space-7);
  --list-item-space-target: var(--space-fluid-8);
  --list-item-space-max: var(--space-8);
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
  gap: var(--space-5);
  align-items: center;
  padding-right: var(--space-6);
  @media ${QUERY.phoneAndSmaller} {
    gap: var(--space-3);
    align-items: flex-start;
  }
`;

const InfoWrapper = styled.div`
  --info-gap-min: var(--space-2);
  --info-gap-target: var(--space-fluid-1);
  --info-gap-max: var(--space-fluid-1);
  --info-gap: clamp(
    var(--info-gap-min),
    var(--info-gap-target),
    var(--info-gap-max)
  );
  display: flex;
  flex-direction: column;
  gap: var(--info-gap);
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
