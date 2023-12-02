import React from "react";
import styled from "styled-components";
import VisuallyHidden from "./VisuallyHidden";

export default function ColorPicker({ label, value, ...props }) {
  return (
    <Wrapper>
      <Label>{label}<Value>{value.toUpperCase()}</Value></Label>
      <ColorSwatch style={{ backgroundColor: value }}>
        <InvisibleInput {...props} type="color" value={value} />
      </ColorSwatch>
    </Wrapper>
  );
}

const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  user-select: none; // prevents selecting text of interactive elements
  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: transparent; // prevents flash when clicking buttons on touch devices
  }
`;

const Label = styled.div`
  color: var(--color-text-primary);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-bold);
  display: flex;
  justify-content: space-between;
`;
const Value = styled.span`
  font-weight: var(--font-weight-regular);
`;
const ColorSwatch = styled.div`
  position: relative;
  width: 100%;
  height: var(--space-7);
  border-radius: var(--space-3);
  border: 1px solid var(--color-text-primary);
`;
const InvisibleInput = styled.input`
  &[type="color"] {
    position: absolute;
    inset: 0;
    opacity: 0;
    appearance: unset;
    inline-size: 100%;
    block-size: 100%;
    box-sizing: border-box;
    outline-style: none;
  }
`;
