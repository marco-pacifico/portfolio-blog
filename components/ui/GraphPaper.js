import React from "react";
import styled from "styled-components";

export default function GraphPaper({ children, cellSize = 50 }) {
  // Add cellSize prop to GraphPaper component, initialize to 50 if no value is passed
  return (
    <Background>
      <Glow aria-hidden />
      <GridLines cellSize={cellSize} />{" "}
      {/* Pass the cellSize prop to the GridLines component */}
      {children}
    </Background>
  );
}

const Background = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  background-color: var(
    --color-background
  ); // TODO: make this a prop, or a theme
`;

const Glow = styled.div`
  --color-glow: purple;
  --glow-opacity: 0.2;
  --glow-height: 50%;
  --glow-width: 50%;

  position: absolute;
  pointer-events: none;
  z-index: 10; // TODO: make this a prop
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%); // TODO: x and y percetages props
  background-image: radial-gradient(
    circle at 50% 50%,
    var(--color-glow) 0%,
    transparent 40%
  ); // TODO: make this a prop
  opacity: var(--glow-opacity); // TODO: make this a prop
  height: var(--glow-height); // TODO: make this a prop
  width: var(--glow-width); // TODO: make this a prop
`;

function GridLines({ cellSize }) {
  // Add cellSize prop to GridLines component, initialize to cellSize from parent if no value is passed
  return (
    <StyledGridLines>
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

  stroke: var(--color-text-secondary); // TODO: make this a prop
  mask-image: radial-gradient(
    100% 100% at top center,
    white,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05),
    transparent
  ); // TODO: make second percentage a prop mask coverage
`;

function DecorativeSquares({ cellSize }) {
  // Add cellSize prop to DecorativeSquares component, initialize to cellSize from parent if no value is passed
  const squareColor = "purple"; // TODO: make this a prop
  const squareOpacity = 0.5; // TODO: make this a prop
  return (
    <StyledDecorativeSquares
      x="50%"
      y={-1}
      style={{ fill: squareColor, opacity: squareOpacity }}
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
`;
