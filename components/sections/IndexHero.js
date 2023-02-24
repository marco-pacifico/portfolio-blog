import styled from "styled-components";
import { H1, H1_Overline } from "../ui/Typography";
import { QUERY } from "../../styles/1-DesignTokens";

const IndexHero = () => {
  return (
    <SectionWrapper>
      <Intro>
        <Name>Hello, I’m Marco <br /></Name>
        Product Designer <br />
        based in New&nbsp;York&nbsp;City.
      </Intro>
    </SectionWrapper>
  );
};

export default IndexHero;

const SectionWrapper = styled.section`
  height: 80vh;
  /* border-bottom: 1px solid var(--color-border); */
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

const Intro = styled(H1)``;
const Name = styled(H1_Overline)``;
