import styled from "styled-components";
import { BREAKPOINT, QUERY } from "../../styles/1-DesignTokens";

const Grid = ({ children }) => {
  return <CardGrid>{children}</CardGrid>;
};
const CardGrid = styled.ol`
  --cards-per-row: 3;
  --grid-gap-min: var(--space-8);
  --grid-gap-target: var(--space-fluid-7);
  --grid-gap-max: var(--space-fluid-7);
  --grid-gap: clamp(
    var(--grid-gap-min),
    var(--grid-gap-target),
    var(--grid-gap-max)
  );
  /* max-width: ${BREAKPOINT.desktoplarge/16}rem; */
  display: grid;
  grid-template-columns: repeat(var(--cards-per-row), 1fr);
  grid-gap: var(--grid-gap);
  @media ${QUERY.laptopAndSmaller} {
    --cards-per-row: 2;
  }
  @media ${QUERY.phoneAndSmaller} {
    --cards-per-row: 1;
  }
`;

export default Grid;
