import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Ethgh from "./components/Ethgh.jsx";
import Stats from "./components/Stats.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Ethgh />
        <Stats />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
