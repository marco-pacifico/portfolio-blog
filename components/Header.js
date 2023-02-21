import styled from "styled-components";
import { NavLink } from "./NavLink";
import { useRouter } from "next/router";
import { QUERY } from "../styles/DesignTokens";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <StyledHeader>
      <NavLink href="/">Marco Pacifico</NavLink>

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

      <MobileActions>
        DarkToggle
        <MobileMenu>...</MobileMenu>
      </MobileActions>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  background-color: var(--color-background);

  @media ${QUERY.phoneAndSmaller} {
    height: 72px;
    align-items: center;
    padding: 1rem;
  }
`;
const DesktopNav = styled.nav`
  display: flex;
  gap: 24px; // navlink spacing

  @media ${QUERY.phoneAndSmaller} {
    display: none;
  }
`;
const MobileActions = styled.div`
  display: none;

  @media ${QUERY.phoneAndSmaller} {
    display: flex;
    align-items: center;
    gap: 24px; // navlink spacing
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
