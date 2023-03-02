import IndexHero from "../components/sections/IndexHero";
import IndexSection from "../components/sections/IndexSection";
import Card from "../components/ui/Card";
import Grid from "../components/ui/Grid";
import firstimage from "./writing/post-one/image-one.jpg";
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
  return (
    <>
      <IndexHero />
      <IndexSection
        title="Work"
        description="I make tools and simplify complexity. I’m a designer who can research,
        prototype, build design systems, and ship product."
      >
        <Grid>
          {allProjectsData.map(({ slug, title, description, category }) => (
              <Card
                key={slug}
                slug={slug}
                category={category}
                image={firstimage}
                title={title}
                description={description}
              />
          ))}
        </Grid>
      </IndexSection>
      <IndexSection
        title="Writing"
        description="I write to clarify my thinking on topics that interest me."
      >
        <ol>
          {allPostsData.map(({ slug, title, description }) => (
            <ListItem key={slug} slug={slug} title={title} description={description} />
          ))}
        </ol>
      </IndexSection>
    </>
  );
};