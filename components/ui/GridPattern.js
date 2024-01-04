import React from "react";
import styled from "styled-components";

export default function GridPattern({
  cellSize = 50,
  gridOpacity = 50,
  glowOpacity = 50,
  glowWidth = 1100,
  glowHeight = 800,
  glowOnTop = false,
  glowColor = "#ff00ff",
  fadeCoverage = 50,
  decorationOpacity = 50,
  decorationColor = "#ff00ff",
  verticalLines = true,
  horizontalLines = false,
  innerGrid = false,
  dots = false,
  decorationShape = "square",
}) {
  return (
    <Fade 
      aria-hidden
      gridOpacity={gridOpacity}
      glowOpacity={glowOpacity}
      glowWidth={glowWidth}
      glowHeight={glowHeight}
      glowOnTop={glowOnTop}
      fadeCoverage={fadeCoverage}
      decorationOpacity={decorationOpacity}
      glowColor={glowColor}
      decorationColor={decorationColor}
      cellSize={cellSize}
    >
      <Glow />
      <Decorations cellSize={cellSize} shape={decorationShape} />

      <GridPatternWrapper>
        {verticalLines && <VerticalLines cellSize={cellSize} />}
        {horizontalLines && <HorizontalLines cellSize={cellSize} />}
        {innerGrid && <InnerGrid cellSize={cellSize} />}
        {dots && <Dots cellSize={cellSize} />}
      </GridPatternWrapper>
    </Fade>
  );
}

const Fade = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: var(--color-background);

  /* FADE */
  mask-image: radial-gradient(
    100% var(--fade-coverage) at top center,
    white,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05),
    transparent
  );

  /* GRID */
  --grid-opacity: ${(props) => props.gridOpacity / 100};
  --cell-size: ${(props) => props.cellSize}px;
  --grid-dot-size: calc(var(--cell-size) / 20);
  /* GLOW */
  --glow-opacity: ${(props) => props.glowOpacity / 100};
  --glow-width: ${(props) => props.glowWidth}px;
  --glow-height: ${(props) => props.glowHeight}px;
  --glow-z-index: ${(props) => (props.glowOnTop ? 1 : 0)};
  --color-glow: ${(props) => props.glowColor};

  /* MASK */
  --fade-coverage: ${(props) => props.fadeCoverage}%;

  /* DECORATION */
  --decoration-opacity: ${(props) => props.decorationOpacity / 100};
  --decoration-color: ${(props) => props.decorationColor};
`;

const Glow = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: var(--glow-z-index);
  inset: 0;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%); 
  background-image: radial-gradient(var(--color-glow), transparent 40%);
  opacity: var(--glow-opacity);
  height: var(--glow-height); 
  width: var(--glow-width);
`;

function VerticalLines({ cellSize }) {
  return (
    <>
      <defs>
        <pattern
          id="verticalGridLine"
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
          x="50%"
          y={-1}
        >
          <line
            x1={cellSize}
            y1="0"
            x2={cellSize}
            y2={cellSize}
            strokeWidth={1}
          ></line>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#verticalGridLine)" strokeWidth={0} />
    </>
  );
}
function HorizontalLines({ cellSize }) {
  return (
    <>
      <defs>
        <pattern
          id="horizontalGridLine"
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
          x="50%"
          y={-1}
        >
          <line
            x1="0"
            y1={cellSize}
            x2={cellSize}
            y2={cellSize}
            strokeWidth={1}
          ></line>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#horizontalGridLine)" strokeWidth={0} />
    </>
  );
}

function Dots({ cellSize }) {
  return (
    <>
      <defs>
        <pattern
          id="dotGrid"
          width={cellSize}
          height={cellSize}
          x="50%"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={cellSize / 2}
            cy={cellSize / 2}
            r={cellSize / 30}
            strokeWidth={0}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotGrid)" strokeWidth={0} />
    </>
  );
}

function InnerGrid({ cellSize }) {
  return (
    <>
      <defs>
        <pattern
          id="innerGrid"
          width={cellSize / 3}
          height={cellSize / 3}
          patternUnits="userSpaceOnUse"
          x="50%"
          y={-1}
        >
          <line
            x1={cellSize / 3}
            y1="0"
            x2={cellSize / 3}
            y2={cellSize / 3}
            strokeWidth={1}
          ></line>
          <line
            x1="0"
            y1={cellSize / 3}
            x2={cellSize / 3}
            y2={cellSize / 3}
            strokeWidth={1}
          ></line>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#innerGrid)" strokeWidth={0} />
    </>
  );
}

const GridPatternWrapper = styled.svg`
  position: absolute;
  /* pointer-events: none; */
  /* inset: 0; */
  width: 100%;
  height: 100%;
  --grid-line-stroke-color: hsl(
    var(--color-value-grid-line) / var(--grid-opacity)
  );
  stroke: var(--grid-line-stroke-color);
  fill: var(--grid-line-stroke-color);
`;

const DecorationCoordinates = [
  { row: 0, column: -1 },
  { row: 0, column: -5 },
  { row: 2, column: 5 },
  { row: 2, column: -3 },
  { row: 3, column: -8 },
  { row: 3, column: 2 },
  { row: 4, column: -2 },
  { row: 5, column: 4 },
];

function Circles({ cellSize, coordinates = DecorationCoordinates }) {
  const gridStrokeWidth = 1;
  return (
    <svg x="50%" y={cellSize / 2} style={{ overflow: "visible" }}>
      {coordinates.map(({ row, column }, index) => {
        let side = "";
        let xOffset = cellSize / 2 - gridStrokeWidth / 2;
        if (column <= 0) {
          side = "-";
          column = Math.abs(column);
          xOffset = -xOffset;
        }
        const xPosition = `${side}${cellSize * column + xOffset}`;
        const yPosition = `${cellSize * row - gridStrokeWidth}`;
        const radius = cellSize / 2 - gridStrokeWidth;
        return (
          <circle
            key={index}
            cx={xPosition}
            cy={yPosition}
            r={radius}
            strokeWidth={0}
          />
        );
      })}
    </svg>
  );
}

function Squares({ cellSize, coordinates = DecorationCoordinates }) {
  const gridStrokeWidth = 1;
  const distance = cellSize - gridStrokeWidth / 2;
  return (
    <svg x="50%" y={-1} style={{ overflow: "visible" }}>
      <path
        d={coordinates
          .map(({ row, column }) => {
            let side = "";
            if (column <= 0) {
              side = "-";
              column = Math.abs(column);
            }

            return `M${side}${cellSize * column} ${
              cellSize * row
            } h${distance} v${distance} h-${distance}Z`;
          })
          .join(" ")}
        strokeWidth={0}
      />
    </svg>
  );
}

function Decorations({ cellSize, shape = "square" }) {
  return (
    <DecorationsWrapper>
      {shape === "square" && <Squares cellSize={cellSize} />}
      {shape === "circle" && <Circles cellSize={cellSize} />}
    </DecorationsWrapper>
  );
}

const DecorationsWrapper = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: var(--decoration-opacity);
  fill: var(--decoration-color);
`;

// DOT GRID USING REPEATING RADIAL GRADIENT
// const DotGrid = styled.div`
//   --grid-dot-color: hsl(var(--color-value-grid-line) / var(--grid-opacity));
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   background: repeating-radial-gradient(
//     circle at center,
//     var(--grid-dot-color),
//     var(--grid-dot-color) var(--grid-dot-size),
//     transparent var(--grid-dot-size),
//     transparent calc(var(--cell-size))
//   );
//   background-size: var(--cell-size) var(--cell-size);
// `;
