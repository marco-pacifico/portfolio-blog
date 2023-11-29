import React from "react";
import styled from "styled-components";
import Switch from "../../components/ui/Switch";
import Slider from "../../components/ui/Slider";
import GraphPaper from "../../components/ui/GraphPaper";

export default function Testing() {
  const [checked, setChecked] = React.useState(false);
  const [cellSize, setCellSize] = React.useState(50);  // Create a state for cellSize in the parent component

  return (
    <Wrapper>
      <GraphPaper cellSize={cellSize}> {/* Pass the cellSize state to the GraphPaper component */}
        <Controls>
          <Switch
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          >
            Switch is {checked ? "on" : "off"}
          </Switch>
          <Slider
            id="cellSize"
            label="Cell Size"
            value={cellSize}
            min={10}
            max={400}
            step={10}
            onChange={(e) => setCellSize(+e.target.value)} //+e.target.value converts input string to number
          />
        </Controls>
      </GraphPaper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--space-8);
  height: 80vh;
`;

const Controls = styled.div`
  display: grid;
  place-content: center;
  gap: var(--space-8);
  height: 100%;
`;
