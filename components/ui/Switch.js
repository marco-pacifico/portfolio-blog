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
  color: var(--color-text-strong);
  font-size: var(--font-size-2);
  display: flex;
  gap: var(--space-5);
  align-items: center;
  width: max-content;
  user-select: none; // prevents selecting text of interactive elements
  -webkit-user-select: none; // prevents selecting text of interactive elements
  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: transparent; // prevents flash when clicking buttons on touch devices
  }
`;

const Track = styled.div`
  
  --track-background: ${(p) =>
    p.checked ? "var(--color-track-checked)" : "var(--color-track-unchecked)"};

  --thumb-background: ${(p) =>
    p.checked ? "var(--color-thumb-checked)" : "var(--color-thumb-unchecked)"};
  
  --track-border: var(--border-width) solid ${(p) =>
    p.checked ? "var(--color-track-border-checked)" : "var(--color-track-border-unchecked)"};

  --thumb-height: 1.25rem;
  --track-border-radius: 0.5rem;
  --border-width: .125rem;
  --thumb-translate-x: translateX(100%);
  --thumb-border: var(--border-width) solid var(--track-background);
  --thumb-border-radius: 50%;
  --thumb-shadow: 0 0 0 1px var(--color-border);

  display: flex;
  height: calc(var(--thumb-height) + var(--border-width)*2 );
  width: calc(var(--thumb-height) * 2 + var(--border-width) * 2);
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
  height: var(--thumb-height);
  aspect-ratio: 1;
  background-color: var(--thumb-background);
  border-radius: 9999px;
  border: var(--thumb-border);
  transition: transform 0.2s ease-in-out;
`;
