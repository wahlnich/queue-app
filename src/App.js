import React, {useState} from "react";
import "./App.css";
import Person from "./components/Person/Person";
import NewPerson from "./components/NewPerson/NewPerson";

const INIT_PLAYERS = [
  {
    name: "Nick",
    roles: ["Controller", "Sentinel"],
  },
  {
    name: "Red",
    roles: ["Initiator"],
  },
  {
    name: "Dummy",
    roles: ["Duelist"],
  },
];

function App() {
  const [players, setPlayers] = useState(INIT_PLAYERS);

  const addPlayerHandler = (player) => {
    setPlayers((prevPlayers) => {
      return [player, ...prevPlayers];
    });
  };

  return (
    <div className="App">
      <NewPerson onAddPlayer={addPlayerHandler} />
      {players.map((inputPlayer) => (
        <Person player={inputPlayer} />
      ))}
    </div>
  );
}

export default App;
