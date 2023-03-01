import styled from "styled-components";
import ListItem from "../ui/ListItem.js";
import POSTS from "../../data/POSTS.js";
import { Overline } from "../ui/Typography.js";
import { BREAKPOINT } from "../../styles/1-DesignTokens.js";


const MorePosts = ({ currentPost }) => {
  const filteredPOSTS = POSTS.filter((post) => post.slug !== currentPost);
  return (
    <MorePostsSection>
      <Overline>More Posts</Overline>
      <ol>
        {filteredPOSTS.map(({ slug, title, description }) => (
          <ListItem slug={slug} title={title} description={description} />
        ))}
      </ol>
    </MorePostsSection>
  );
};

export default MorePosts;

const MorePostsSection = styled.section`
  margin-top: var(--space-9); 
  padding-top: var(--space-9);
  border-top: 1px solid var(--color-border);
  padding-left: var(--section-offset);
  padding-right: var(--section-offset);

  padding-bottom: var(--space-12);
  max-width: ${BREAKPOINT.desktoplarge / 16}rem;
  margin-inline: auto;
  /* margin-left: var(--section-offset); */
`;
