import { DialogOverlay, DialogContent } from "@reach/dialog"; // https://reach.tech/dialog/
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import NavButton from "./NavButton";

const MobileMenu = ({ isOpen, onDismiss }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <InnerWrapper>
          <Nav>
            <NavLink href="/" route={currentRoute} onClick={onDismiss}>
              Home
            </NavLink>
            <NavLink href="/work" route={currentRoute} onClick={onDismiss}>
              Work
            </NavLink>
            <NavLink href="/writing" route={currentRoute} onClick={onDismiss}>
              Writing
            </NavLink>
            <NavLink href="/about" route={currentRoute} onClick={onDismiss}>
              About
            </NavLink>
            <CloseButton onClick={onDismiss}>Close</CloseButton>
          </Nav>
        </InnerWrapper>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slidein = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const CloseButton = styled(NavButton)`
  & > p {
    color: var(--color-nav-text);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background: transparent;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-background);
  animation: ${fadein} 500ms;
`;

const Content = styled(DialogContent)`
  position: absolute;
  background: var(--color-background);
  width: 100%;
  height: auto;
  padding: var(--site-gutter);
  display: flex;
  flex-direction: column;
  animation: ${slidein} 280ms 200ms both cubic-bezier(0, 0.57, 0.37, 0.99);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadein} 500ms 300ms both;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`;
