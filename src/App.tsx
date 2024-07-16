import { useSnapScroll } from "hooks/useSnapScroll.hook";
import { About, Hero } from "sections";
import Projects from "sections/projects/Projects";

const App = () => {
  useSnapScroll();

  return (
    <main id="main" className="h-screen w-screen font-dosis">
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default App;
