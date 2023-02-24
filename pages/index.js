import IndexHero from '../components/sections/IndexHero'
import IndexSection from '../components/sections/IndexSection'
import Card from '../components/ui/WorkCard'
import firstimage from '../pages/blog/post-one/image-one.jpg'
import ListItem from '../components/ui/WritingListItem'

export default function Home() {
  return (
    <>  
      <IndexHero />
      <IndexSection 
        title="Work" 
        description="I make tools and simplify complexity. I’m a designer who can research,
        prototype, build design systems, and ship product."
      >
        <Card 
          slug="/blog/post-one"
          category='New Product'
          image={firstimage}
          title="Second Funnel CMS"
          description="A web-based CRM tool for medical clinics"
        />
      </IndexSection>
      <IndexSection 
        title="Writing" 
        description="I write to clarify my thinking on topics that interest me."
      >
        <ListItem
          title="Quick Wins and Cleanups"
          description="Applying fundamentals of good design to fix design debt"
        />
        <ListItem
          title="To Write, Repeatedly"
          description="Why I’ve failed to write in the past, and what I’m doing differently now"
        />
      </IndexSection>
    </>
  )
}