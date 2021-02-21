import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SkillSection from "./components/SkillSection/SkillSection";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Hero />
      <About />
      <SkillSection />
    </div>
  );
}

export default App;
