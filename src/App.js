import "./App.css";
import Person from "./components/Person/Person";
import NewPerson from "./components/NewPerson/NewPerson";

function App() {
  return (
    <div className="App">
      <NewPerson />
      <Person />
    </div>
  );
}

export default App;
