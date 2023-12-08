import styled from "styled-components";
import { NavWrapperStyles } from "./NavLink";

const NavButton = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default NavButton;

const StyledButton = styled.button`
  ${NavWrapperStyles}
`;
