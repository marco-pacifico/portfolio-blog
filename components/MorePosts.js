import POSTS from '../data/POSTS.js'
import Link from 'next/link.js'

const MorePosts = ({currentPost}) => {
    const filteredPOSTS = POSTS.filter((post) => post.slug !== currentPost);
    return (
      <ul>
            {filteredPOSTS.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                    {post.title}
                </Link>
             </li>
            ))}
  
    </ul>      
    )
}

export default MorePosts