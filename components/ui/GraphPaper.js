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
  showInnerGrid = false,
  showDots = false,
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
      cellSize={cellSize}
    >
      <Glow aria-hidden />
      <GridMask>
        <Decorations cellSize={cellSize} />
        {showDots && <DotGridSVG cellSize={cellSize} />}
        <GridLines cellSize={cellSize} showInnerGrid={showInnerGrid} />
      </GridMask>
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
  --cell-size: ${(props) => props.cellSize}px;
  --grid-dot-size: calc(var(--cell-size) / 20);
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

function DotGridSVG({ cellSize }) {
  return (
    <StyledGridLines>
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
    </StyledGridLines>
  );
}

function GridLines({ cellSize, showInnerGrid }) {
  return (
    <StyledGridLines>
      <defs>
        {showInnerGrid && (
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
          {showInnerGrid && (
            <rect
              width={cellSize}
              height={cellSize}
              fill="url(#innerGrid)"
            ></rect>
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" strokeWidth={0} />
    </StyledGridLines>
  );
}

const GridMask = styled.div`
  position: absolute;
  pointer-events: none;
  inset: 0;
  width: 100%;
  height: 100%;
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
  fill: var(--grid-line-stroke-color);
`;

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
function Decorations({ cellSize }) {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <StyledDecorations x="50%" y={-1}>
        <path
          d={`M-${cellSize * 1} 0 h${cellSize} v${cellSize} h-${cellSize}Z 
            M-${cellSize * 5} 0 h${cellSize} v${cellSize} h-${cellSize}Z 
            M${cellSize * 5} 0 h${cellSize} v${cellSize} h-${cellSize}Z 
            M-${cellSize * 8} ${
            cellSize * 2
          } h${cellSize} v${cellSize} h-${cellSize}Z  
            M-${cellSize * 1} ${
            cellSize * 3
          } h${cellSize} v${cellSize} h-${cellSize}Z
            M${cellSize * 5} ${
            cellSize * 4
          } h${cellSize} v${cellSize} h-${cellSize}Z
          `}
          strokeWidth={0}
        />
        {/* <circle cx={`-${cellSize * 1}`} cy="0" r={cellSize / 2} strokeWidth={0} />
      <circle cx={`-${cellSize * 5}`} cy="0" r={cellSize / 2} strokeWidth={0} />
      <circle cx={`${cellSize * 5}`} cy="0" r={cellSize / 2} strokeWidth={0} />
      <circle
        cx={`-${cellSize * 8}`}
        cy={`${cellSize * 2}`}
        r={cellSize / 2}
        strokeWidth={0}
      />
      <circle
        cx={`-${cellSize * 1}`}
        cy={`${cellSize * 3}`}
        r={cellSize / 2}
        strokeWidth={0}
      />
      <circle
        cx={`${cellSize * 5}`}
        cy={`${cellSize * 4}`}
        r={cellSize / 2}
        strokeWidth={0}
      /> */}
      </StyledDecorations>
    </svg>
  );
}

const StyledDecorations = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  opacity: var(--decoration-opacity);
  fill: var(--decoration-color);
`;
