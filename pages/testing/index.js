import React from "react";
import styled from "styled-components";
import Switch from "../../components/ui/Switch";
import Slider from "../../components/ui/Slider";
import ColorPicker from "../../components/ui/ColorPicker";
import GraphPaper from "../../components/ui/GraphPaper";

export default function Testing() {
  const [cellSize, setCellSize] = React.useState(50);
  const [gridOpacity, setGridOpacity] = React.useState(50);
  const [glowOpacity, setGlowOpacity] = React.useState(50);
  const [glowHeight, setGlowHeight] = React.useState("800");
  const [glowWidth, setGlowWidth] = React.useState("1100");
  const [glowOnTop, setGlowOnTop] = React.useState(false);
  const [maskCoverage, setMaskCoverage] = React.useState(50);
  const [decorationOpacity, setDecorationOpacity] = React.useState(50);
  const [glowColor, setGlowColor] = React.useState("#ff00ff");

  return (
    <Wrapper>
      <GraphPaper
        cellSize={cellSize}
        gridOpacity={gridOpacity}
        glowOpacity={glowOpacity}
        glowWidth={glowWidth}
        glowHeight={glowHeight}
        glowOnTop={glowOnTop}
        maskCoverage={maskCoverage}
        decorationOpacity={decorationOpacity}
      />
      <Controls>
        <ColorPicker
          label="Glow Color"
          value={glowColor}
          onChange={(event) => setGlowColor(event.target.value)}
        />
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
          id="maskCoverage"
          label="Grid Fade"
          value={maskCoverage} // Pass the cellSize to the value prop of Slider component
          units="%"
          min={25}
          max={200}
          onChange={(e) => setMaskCoverage(+e.target.value)} //+e.target.value converts input string to number
        />
        <Switch
          checked={glowOnTop}
          onChange={(e) => setGlowOnTop(e.target.checked)}
        >
          Glow is {glowOnTop ? "on top" : "behind"}
        </Switch>
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
        <Slider
          id="decorationOpacity"
          label="Decoration Opacity"
          value={decorationOpacity} // Pass the cellSize to the value prop of Slider component
          units="%"
          onChange={(e) => setDecorationOpacity(+e.target.value)} //+e.target.value converts input string to number
        />
      </Controls>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--space-8);
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: end;
  align-items: end;
`;

const Controls = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: var(--space-6);
  border-radius: var(--space-4);
  isolation: isolate; // Creates new stacking context and prevents the controls from being clipped by the GraphPaper
  width: 200px;
  display: grid;
  align-items: start;
  gap: var(--space-6);
`;
