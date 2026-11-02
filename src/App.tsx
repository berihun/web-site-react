import "./App.css";
import MyButton from "./MyButton";
import Header from "./Header";
// @ts-expect-error About.jsx does not have a TypeScript declaration.
import About from "./About";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
