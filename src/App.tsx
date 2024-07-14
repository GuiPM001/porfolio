import { useSnapScroll } from "hooks/useSnapScroll.hook";
import { About, Hero } from "sections";

const App = () => {
  useSnapScroll();

  return (
    <main id="main" className="h-screen w-screen font-dosis">
      <Hero />

      <About />

      <div id="section3" className="relative h-screen bg-green-200 flex justify-center items-center text-black">
        <p>ISSO É UM TESTE</p>
      </div>
    </main>
  );
};

export default App;
