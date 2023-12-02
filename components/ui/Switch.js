import React from "react";
import styled from "styled-components";
import VisuallyHidden from "./VisuallyHidden";

export default function Switch({ children, id, checked, ...props }) {
  return (
    <StyledLabel>
      <VisuallyHidden>
        <input {...props} type="checkbox" role="switch" id={id}/>
      </VisuallyHidden>
      <Track checked={checked}>
        <Thumb />
      </Track>
      {children}
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  color: var(--color-text-primary);
  font-size: var(--font-size-2);
  display: flex;
  gap: var(--space-5);
  align-items: center;
  width: max-content;
  padding-block: var(--space-2);
  user-select: none; // prevents selecting text of interactive elements
  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: transparent; // prevents flash when clicking buttons on touch devices
  }
`;

const Track = styled.div`
  --track-height: 1.5rem;
  --track-background: ${(p) =>
    p.checked ? "green" : "var(--color-text-secondary)"};
  --track-border: 2px solid var(--color-text-primary);
  --track-border-radius: 0.5rem;
  --track-shadow: 0 0 0 1px var(--color-border);
  --thumb-border-width: 2px;
  --thumb-translate-x: translateX(calc(100% - var(--thumb-border-width) * 2));
  --thumb-background: var(--color-text-strong);
  --thumb-border: var(--thumb-border-width) solid var(--track-background);
  --thumb-border-radius: 50%;
  --thumb-shadow: 0 0 0 1px var(--color-border);

  display: flex;
  height: var(--track-height);
  aspect-ratio: 5 / 3;
  border: var(--track-border);
  border-radius: 9999px;
  background: var(--track-background);

  & > * {
    transform: ${(p) =>
      p.checked ? "var(--thumb-translate-x)" : "translateX(0)"};
  }
`;

const Thumb = styled.span`
  height: 100%;
  aspect-ratio: 1;
  background-color: var(--thumb-background);
  border-radius: 9999px;
  border: var(--thumb-border);
  transition: transform 0.2s ease-in-out;
`;
