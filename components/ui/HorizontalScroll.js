import React, { use } from "react";
import styled from "styled-components";
import useIsOnScreen from "../../hooks/is-on-screen";
import useOnScreenRatio from "../../hooks/on-screen-ratio";

const HorizontalScroll = ({ children }) => {
  const [onScreenRef, ratio] = useOnScreenRatio();
  const [endOfOnScreenRef, endIsShown] = useIsOnScreen({});
  const scrollRef = React.useRef();

  React.useEffect(() => {
    // Don't update scroll position on touch devices
    if (window.matchMedia("pointer: coarse").matches) {
    } else {
      !endIsShown && (scrollRef.current.scrollLeft = ratio * 500 - 200);
    }

  }, [ratio, endIsShown]);

  return (
    <ScrollWrapper>
      <OnScreenWrapper ref={onScreenRef} />
      <ScrollArea ref={scrollRef}>{children}</ScrollArea>
      <EndOfOnScreen ref={endOfOnScreenRef}/>
    </ScrollWrapper>
  );
};

export default HorizontalScroll;

const ScrollWrapper = styled.div`
  position: relative;
`;
const OnScreenWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  pointer-events: none;
`;
const EndOfOnScreen = styled.div`
  position: absolute;
  bottom: calc(-2.5 * var(--section-padding-bottom));
`;


const ScrollArea = styled.div`
  --grid-gap-min: var(--space-8);
  --grid-gap-target: var(--space-fluid-7);
  --grid-gap-max: var(--space-fluid-7);
  --grid-gap: clamp(
    var(--grid-gap-min),
    var(--grid-gap-target),
    var(--grid-gap-max)
  );

  display: flex;
  align-items: start;
  gap: var(--grid-gap);
  overflow: scroll;
  margin: 0 calc(-1 * var(--section-offset));
  padding: 0 var(--section-offset);

  &::-webkit-scrollbar {
    display: none;
  }

  & li {
    min-width: 360px;
    flex: 1;
  }
`;
