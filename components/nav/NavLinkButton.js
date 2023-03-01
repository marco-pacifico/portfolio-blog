import styled from "styled-components";
import { UnstyledLink } from "../ui/UnstyledLink";
import { NavText } from "../ui/Typography";
import { COLORS } from "../../styles/1-DesignTokens";

const NavLinkButton = ({href, route, size, children}) => {
    return (
        <UnstyledLink href={href} route={route}>
            <Wrapper href={href} route={route}>
                <LogoMark size={size} href={href} route={route}>{children}</LogoMark>
            </Wrapper>   
        </UnstyledLink>
    )
};

export default NavLinkButton;

const Wrapper = styled.div`
    --logo-size: var(--space-8);
    height: var(--logo-size);
    padding: 0 var(--space-4);
    border-radius: 12px;
    display: grid;
    place-items: center;
    background-color: ${(p) => (p.href === p.route ? 'var(--color-nav-background-active)' : 'var(--color-nav-background)')};
    transition: all 200ms ease-in;
    ${UnstyledLink}:hover & {
        background-color: ${(p) => (p.href === p.route ? 'var(--color-nav-background-active-hover)' : 'var(--color-nav-background-hover)')};
    }
`

const LogoMark = styled(NavText)`
    font-size: ${(p) => (p.size === "small" ? 'var(--font-size-3)' : 'var(--font-size-5)')};
    color: ${(p) => (p.href === p.route ? 'var(--color-nav-text-active)' : 'var(--color-nav-text)')};
    transition: all 200ms ease-in;
    ${UnstyledLink}:hover & {
        color: ${(p) => (p.href === p.route ? 'var(--color-nav-text-active-hover)' : 'var(--color-nav-text-hover)')};
    }
`