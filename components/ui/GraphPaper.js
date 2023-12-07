import React from "react";
import styled from "styled-components";

export default function GraphPaper({
  cellSize = 50,
  gridOpacity = 50,
  glowOpacity = 50,
  glowWidth = 1100,
  glowHeight = 800,
  glowOnTop = false,
  glowColor = "#ff00ff",
  maskCoverage = 50,
  decorationOpacity = 50,
  decorationColor = "#ff00ff",
  innerGrid = false,
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
      decorationColor={decorationColor}
    >
      <Glow aria-hidden />
      <GridLines cellSize={cellSize} innerGrid={innerGrid} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: var(--color-background);

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
  --decoration-color: ${(props) => props.decorationColor};
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

function GridLines({ cellSize, innerGrid }) {
  return (
    <StyledGridLines>
      <defs>
        {innerGrid && (
          <pattern
            id="innerGrid"
            width={cellSize / 3}
            height={cellSize / 3}
            patternUnits="userSpaceOnUse"
          >
            <line
              x1={cellSize / 3}
              y1="0"
              x2={cellSize / 3}
              y2={cellSize / 3}
              strokeWidth={1}
              // stroke="var(--color-glow)"
            ></line>
            <line
              x1="0"
              y1={cellSize / 3}
              x2={cellSize / 3}
              y2={cellSize / 3}
              strokeWidth={1}
              // stroke="var(--color-glow)"
            ></line>
          </pattern>
        )}
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
            d={`M${cellSize} ${cellSize} V0 M0 0 H${cellSize}`} // Make a props
            fill="none"
            strokeWidth={1}
            // strokeWidth={1} // If you want to make this 0.5, need to change y-offset to -0.5, and change path to "M 5 10 V0 M0 0 H10" and then also have to adjust positioning of the decorative squares
          />
          {innerGrid && <rect
            width={cellSize}
            height={cellSize}
            fill="url(#innerGrid)"
          ></rect>}
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
  --grid-line-stroke-color: hsl(
    var(--color-value-grid-line) / var(--grid-opacity)
  );
  stroke: var(--grid-line-stroke-color);
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
  return (
    <StyledDecorativeSquares x="50%" y={-1}>
      <path
        d={`M-${cellSize * 1} 0 h${cellSize} v${cellSize} h-${
          cellSize
        }Z 
            M-${cellSize * 5} 0 h${cellSize} v${cellSize} h-${
          cellSize
        }Z 
            M${cellSize * 5} 0 h${cellSize} v${cellSize} h-${
          cellSize
        }Z 
            M-${cellSize * 8} ${cellSize * 2} h${cellSize} v${
          cellSize
        } h-${cellSize}Z  
            M-${cellSize * 1} ${cellSize * 3} h${cellSize} v${
          cellSize
        } h-${cellSize}Z
            M${cellSize * 5} ${cellSize * 4} h${cellSize} v${
          cellSize
        } h-${cellSize}Z
          `}
        strokeWidth={0}
      />
    </StyledDecorativeSquares>
  );
}

const StyledDecorativeSquares = styled.svg`
  overflow: visible;
  opacity: var(--decoration-opacity);
  fill: var(--decoration-color);
`;

function ThickGridLines({ cellSize }) {
  return (
    <StyledGridLines>
      <defs>
        <pattern
          id="innerGrid"
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={cellSize}
            y1="0"
            x2={cellSize}
            y2={cellSize}
            strokeWidth={1}
            // stroke="var(--color-glow)"
          ></line>
          <line
            x1="0"
            y1={cellSize}
            x2={cellSize}
            y2={cellSize}
            strokeWidth={1}
            // stroke="var(--color-glow)"
          ></line>
        </pattern>
        <pattern
          id="thickGrid"
          width={cellSize * 3}
          height={cellSize * 3}
          patternUnits="userSpaceOnUse"
        >
          <rect
            width={cellSize * 3}
            height={cellSize * 3}
            fill="url(#innerGrid)"
          ></rect>
          <line
            x1={cellSize * 3}
            y1="0"
            x2={cellSize * 3}
            y2={cellSize * 3}
            strokeWidth={2}
            // stroke="var(--color-glow)"
          ></line>
          <line
            x1="0"
            y1={cellSize * 3}
            x2={cellSize * 3}
            y2={cellSize * 3}
            strokeWidth={2}
            // stroke="var(--color-glow)"
          ></line>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#thickGrid)" strokeWidth={1} />
    </StyledGridLines>
  );
}
