import styled from "styled-components";

const BlogMDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  em: EM,
  strong: STRONG,
  pre: PRE,
  code: CODE,
  ol: OL,
  ul: UL,
  li: LI,
  blockquote: Blockquote,
  img: IMAGE,
};

export default BlogMDXComponents;

const H1 = styled.h1`
  font-size: var(--font-size-9);
  font-weight: var(--font-weightBold);
  line-height: var(--lineHeightHeading);
  letter-spacing: var(--letterSpacingHeading);
  margin: var(--marginHeading);
  letter-spacing: var(--letterSpacingDisplay);
  margin: var(--marginDisplay);
`;
