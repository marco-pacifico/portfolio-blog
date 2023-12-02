import React from "react";
import styled from "styled-components";

export default function GraphPaper({
  cellSize = 50,
  gridOpacity = 50,
  glowOpacity = 50,
  glowWidth = 1100,
  glowHeight = 800,
  glowOnTop = false,
  maskCoverage = 50,
  decorationOpacity = 50,
  glowColor = "#ff00ff",
}) {
  return (
    <Wrapper
      gridOpacity={gridOpacity}
      glowOpacity={glowOpacity}
      glowWidth={glowWidth}
      glowHeight={glowHeight}
      glowOnTop={glowOnTop}
      maskCoverage={maskCoverage}
      decorationOpacity={decorationOpacity}
      glowColor={glowColor}
    >
      <Glow aria-hidden />
      <GridLines cellSize={cellSize} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: var(
    --color-background
  ); 

  /* GRID */
  --grid-opacity: ${(props) => props.gridOpacity / 100};
  /* GLOW */
  --glow-opacity: ${(props) => props.glowOpacity / 100};
  --glow-width: ${(props) => props.glowWidth}px;
  --glow-height: ${(props) => props.glowHeight}px;
  --glow-z-index: ${(props) => (props.glowOnTop ? 1 : 0)};
  --color-glow: ${(props) => props.glowColor};

  /* MASK */
  --mask-coverage: ${(props) => props.maskCoverage}%;

  /* DECORATION */
  --decoration-opacity: ${(props) => props.decorationOpacity / 100};
`;

const Glow = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: var(--glow-z-index);
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%); // TODO: x and y percetages props
  background-image: radial-gradient(var(--color-glow), transparent 40%);
  opacity: var(--glow-opacity);
  height: var(--glow-height); // TODO: make this a prop
  width: var(--glow-width); // TODO: make this a prop
`;

function GridLines({ cellSize }) {
  // Add cellSize prop to GridLines component, initialize to cellSize from parent if no value is passed
  //   style={{ stroke: `hsla(${isDark ? COLORS.night[300] : COLORS.sidewalk[600]} / ${gridOpacity/100}` }}
  return (
    <StyledGridLines>
      {/* TODO: add to style tag and make this a prop, will need to also create a new css variable that only uses hsl values, opacity will be added in the component */}
      <defs>
        <pattern
          id="grid"
          width={cellSize}
          height={cellSize}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path
            // d="M 5 10 V.5 M0 .5 H10"
            d={`M${cellSize / 2} ${cellSize} V.5 M0 .5 H${cellSize}`} // Make a props
            fill="none"
            // strokeWidth={1} // If you want to make this 0.5, need to change y-offset to -0.5, and change path to "M 5 10 V0 M0 0 H10" and then also have to adjust positioning of the decorative squares
          />
        </pattern>
      </defs>
      <DecorativeSquares cellSize={cellSize} />{" "}
      {/* Pass the cellSize prop to the DecorativeSquares component */}
      <rect width="100%" height="100%" fill="url(#grid)" strokeWidth={0} />
    </StyledGridLines>
  );
}

const StyledGridLines = styled.svg`
  position: absolute;
  pointer-events: none;
  inset: 0;
  width: 100%;
  height: 100%;
  --grid-line-stroke: hsl(var(--color-value-grid-line) / var(--grid-opacity));
  stroke: var(--grid-line-stroke);
  mask-image: radial-gradient(
    100% var(--mask-coverage) at top center,
    white,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05),
    transparent
  );
`;

function DecorativeSquares({ cellSize }) {
  // Add cellSize prop to DecorativeSquares component, initialize to cellSize from parent if no value is passed
  const squareColor = "purple"; // TODO: make this a prop

  return (
    <StyledDecorativeSquares
      x="50%"
      y={-1}
      style={{ fill: squareColor}}
    >
      <path
        d={`M-${cellSize / 2 + 0.5} 0 
                h${cellSize + 1} v${cellSize + 1} h-${cellSize + 1}Z 
                M${cellSize * 3.5 - 0.5} 0 h${cellSize + 1} v${
          cellSize + 1
        } h-${cellSize + 1}Z 
                M${cellSize * 1.5 - 0.5} ${cellSize * 2} h${cellSize + 1} v${
          cellSize + 1
        } h-${cellSize + 1}Z  
                M-${cellSize * 1.5 + 0.5} ${cellSize * 3} h${cellSize + 1} v${
          cellSize + 1
        } h-${cellSize + 1}Z  `}
        strokeWidth={0}
      />
    </StyledDecorativeSquares>
  );
}

const StyledDecorativeSquares = styled.svg`
  overflow: visible;
  opacity: var(--decoration-opacity);
`;
