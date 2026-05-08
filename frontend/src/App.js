import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const Home = () => {
  useEffect(() => {
    const setTitle = () => {
      document.title = "Vigneshwaran Balasubramanian — Technical Manager, Test Data Management";
    };
    setTitle();
    // Re-assert after the emergent script runs (it overrides on load)
    const t1 = setTimeout(setTitle, 250);
    const t2 = setTimeout(setTitle, 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <main data-testid="home-main" className="bg-[#FAFAFA] text-[#111] antialiased">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
