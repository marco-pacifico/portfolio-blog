import styled, { css } from "styled-components";
import { UnstyledLink } from "../ui/UnstyledLink";
import { NavText } from "../ui/Typography";
import { QUERY } from "../../styles/1-DesignTokens";

const NavLink = ({ onClick, href, route, size, children }) => {
  return (
    <StyledLink onClick={onClick} href={href} route={route}>
      <Wrapper href={href} route={route}>
        <NavText size={size} href={href} route={route}>
          {children}
        </NavText>
      </Wrapper>
    </StyledLink>
  );
};

export default NavLink;

export const NavWrapperStyles = css`
 
  border: 1px solid var(--color-nav-border);


  user-select: none; // prevents selecting text of interactive elements
  @media (hover: none) and (pointer: coarse) {
    -webkit-tap-highlight-color: transparent; // prevents flash when clicking buttons on touch devices
  }
  height: var(--space-8);
  padding: 0 var(--space-4);
  @media ${QUERY.phoneAndSmaller} { 
    height: 100%;
    padding: var(--space-4) var(--space-5);
  }
  /* border: 1px solid var(--color-nav-border); */
  border-radius: 999px;
  display: grid;
  place-items: center;
  transition: color, background-color 200ms ease-in;
  /* If href is current route, then apply active background color */
  background-color: ${(p) =>
    p.href === p.route
      ? "var(--color-nav-background-active)"
      : "var(--color-nav-background)"};

  & > p {
    display: flex;
    gap: var(--space-2);
    align-items: center;
  }
`;

const Wrapper = styled.div`
  ${NavWrapperStyles}
`;

const StyledLink = styled(UnstyledLink)`
  /* If href is current route, then apply active,hover backround color */
  &:hover ${Wrapper} {
    background-color: ${(p) =>
      p.href === p.route
        ? "var(--color-nav-background-active-hover)"
        : "var(--color-nav-background-hover)"};
  }

  /* If href is current route, then apply active,hover text color */
  &:hover ${NavText} {
    color: ${(p) =>
      p.href === p.route
        ? "var(--color-nav-text-active-hover)"
        : "var(--color-nav-text-hover)"};
  }
`;
