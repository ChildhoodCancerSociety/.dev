import ProjectCarousel from "@/components/ProjectCarousel";
import Header from "@/structure/header";
import Section from "@/structure/section";
import { getMembers, getRepos } from "@/utils/github";

const trackedRepoNames = [
  "ANNIVerse",
  "ccs-web-static",
  "wiki",
  "theming"
];

export default async function Home() {
  const { data } = await getRepos();
  const { data: asdf } = await getMembers();
  console.log(asdf);
  const [matchingRepos, otherRepos] = data.reduce(([matching, other]: [any[], any[]], repo: any) => {
    if(trackedRepoNames.includes(repo.name)) {
      matching.push(repo);
    } else {
      other.push(repo);
    }
    return [matching, other];
  }, [[], []] as [any[], any[]]);

  const projects = matchingRepos.map(({ name, id, full_name, html_url, description, pushed_at }: any) => ({
    name, description, pushed_at, id, full_name, html_url
  }));

  return (<>
    <Header />
    <main className="mx-2 my-8">
      <Section>
        <code>
          {JSON.stringify(data, null, 2)}
        </code>
      </Section>
      <Section>
        <ProjectCarousel projects={projects} />
      </Section>
      <Section title="Our Team"></Section>
      <Section titleComponent={<h2>Volunteer <span>JOIN US</span></h2>}></Section>
      <Section title="Other Resources"></Section>
    </main>
    <footer></footer>
  </>);
}
