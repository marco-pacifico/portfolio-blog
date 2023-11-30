import React from "react";
import styled from "styled-components";
import Switch from "../../components/ui/Switch";
import Slider from "../../components/ui/Slider";
import GraphPaper from "../../components/ui/GraphPaper";

export default function Testing() {
  const [checked, setChecked] = React.useState(false);
  const [cellSize, setCellSize] = React.useState(50);
  const [gridOpacity, setGridOpacity] = React.useState(50);
  const [glowOpacity, setGlowOpacity] = React.useState(50);
  const [glowHeight, setGlowHeight] = React.useState("800");
  const [glowWidth, setGlowWidth] = React.useState("1100");

  return (
    <Wrapper>
      <GraphPaper
        cellSize={cellSize}
        gridOpacity={gridOpacity}
        glowOpacity={glowOpacity}
        glowWidth={glowWidth}
        glowHeight={glowHeight}
      >
        {" "}
        {/* Pass the cellSize state prop to the GraphPaper component */}
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
            value={cellSize} // Pass the cellSize to the value prop of Slider component
            units="px"
            min={10}
            max={400}
            step={10}
            onChange={(e) => setCellSize(+e.target.value)} //+e.target.value converts input string to number
          />
          <Slider
            id="gridOpacity"
            label="Grid Opacity"
            value={gridOpacity} // Pass the cellSize to the value prop of Slider component
            units="%"
            onChange={(e) => setGridOpacity(+e.target.value)} //+e.target.value converts input string to number
          />
          <Slider
            id="glowOpacity"
            label="Glow Opacity"
            value={glowOpacity} // Pass the cellSize to the value prop of Slider component
            units="%"
            onChange={(e) => setGlowOpacity(+e.target.value)} //+e.target.value converts input string to number
          />
          <Slider
            id="glowWidth"
            label="Glow Width"
            value={glowWidth} // Pass the cellSize to the value prop of Slider component
            units="px"
            min={0}
            max={2000}
            step={20}
            onChange={(e) => setGlowWidth(+e.target.value)} //+e.target.value converts input string to number
          />
          <Slider
            id="glowHeight"
            label="Glow Height"
            value={glowHeight} // Pass the cellSize to the value prop of Slider component
            units="px"
            min={0}
            max={1200}
            step={20}
            onChange={(e) => setGlowHeight(+e.target.value)} //+e.target.value converts input string to number
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
