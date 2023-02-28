import styled from "styled-components";
import { UnstyledLink } from "../ui/UnstyledLink";
import { NavText } from "../ui/Typography";

const NavLinkButton = ({href, route, children}) => {
    return (
        <UnstyledLink href={href} route={route}>
            <Wrapper href={href} route={route}>
                <LogoMark href={href} route={route}>{children}</LogoMark>
            </Wrapper>   
        </UnstyledLink>
    )
};

export default NavLinkButton;

const Wrapper = styled.div`
    --logo-size: var(--space-8);
    height: var(--logo-size);
    /* width: var(--logo-size); */
    padding: 0 var(--space-4);
    border-radius: 12px;
    display: grid;
    place-items: center;
    /* background-color: var(--color-logo-background); */
    background-color: ${(p) => (p.href === p.route ? 'var(--color-text-strong)' : 'var(--color-logo-background)')};
    ${UnstyledLink}:hover & {
        background-color: var(--color-text-tertiary);
    }
`

const LogoMark = styled(NavText)`
    /* color: var(--color-logo-text); */
    color: ${(p) => (p.href === p.route ? 'var(--color-background)' : 'var(--color-logo-text)')};

    ${UnstyledLink}:hover & {
        color: var(--color-text-link);
    }
`