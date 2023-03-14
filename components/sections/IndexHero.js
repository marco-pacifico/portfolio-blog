import styled, { keyframes } from "styled-components";
import { H1, H1_Overline } from "../ui/Typography";
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
    transform: translateY(-30%);
    opacity: 0;
  }
  50% {
    transform: translateY(0%);
    opacity: 75%;
  }
  100% {
    opacity: 1;
  }
`;
const SectionWrapper = styled.section`
  --hero-section-height: 80vh;
  height: var(--hero-section-height);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: var(--section-offset);
  padding: 0 0 var(--space-fluid-11) 0;
  @media ${QUERY.phoneAndSmaller} {
    justify-content: center;
    padding: var(--space-fluid-11) 0 0;
  }
`;

const Intro = styled(H1)`
  animation: ${slidedown} 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
const Name = styled(H1_Overline)`
`;
