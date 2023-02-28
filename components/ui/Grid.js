import styled from "styled-components";

const Grid = ({ children }) => {
  return (
    <CardGrid>
      {children}
    </CardGrid>
  );
};
const CardGrid = styled.div`
  display: grid;
    grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--space-8);
`;

export default Grid;
