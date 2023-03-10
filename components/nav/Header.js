import styled, { css } from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import NavButton from "./NavButton";
import DarkToggle from "../DarkToggle";
import { QUERY } from "../../styles/1-DesignTokens";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const showBackToWriting =
    currentRoute.includes("writing") && currentRoute !== "/writing";
  const showBackToWork =
    currentRoute.includes("work") && currentRoute !== "/work";

  return (
    <StyledHeader>
      <LeftSide>
        <NavLink href="/" route={currentRoute}>
          M
        </NavLink>
        {showBackToWriting && (
          <NavLink size="small" href="/writing">
            ← Writing
          </NavLink>
        )}
        {showBackToWork && (
          <NavLink size="small" href="/work">
            ← Work
          </NavLink>
        )}
      </LeftSide>
      <DesktopNav>
        <NavLink size="small" href="/about" route={currentRoute}>
          About
        </NavLink>
        {!showBackToWriting && (
          <NavLink size="small" href="/writing" route={currentRoute}>
            Writing
          </NavLink>
        )}
        {!showBackToWork && (
          <NavLink size="small" href="/work" route={currentRoute}>
            Work
          </NavLink>
        )}
        <DarkToggle />
      </DesktopNav>

      <MobileNav>
        <NavButton onClick={() => setShowMobileMenu(true)}>Menu</NavButton>
        <DarkToggle />
      </MobileNav>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
        route={currentRoute}
      />
    </StyledHeader>
  );
};

export default Header;

const HeaderVariables = css`
  /* HEIGHT AND PADDING*/
  --header-height: var(--space-10);
  --header-padding-block: var(--space-5);
  --header-padding: var(--header-padding-block) var(--site-gutter);

  /* POSITION */
  --header-position-mode: sticky;
  --header-position-top: 0;
  --header-position-right: 0;
  --header-position-bottom: revert;
  --header-position-left: 0;

  /* BORDER */
  --header-border: 1px solid var(--color-border);

  /* NAV ITEM SPACING*/
  --nav-item-gap: var(--space-4);
  @media ${QUERY.phoneAndSmaller} {
    /* Tighten nav item spacing on mobile */
    --nav-item-gap: var(--space-3);
  }
`;

const StyledHeader = styled.header`
  ${HeaderVariables}
  position: var(--header-position-mode);
  top: var(--header-position-top);
  right: var(--header-position-right);
  left: var(--header-position-left);
  bottom: var(--header-position-bottom);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: var(--header-height);
  padding: var(--header-padding);
  /* background-color: var(--color-background); */
  background-color: transparent;
  /* border-bottom: var(--header-border); */

  @media ${QUERY.phoneAndSmaller} {
    background-color: transparent;
    /* HEIGHT AND PADDING */
    /* Apply iOS mobile scroll offset to height and padding */
    --mobile-scroll-offset: env(safe-area-inset-bottom);
    --header-height: calc(
      var(--header-height) + (2 * var(--mobile-scroll-offsett))
    );
    --header-padding-block: var(--space-4);
    --header-padding-bottom-offset: calc(
      var(--header-padding-block) + (2 * var(--mobile-scroll-offset))
    );
    --header-padding: var(--header-padding-block) // Top
      var(--site-gutter) // Right
      var(--header-padding-bottom-offset) // Bottom
      var(--site-gutter); // Left

    /* POSITION */
    /* Mobile header fixed to bottom, accounting for iOS mobile scroll offset */
    --header-position-mode: fixed;
    --header-position-top: revert;
    --header-position-bottom: calc(0% - var(--mobile-scroll-offset));

    /* BORDER */
    /* Remove border on mobile header */
    --header-border: none;
  }
`;

const LeftSide = styled.div`
  display: flex;
  gap: var(--nav-item-gap);
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: var(--nav-item-gap);
  @media ${QUERY.phoneAndSmaller} {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  @media ${QUERY.phoneAndSmaller} {
    display: flex;
    align-items: center;
    gap: var(--nav-item-gap);
  }
`;

const MobileMenuButton = styled.button`
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
