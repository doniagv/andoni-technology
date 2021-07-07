import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SkillSection from "./components/SkillSection/SkillSection";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Hero />
      <About />
      <SkillSection />
      <Contact />
    </div>
  );
}

export default App;
