import POSTS from '../data/POSTS.js'
import styled from 'styled-components';
import Link from 'next/link.js';
import { LinkStyles } from '../styles/LinkStyles.js';

const MorePosts = ({currentPost}) => {
    const filteredPOSTS = POSTS.filter((post) => post.slug !== currentPost);
    return (
        <MorePostsSection>
            More Posts
            <MorePostsList>
                {filteredPOSTS.map((post) => (
                <Post key={post.slug}>
                    <StyledLink href={`/blog/${post.slug}`}>
                        {post.title} →
                    </StyledLink>
                </Post>
                ))}
            </MorePostsList>      
        </MorePostsSection>
    )
}

export default MorePosts

const MorePostsSection = styled.section`
    padding-inline: var(--site-gutter);
    padding-top: var(--space-9);
    padding-bottom: var(--space-12);
    margin-top: var(--space-9);
    border-top: 1px solid var(--color-border);
`
const MorePostsList = styled.ul`
    max-width: var(--width-blog-content);
    margin: 0 auto;
`
const Post = styled.li`
    margin: var(--space-6) 0;
`
const StyledLink = styled(Link)`
    ${LinkStyles}
    border: none;
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary); 
`