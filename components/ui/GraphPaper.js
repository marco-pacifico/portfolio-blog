import React from "react";
import styled from "styled-components";

export default function GraphPaper({ children, ...props }) {
  return (
    <Background {...props}>
      <Glow aria-hidden />
      <Grid />
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
    // TODO: make this a prop
    transparent 40%
  );
  opacity: var(--glow-opacity); // TODO: make this a prop
  height: var(--glow-height); // TODO: make this a prop
  width: var(--glow-width); // TODO: make this a prop
`;

function Grid({ ...props }) {
  return (
    <StyledGridLines>
      <defs>
        <pattern
          id="grid"
          width="10"
          height="10"
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 10 10 V.5 M0 .5 H10"
            // d={`M${gridWidth / 2} ${gridHeight} V.5 M0 .5 H${gridWidth}`} // Make a props
            fill="none"
          />
        </pattern>
        {/* TODO Add Squares */}
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
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
