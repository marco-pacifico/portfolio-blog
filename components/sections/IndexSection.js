import React from "react";
import styled from "styled-components";
import useIsOnScreen from "../../hooks/is-on-screen";
import { H2, H3 } from "../ui/Typography";

const IndexSection = ({ title, description, children }) => {
  // Animate ContentWrapper when SectionWrapper is on screen
  const [sectionWrapperRef, isShown] = useIsOnScreen({ threshold: 0.1 });
  const translateY = isShown ? "0%" : "100%";
  const opacity = isShown ? "1" : "0";
  const animationStyles = {
    opacity: `${opacity}`,
    transform: `translateY(${translateY})`,
    willChange: 'transform',
  };

  return (
    <SectionWrapper ref={sectionWrapperRef}>
      <ContentWrapper style={animationStyles}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
      {children}
    </SectionWrapper>
  );
};

export default IndexSection;

const SectionWrapper = styled.section`
  --section-padding-top-min: var(--space-9);
  --section-padding-top-target: var(--space-fluid-11);
  --section-padding-top-max: var(--space-fluid-11);
  --section-padding-top: clamp(
    var(--section-padding-top-min),
    var(--section-padding-top-target),
    var(--section-padding-top-max)
  );
  --section-padding-bottom: calc(2 * var(--section-padding-top));

  padding-top: var(--section-padding-top);
  padding-bottom: var(--section-padding-bottom);
  padding-right: var(--section-offset);
  margin-left: var(--section-offset);
  border-top: 1px solid var(--color-border);
`;

const ContentWrapper = styled.div`
  transition: transform 500ms, opacity 800ms 300ms;
`;

const Title = styled(H2)`
  --title-margin-min: var(--space-5);
  --title-margin-target: var(--space-fluid-7);
  --title-margin-max: var(--space-8);
  --title-margin: clamp(
    var(--title-margin-min),
    var(--title-margin-target),
    var(--title-margin-max)
  );
  margin-bottom: var(--title-margin);
`;

const Description = styled(H3)`
  --description-margin-min: var(--space-9);
  --description-margin-target: var(--space-fluid-11);
  --description-margin-max: var(--space-11);
  --description-margin: clamp(
    var(--description-margin-min),
    var(--description-margin-target),
    var(--description-margin-max)
  );
  margin-bottom: var(--description-margin);
  max-width: 38ch;
`;
