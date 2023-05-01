import styled from "styled-components";
import { NavWrapperStyles} from "./NavLink";
import { NavText } from "../ui/Typography";

const NavButton = ({ onClick, size="small", children }) =>{
    return(
        <StyledButton size={size} onClick={onClick}>
            <NavText size={size}>{children}</NavText>
        </StyledButton>
    );
};

export default NavButton;

const StyledButton = styled.button`
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    ${NavWrapperStyles}
    height: ${(p) => p.size === "large" && "auto"};
    padding: ${(p) => p.size === "large" && "var(--space-4) var(--space-5)"};
    border-radius: ${(p) => p.size === "large" && "16px"};
    background-color: var(--color-nav-background);
    transition: background-color 200ms ease-in;
    
    & ${NavText} {
        color: var(--color-nav-text);
    }

    &:hover {
        background-color: var(--color-nav-background-hover);
    }

    &:hover ${NavText} {
        color: var(--color-nav-text-hover);
    }

`