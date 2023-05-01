import styled from "styled-components";
import Link from "next/link";

export const UnstyledLink = styled(Link)`
  -webkit-tap-highlight-color: transparent; // prevents flash when clicking buttons on touch devices
  user-select: none; // prevents selecting button text on touch devices
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;
