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
  const person = {
    name: "John Down",
    age: 30,
    isMember: true,
  };

  //lets destructure the person object
  //without destructuring, usin Dot notation
  // const name = person.name;
  // const age = person.age;
  // const isMember = person.isMember;

  //with destructuring
  const { name, age, isMember } = person;
  const hobbies = ["reading", "swimming", "coding"];
  const hobbies1 = ["watching TV", "Playing Games", "Music"];

  const handleHobbyClick = (hobby) => {
    alert(`you  clicked on hobby: ${hobby}`);
  };

  const johnProfile = {
    name: "John Down",
    age: 30,
    isMember: true,
    hobbies: ["reading", "swimming", "coding"],
    onHobbyClick: handleHobbyClick,
  };

  const aliceProfile = {
    name: "Alice Smith",
    age: 25,
    isMember: false,
    hobbies: ["watching TV", "Playing Games", "Hokien"],
    onHobbyClick: handleHobbyClick,
  };
  return (
    <div className="App">
      <ProfileCard {...johnProfile} />
      <ProfileCard {...aliceProfile} />
      {/* <ProfileCard
        name={name}
        age={age}
        isMember={isMember}
        hobbies={hobbies}
        onHobbyClick={handleHobbyClick}
      />
      <ProfileCard
        name={name}
        age={age}
        isMember={isMember}
        hobbies={hobbies1}
        onHobbyClick={handleHobbyClick}
      /> */}
    </div>
  );
}

export default App;
