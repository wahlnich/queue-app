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

  const savePlayerDataHandler = (enteredPlayerData) => {
    const playerData = {
      ...enteredPlayerData,
      id: Math.random().toString(),
    };
    setPlayers((prevPlayers) => {
      return [...prevPlayers, playerData];
    });
  };

  return (
    <div className="App">
      <NewPerson onAddPlayer={savePlayerDataHandler} />
      {players.map((inputPlayer, index) => (
        <Person player={inputPlayer} key={index} />
      ))}
    </div>
  );
}

export default App;
