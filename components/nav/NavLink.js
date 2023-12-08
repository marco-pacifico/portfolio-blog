import styled, { css } from "styled-components";
import { UnstyledLink } from "../ui/UnstyledLink";

const NavLink = ({ href, route, children }) => {
  return (
    <StyledLink href={href} route={route}>
      {children}
    </StyledLink>
  );
};

export default NavLink;

export const NavWrapperStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  background-color: var(--color-nav-background);
  border: 1px solid var(--color-nav-border);
  border-radius: 999px;
  height: 100%;
  padding: var(--space-4) var(--space-5);
  transition: color, background-color 200ms ease-in;
  text-align: center;

  font-size: var(--font-size-4);
  font-weight: var(--font-weight-regular);
  /* If href is current route, then apply active text color */
  color: ${(p) =>
    p.href === p.route
      ? "var(--color-nav-text-active)"
      : "var(--color-nav-text)"};

  &:hover {
    background-color: var(--color-nav-background-hover);
  }
  &:hover {
    color: var(--color-nav-text-hover);
  }

  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: transparent; // prevents flash when clicking buttons on touch devices
    user-select: none; // prevents selecting button text on touch devices
  }
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;

const StyledLink = styled(UnstyledLink)`
  ${NavWrapperStyles}
`;
