import "./App.css";
import MyButton from "./MyButton";
import Header from "./Header";
// @ts-expect-error About.jsx does not have a TypeScript declaration.
import About from "./About";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import Footer from "./Footer";
import ProfileCard from "./ProfileCard";

function App() {
  const name = "John Doe";
  const name1 = "Jane Smith";

  return (
    <div className="App">
      <Header />
      <About />
      <ProjectList />
      <Contact />
      <ProfileCard name={name} />
      <ProfileCard name={name1} />
      <Footer />
    </div>
  );
}

export default App;
