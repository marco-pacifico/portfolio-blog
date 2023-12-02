import styled from "styled-components";
import ListItem from "../../components/ui/ListItem.js";
import PageHero from "../../components/sections/PageHero.js";
import { getSortedDraftsData } from "../../lib/getAndSaveDrafts.js";

export async function getStaticProps() {
  const allDraftsData = getSortedDraftsData();
  return {
    props: {
      allDraftsData,
    },
  };
}

export default function Drafts({ allDraftsData }) {
  return (
    <>
      <PageHero title="Drafts" />
      <List>
        {allDraftsData.map(({ slug, title, description }) => (
          <ListItem key={slug} href={`/drafts/${slug}`} title={title} description={description} isShown={true}/>
        ))}
      </List>
    </>
  );
}

const List = styled.ol`
  padding-top: var(--space-9);
  padding-left: var(--section-offset);
  padding-right: var(--section-offset);
  padding-bottom: var(--space-12);
  max-width: var(--width-site-max);
  margin: 0 auto;
`
