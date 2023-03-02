import styled from "styled-components";
import { NavWrapperStyles} from "./NavLink";
import { NavText } from "../ui/Typography";

const NavButton = ({ onClick, size, children }) =>{
    return(
        <StyledButton onClick={onClick}>
            <NavText size="small">{children}</NavText>
        </StyledButton>
    );
};

export default NavButton;

const StyledButton = styled.button`
    ${NavWrapperStyles}

    background-color: var(--color-nav-background);

    &:hover {
        background-color: var(--color-nav-background-hover);
    }

    &:hover ${NavText} {
        color: var(--color-nav-text-hover);
    }

`