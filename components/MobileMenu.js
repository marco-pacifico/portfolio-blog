import { DialogOverlay, DialogContent } from "@reach/dialog"; // https://reach.tech/dialog/
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import { NavLink } from "./NavLink";

const MobileMenu = ({ isOpen, onDismiss }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <InnerWrapper>
          <CloseButton onClick={onDismiss}>Close</CloseButton>
          <Nav>
            <NavLink href="/" route={currentRoute} onClick={onDismiss}>
              Home
            </NavLink>
            <NavLink href="/about" route={currentRoute} onClick={onDismiss}>
              About
            </NavLink>
            <NavLink href="/blog" route={currentRoute} onClick={onDismiss}>
              Blog
            </NavLink>
            <NavLink href="/work" route={currentRoute} onClick={onDismiss}>
              Work
            </NavLink>
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
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
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
  width: 300px;
  height: 100%;
  padding: 24px 32px;
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
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
