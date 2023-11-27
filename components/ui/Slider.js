import React from "react";
import styled from "styled-components";

export default function Slider({
  label,
  id,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  ...props
}) {

  return (
    <StyledSlider>
      <StyledLabel htmlFor={id}>
        {label} {value}
        <input
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          {...props}
        />
      </StyledLabel>
    </StyledSlider>
  );
}

const StyledLabel = styled.label`
  color: var(--color-text-primary);
  font-size: var(--font-size-2);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;

const StyledSlider = styled.div`
  --slider-track-height: 0.5rem;
  --slider-track-background: var(--color-text-secondary);
  --slider-track-border: 1px solid var(--color-text-primary);
  --slider-track-border-radius: 0.5rem;
  --slider-track-shadow: 0 0 0 1px var(--color-border);
  --slider-thumb-size: 1.5rem;
  --slider-thumb-background: var(--color-text-strong);
  --slider-thumb-border: 1px solid var(--color-border);
  --slider-thumb-border-radius: 50%;
  --slider-thumb-shadow: 0 0 0 1px var(--color-border);

  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-gap: var(--space-4);
  align-items: center; */

  & input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: var(--slider-track-height);
    background: var(--slider-track-background);
    border: var(--slider-track-border);
    border-radius: var(--slider-track-border-radius);
    box-shadow: var(--slider-track-shadow);
    outline: none;
    /* opacity: 1; */
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    justify-self: center;

    &:hover {
      /* opacity: 1; */
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: var(--slider-thumb-size);
      height: var(--slider-thumb-size);
      background: var(--slider-thumb-background);
      border: var(--slider-thumb-border);
      border-radius: var(--slider-thumb-border-radius);
      box-shadow: var(--slider-thumb-shadow);
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: var(--slider-thumb-size);
      height: var(--slider-thumb-size);
      background: var(--slider-thumb-background);
      border: var(--slider-thumb-border);
      border-radius: var(--slider-thumb-border-radius);
      box-shadow: var(--slider-thumb-shadow);
      cursor: pointer;
    }
  }
`;
