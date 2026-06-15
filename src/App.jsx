import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const About = lazy(() => import("./components/About"));

const Skills = lazy(() => import("./components/Skills"));

const Projects = lazy(() => import("./components/Projects"));


const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Navbar />
       <Suspense fallback={<h2>Loading...</h2>}>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;