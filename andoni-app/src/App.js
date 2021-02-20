import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
