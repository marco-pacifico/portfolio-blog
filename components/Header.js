import styled from "styled-components";
import { NavLink, MobileNavLink } from "./NavLink";
import { useRouter } from "next/router";
import { QUERY } from "../styles/DesignTokens";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <StyledHeader>
      <NavLink href="/">M</NavLink>

      <DesktopNav>
        <NavLink href="/about" route={currentRoute}>
          About
        </NavLink>
        <NavLink href="/blog" route={currentRoute}>
          Blog
        </NavLink>
        <NavLink href="/work" route={currentRoute}>
          Work
        </NavLink>
        DarkToggle
      </DesktopNav>

      <MobileNav>
        <MobileNavLink href="/about" route={currentRoute}>
          About
        </MobileNavLink>
        <MobileNavLink href="/blog" route={currentRoute}>
          Blog
        </MobileNavLink>
        <MobileNavLink href="/work" route={currentRoute}>
          Work
        </MobileNavLink>
        {/* <MobileMenu>...</MobileMenu> */}
      </MobileNav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  /* height: 80px; // nav height */
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  /* top: 0; */
  right: 0;
  left: 0;
  background-color: var(--color-background);

  @media ${QUERY.phoneAndSmaller} {
    position: fixed;
    height: 72px; // nav height
    align-items: center;
    padding: 1rem;
    /* top: calc(100% - 72px); */
    bottom: 0;
    bottom: env(safe-area-inset-bottom);
    border-bottom: none;
    border-top: 1px solid var(--color-border);
    /* background-color: transparent; */
  }
`;
const DesktopNav = styled.nav`
  display: flex;
  gap: 24px; // navlink spacing

  @media ${QUERY.phoneAndSmaller} {
    display: none;
  }
`;
const MobileNav = styled.div`
  display: none;

  @media ${QUERY.phoneAndSmaller} {
    display: flex;
    align-items: center;
    gap: 16px; // navlink spacing
  }
`;

const MobileMenu = styled.button`
    padding: 8px;
    border-radius: 5px;
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: inherit;
`;
