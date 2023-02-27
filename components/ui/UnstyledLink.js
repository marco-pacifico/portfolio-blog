import styled from "styled-components";
import Link from "next/link";

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;
