import React from "react";
import styled from "styled-components";

export default function VisuallyHidden({ children, as = "span", ...props }) {
  return <Wrapper as={as}>{children}</Wrapper>;
}

const Wrapper = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;
