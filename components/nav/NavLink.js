import styled, { css } from "styled-components";
import { UnstyledLink } from "../ui/UnstyledLink";
import { NavText } from "../ui/Typography";

const NavLink = ({ href, route, size, children }) => {
  return (
    <StyledLink href={href} route={route}>
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

  transition: all 200ms ease-in;
`;

const Wrapper = styled.div`
  ${NavWrapperStyles}
`;

// const NavText = styled.p`
//   font-weight: var(--font-weight-bold);

//   /* Use smaller font size for small variant */
//   font-size: ${(p) =>
//     p.size === "small" ? "var(--font-size-3)" : "var(--font-size-5)"};

//   /* If href is current route, then apply active text color */
//   color: ${(p) =>
//     p.href === p.route
//       ? "var(--color-nav-text-active)"
//       : "var(--color-nav-text)"};

//   transition: all 200ms ease-in;
// `;

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
