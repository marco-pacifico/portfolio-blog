import { css } from "styled-components";

export const LinkStyles = css`
  --color-link-background-image: var(--color-text-link-hover);
  /* font-weight: var(--font-weight-); */
  color: var(--color-text-link);

  padding-bottom: 1px;
  border-bottom: 1px solid var(--color-text-link-underline);
  text-decoration: none;

  background-image: linear-gradient(
    90deg,
    var(--color-link-background-image),
    var(--color-link-background-image)
  );
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: left 104%;
  transition: 
    background-size 200ms ease-out, 
    border-color 300ms ease-in,
    color 300ms ease-in;

  &:hover {
    /* border-bottom: 1px solid transparent; */
    background-size: 100% 2px;
    color: var(--color-text-link-hover);
  }
`;
