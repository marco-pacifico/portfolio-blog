import styled, { css } from "styled-components";
import { UnstyledLink } from "../ui/UnstyledLink";
import { NavText } from "../ui/Typography";

const NavLink = ({ onClick, href, route, size, children }) => {
  return (
    <StyledLink onClick={onClick} href={href} route={route}>
      <Wrapper href={href} route={route}>
        <NavText size={size} href={href} route={route}>{children}</NavText>
      </Wrapper>
    </StyledLink>
  );
};

export default NavLink;

export const NavWrapperStyles = css`
  height: var(--space-8);
  padding: 0 var(--space-4);
  border-radius: 12px;
  display: grid;
  place-items: center;

  /* If href is current route, then apply active background color */
  background-color: ${(p) =>
    p.href === p.route
      ? "var(--color-nav-background-active)"
      : "var(--color-nav-background)"};

  transition: background-color 200ms ease-in;
  transition: color 200ms ease-in;
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
