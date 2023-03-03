import { useState } from "react";
import styled from "styled-components";
import ListItem from "../ui/ListItem.js";
import NavButton from "../nav/NavButton.js";
import POSTS from "../../data/POSTS.js";
import { Overline } from "../ui/Typography.js";
import { BREAKPOINT } from "../../styles/1-DesignTokens.js";

const MoreWriting = ({ currentPost }) => {
  const [showMore, setShowMore] = useState(false);
  // Don't show the current post
  const filteredPOSTS = POSTS.filter((post) => post.slug !== currentPost);

  // Limit posts displayed
  const firsPostsLimit = 4;
  const morePostsLimit = firsPostsLimit * 2;
  const firstPosts = filteredPOSTS.slice(0, firsPostsLimit);
  const morePosts = filteredPOSTS.slice(0, morePostsLimit);
  const postsToShow = showMore ? morePosts : firstPosts;
  console.log(postsToShow.length);

  return (
    <MorePostsSection>
      <Overline>More Writing</Overline>
      <ol>
        {postsToShow.map(({ slug, title, description }) => (
          <ListItem
            id={slug}
            href={`/writing/${slug}`}
            title={title}
            description={description}
          />
        ))}
      </ol>
      {!showMore && (
        <SeeMoreButtonSection>
          <NavButton size="large" onClick={() => setShowMore(!showMore)}>
            Show more posts
          </NavButton>
        </SeeMoreButtonSection>
      )}
      {postsToShow.length === morePostsLimit && (
        <ListItem title="See all writing" href="/writing" />
      )}
    </MorePostsSection>
  );
};

export default MoreWriting;

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

const SeeMoreButtonSection = styled.div`
  display: grid;
  place-items: center;
  padding-top: var(--space-9);
`;
