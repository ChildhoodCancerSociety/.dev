import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {

  return (<>
    <header className="sticky bg-froggy-100 dark:bg-froggy-900 px-8 py-4 flex flex-row min-w-full items-center">
      <div className="nav-item">LOGO</div>
      <div className="nav-item nav-status"><div className="text-lg">M:&nbsp;</div>
        <span>asdfasdfasdf</span>
      </div>
    </header>
    <main className="mx-2 my-8">
      <section>
        <h2>Projects</h2>
        <ProjectCarousel />
      </section>
      <h2>Our Team</h2>
      <section></section>
      <h2>Volunteer <span>JOIN US</span></h2>
      <section></section>
      <h2>Other Resources</h2>
      <section></section>
    </main>
    <footer></footer>
  </>);
}
