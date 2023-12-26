import IndexHero from "../components/sections/IndexHero";
import IndexSection from "../components/sections/IndexSection";
import Card from "../components/ui/Card";
import HorizontalScroll from "../components/ui/HorizontalScroll";
import ListItem from "../components/ui/ListItem";
import { getSortedPostsData } from "../lib/getAndSavePosts";
import { getSortedProjectsData } from "../lib/getAndSaveProjects";
import useIsOnScreen from "../hooks/is-on-screen";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}

export default function Home({ allPostsData, allProjectsData }) {
  const postsLimit = 3;
  const postsToShow = allPostsData.slice(0, postsLimit);
  const [postsListRef, isShown] = useIsOnScreen({});

  return (
    <>
      <IndexHero />
      <IndexSection
        description="I make tools and simplify complexity. I’m a designer who can research,
        prototype, build design systems, and ship product."
      >
        <HorizontalScroll>
          {allProjectsData.map(
            ({ slug, thumbnail, title, description, category }) => (
              <Card
                key={slug}
                href={`/work/${slug}`}
                thumbnail={`/thumbnails/${thumbnail}`}
                category={category}
                title={title}
                description={description}
              />
            )
          )}
        </HorizontalScroll>
      </IndexSection>
      <IndexSection
        title="Code"

      >
        <Card 
          href={"/writing/interactive-graph-paper"}
        />
      </IndexSection>
      <IndexSection
        title="Writing"
      >
        <ol ref={postsListRef}>
          {postsToShow.map(({ slug, title, description }, index) => (
            <ListItem
              key={slug}
              href={`/writing/${slug}`}
              title={title}
              description={description}
              delay={index + 1}
              isShown={isShown}
            />
          ))}
          <ListItem
            title="See all writing"
            href="/writing"
            delay={postsToShow.length + 1}
            isShown={isShown}
          />
        </ol>
      </IndexSection>
    </>
  );
}
