import POSTS from '../data/POSTS.js'
import Link from 'next/link.js'
import styled from 'styled-components';

const MorePosts = ({currentPost}) => {
    const filteredPOSTS = POSTS.filter((post) => post.slug !== currentPost);
    return (
        <MorePostsSection>
            More Posts
            <MorePostsList>
                {filteredPOSTS.map((post) => (
                <Post key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </Post>
                ))}
            </MorePostsList>      
        </MorePostsSection>
    )
}

export default MorePosts

const MorePostsSection = styled.section`
    padding: 4rem 2rem 8rem 2rem;
    margin-top: 4rem;
    border-top: 1px solid var(--color-border);
`

const MorePostsList = styled.ul`
    /* max-width: 640px; */
    margin: 0 auto;
`

const Post = styled.li`
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-medium);
    margin: 1.5rem 0;
    color: var(--color-text-primary);
    
    & a {
        text-decoration: none;
    
        &:visited {
            color: var(--color-text-primary);
    
        }

    }
`