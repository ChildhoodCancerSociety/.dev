import ProjectCarousel from "@/components/ProjectCarousel";
import Header from "@/structure/header";
import Section from "@/structure/section";

export default function Home() {

  return (<>
    <Header />
    <main className="mx-2 my-8">
      <Section>
        <ProjectCarousel />
      </Section>
      <Section title="Our Team"></Section>
      <Section titleComponent={<h2>Volunteer <span>JOIN US</span></h2>}></Section>
      <Section title="Other Resources"></Section>
    </main>
    <footer></footer>
  </>);
}
