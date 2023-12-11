import React from "react";
import styled from "styled-components";

export default function Slider({
  label,
  id,
  min = 0,
  max = 100,
  step = 1,
  value,
  units = "",
  onChange,
  ...props
}) {
  return (
    <StyledSlider htmlFor={id}>
      <Label>{label} <Value>{value}{units}</Value></Label>
        <input
          {...props}
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
    </StyledSlider>
  );
}

const Label = styled.div`
  color: var(--color-text-strong);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-bold);
  display: flex;
  justify-content: space-between;
  user-select: none; // prevents selecting text of interactive elements
  -webkit-user-select: none; // prevents selecting text of interactive elements
  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: transparent; // prevents flash when clicking buttons on touch devices
  }
`;
const Value = styled.span`
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
`;

const StyledSlider = styled.label`

  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  --slider-track-height: 0.5rem;
  --slider-track-border-radius: 0.5rem;
  --slider-track-background: var(--color-slider-track);

  --slider-thumb-size: 1.25rem;
  --slider-thumb-border-radius: 50%;
  --slider-thumb-background: var(--color-slider-thumb);



  & input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: var(--slider-track-height);
    background: var(--slider-track-background);
    border-radius: var(--slider-track-border-radius);
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: var(--slider-thumb-size);
      height: var(--slider-thumb-size);
      background: var(--slider-thumb-background);
      border-radius: var(--slider-thumb-border-radius);
      cursor: grab;
    }

    &::-moz-range-thumb {
      width: var(--slider-thumb-size);
      height: var(--slider-thumb-size);
      background: var(--slider-thumb-background);
      border-radius: var(--slider-thumb-border-radius);
      cursor: grab;
    }
  }
`;
