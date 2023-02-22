import Link from "next/link";
import styled from "styled-components";
import { LinkStyles } from "../styles/LinkStyles";

export const NavLink = styled(Link)`
    ${LinkStyles}
    padding-bottom: 3px;
    /* background-position: left 104%; */
    font-size: var(--font-size-3);
    font-weight: ${(p) => (p.href === p.route ? 'var(--font-weight-bold)' : 'var(--font-weight-regular)')};
    /* font-weight: var(--font-weight-regular); */
    border: none;
    color: ${(p) => (p.href === p.route ? 'var(--color-text-link)' : 'var(--color-text-primary)')};
    /* color: var(--color-text-primary); */
    /* --color-link-background-image: ${(p) => (p.href === p.route ? 'var(--color-text-link)' : 'var(--color-text-secondary)')}; */
    --color-link-background-image: var(--color-text-secondary);
`

export const MobileNavLink = styled(Link)`
    padding: 8px 16px;
    border-radius: 10000px;
    color: ${(p) => (p.href === p.route ? 'var(--color-background)' : 'var(--color-text-primary)')};
    background-color: ${(p) => (p.href === p.route ? 'var(--color-text-link)' : 'var(--color-background-light)')};
    text-decoration: none;
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-bold);
`