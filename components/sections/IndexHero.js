import styled, { keyframes } from "styled-components";
import { H3, H3_Overline } from "../ui/Typography";
import { QUERY } from "../../styles/1-DesignTokens";

const IndexHero = () => {
  return (
    <SectionWrapper>
      <Intro>
        <Name>
          Hello, I’m Marco <br />
        </Name>
        Product Designer <br />
        based in New&nbsp;York&nbsp;City.
      </Intro>
    </SectionWrapper>
  );
};

export default IndexHero;

const slidedown = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  50% {
    opacity: 75%;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;
const SectionWrapper = styled.section`
  --hero-section-height: 60vh;
  height: var(--hero-section-height);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: var(--section-offset);
  padding: 0 0 var(--space-12) 0;
  @media ${QUERY.phoneAndSmaller} {
    justify-content: center;
    padding: var(--space-fluid-11) 0 0;
  }
`;

const Intro = styled(H3)`
  animation: ${slidedown} 600ms ease;
  line-height: 1.3;
`;
const Name = styled(H3_Overline)`
`;
