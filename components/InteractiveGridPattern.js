import React from "react";
import styled from "styled-components";
import Switch from "./ui/Switch";
import Slider from "./ui/Slider";
import ColorPicker from "./ui/ColorPicker";
import GridPattern from "./ui/GridPattern";
import { QUERY } from "../styles/1-DesignTokens";

export default function InteractiveGridPattern() {
  const [cellSize, setCellSize] = React.useState(50);
  const [gridOpacity, setGridOpacity] = React.useState(50);
  const [glowOpacity, setGlowOpacity] = React.useState(50);
  const [glowHeight, setGlowHeight] = React.useState("800");
  const [glowWidth, setGlowWidth] = React.useState("1100");
  const [glowOnTop, setGlowOnTop] = React.useState(false);
  const [glowColor, setGlowColor] = React.useState("#ff00ff");
  const [fadeCoverage, setFadeCoverage] = React.useState(120);
  const [decorationOpacity, setDecorationOpacity] = React.useState(50);
  const [decorationColor, setDecorationColor] = React.useState("#d4e3fe");
  const [horizontalLines, setHorizontalLines] = React.useState(true); 
  const [verticalLines, setVerticalLines] = React.useState(true);
  const [innerGrid, setInnerGrid] = React.useState(false);
  const [dots, setDots] = React.useState(false);
  const [decorationShape, setDecorationShape] = React.useState("square");

  return (
    <Wrapper>
      <GridPattern
        cellSize={cellSize}
        gridOpacity={gridOpacity}
        glowOpacity={glowOpacity}
        glowWidth={glowWidth}
        glowHeight={glowHeight}
        glowOnTop={glowOnTop}
        fadeCoverage={fadeCoverage}
        decorationOpacity={decorationOpacity}
        glowColor={glowColor}
        decorationColor={decorationColor}
        horizontalLines={horizontalLines}
        verticalLines={verticalLines}
        innerGrid={innerGrid}
        dots={dots}
        decorationShape={decorationShape}
      />
      <Controls>
        <Fieldset>
          <LegendWrapper><legend>Grid settings</legend></LegendWrapper>
          <Switch
            checked={horizontalLines}
            onChange={(e) =>
              setHorizontalLines(!horizontalLines)
            }>Horizontal lines</Switch>
          <Switch
            checked={verticalLines}
            onChange={(e) =>
              setVerticalLines(!verticalLines)
            }>Vertical Lines</Switch>
          <Switch
            checked={innerGrid}
            onChange={(e) =>
              setInnerGrid(!innerGrid)
            }>Inner grid</Switch>
          <Switch
            checked={dots}
            onChange={(e) =>
              setDots(!dots)
            }>Dots</Switch>
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
            id="fadeCoverage"
            label="Fade Coverage"
            value={fadeCoverage} // Pass the cellSize to the value prop of Slider component
            units="%"
            min={25}
            max={200}
            onChange={(e) => setFadeCoverage(+e.target.value)} //+e.target.value converts input string to number
          />
        </Fieldset>
        <Fieldset>
          <LegendWrapper>Glow settings</LegendWrapper>
          <ColorPicker
            label="Glow Color"
            id="glowColor"
            value={glowColor}
            onChange={(event) => setGlowColor(event.target.value)}
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
          <Switch
            checked={glowOnTop}
            onChange={(e) => setGlowOnTop(e.target.checked)}
          >
            Glow is {glowOnTop ? "in front" : "behind"}
          </Switch>
        </Fieldset>
        <Fieldset>
          <LegendWrapper>Decoration settings</LegendWrapper>
          <ColorPicker
            label="Decoration Color"
            id="decorationColor"
            value={decorationColor}
            onChange={(event) => setDecorationColor(event.target.value)}
          />
          <Slider
            id="decorationOpacity"
            label="Decoration Opacity"
            value={decorationOpacity} // Pass the cellSize to the value prop of Slider component
            units="%"
            onChange={(e) => setDecorationOpacity(+e.target.value)} //+e.target.value converts input string to number
          />
          <Switch
            checked={decorationShape === "circle"}
            onChange={(e) =>
              setDecorationShape(e.target.checked ? "circle" : "square")
            }>Circle</Switch>
        </Fieldset>
      </Controls>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--space-8);
  min-height: 90vh;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: end;
  align-items: end;
  grid-column: 1 / -1;
`;

const Controls = styled.div`
  isolation: isolate; // Creates new stacking context and prevents the controls from being clipped by the GraphPaper
  width: min-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: var(--space-6);
  margin: 0 auto;
  width: 100%;

  @media ${QUERY.phoneAndSmaller} { 
    flex-direction: column;
    align-items: center;
  }
`;

const Fieldset = styled.fieldset`
  display: grid;
  gap: var(--space-5);
  min-width: 256px;
  width: max-content;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0;
  padding: var(--space-6);
  padding-top: var(--space-5);
  border-radius: var(--space-4);
  border: 1px solid var(--color-border);
`;

const LegendWrapper = styled.span`
  padding: 0;
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-strong)
`;
