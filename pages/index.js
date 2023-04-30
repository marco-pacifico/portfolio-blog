import IndexHero from "../components/sections/IndexHero";
import IndexSection from "../components/sections/IndexSection";
import Card from "../components/ui/Card";
import HorizontalScroll from "../components/ui/HorizontalScroll";
import ListItem from "../components/ui/ListItem";
import { getSortedPostsData } from "../lib/getAndSavePosts";
import { getSortedProjectsData } from "../lib/getAndSaveProjects";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData
    },
  };
} 

export default function Home({ allPostsData, allProjectsData }) {
  const postsLimit = 3
  const postsToShow = allPostsData.slice(0,postsLimit)
  return (
    <>
      <IndexHero />
      <IndexSection
        title="Work"
        description="I make tools and simplify complexity. I’m a designer who can research,
        prototype, build design systems, and ship product."
      >
        <HorizontalScroll>
          {allProjectsData.map(({ slug, thumbnail, title, description, category }) => (
              <Card
                key={slug}
                href={`/work/${slug}`}
                thumbnail={`/thumbnails/${thumbnail}`}
                category={category}
                title={title}
                description={description}
              />
          ))}
        </HorizontalScroll>
      </IndexSection>
      <IndexSection
        title="Writing"
        description="I write to clarify my thinking on topics that interest me."
      >
        <ol>
          {postsToShow.map(({ slug, title, description }) => (
            <ListItem key={slug} href={`/writing/${slug}`} title={title} description={description} />
          ))}
          <ListItem title="See all writing" href="/writing" />
        </ol>
        
      </IndexSection>
    </>
  );
};