import Link from "next/link";
import styled from "styled-components";
import { QUERY } from "../../styles/1-DesignTokens";
import { LinkStyles } from "../../styles/LinkStyles";
import { TitleAndDescription } from "../ui/Typography";

export const NavLinkFooter = styled(Link)`
    ${LinkStyles}
    ${TitleAndDescription}
    &:hover{
        color: var(--color-text-link);
    }
    padding-bottom: 3px;
    border-bottom: none;
    @media ${QUERY.phoneAndSmaller} {
        border-bottom: 1px solid var(--color-text-link-underline);
    }
    /* --color-link-background-image: var(--color-text-secondary); */
`