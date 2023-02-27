import styled from "styled-components";
import { UnstyledLink } from "../ui/UnstyledLink";

const Logo = () => {
    return (
        <UnstyledLink href="/">
            <Wrapper>
                <LogoMark>M</LogoMark>
            </Wrapper>   
        </UnstyledLink>
    )
};

export default Logo;

const Wrapper = styled.div`
    --logo-size: var(--space-8);
    height: var(--logo-size);
    width: var(--logo-size);
    border-radius: 12px;
    display: grid;
    place-items: center;
    background-color: var(--color-logo-background);
    ${UnstyledLink}:hover & {
        background-color: var(--color-text-tertiary);
    }
`

const LogoMark = styled.p`
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-bold);
    color: var(--color-logo-text);

    ${UnstyledLink}:hover & {
        color: var(--color-text-link);
    }
`