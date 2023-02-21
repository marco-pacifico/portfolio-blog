import Link from "next/link";
import styled from "styled-components";
import { LinkStyles } from "../styles/LinkStyles";

export const NavLink = styled(Link)`
    ${LinkStyles}
    background-position: left 106%;
    font-size: var(--font-size-3);
    font-weight: ${(p) => (p.href === p.route ? 'var(--font-weight-bold)' : 'var(--font-weight-regular)')};
    /* font-weight: var(--font-weight-regular); */
    border: none;
    color: ${(p) => (p.href === p.route ? 'var(--color-text-link)' : 'var(--color-text-primary)')};
    /* color: var(--color-text-primary); */
    /* --color-link-background-image: ${(p) => (p.href === p.route ? 'var(--color-text-link)' : 'var(--color-text-secondary)')}; */
    --color-link-background-image: var(--color-text-secondary);
`