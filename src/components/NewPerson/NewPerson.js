import React, {useState} from "react";
import "./NewPerson.css";
import Card from "../UI/Card";

function NewPerson(props) {
  /* State handlers for all buttons + text input */
  const [enteredName, setEnteredName] = useState("");
  const [enteredCtrl, setEnteredCtrl] = useState("");
  const [enteredSen, setEnteredSen] = useState("");
  const [enteredDuel, setEnteredDuel] = useState("");
  const [enteredInit, setEnteredInit] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ctrlChangeHandler = (e) => setEnteredCtrl(e.target.value);
  const senChangeHandler = (e) => setEnteredSen(e.target.value);
  const duelChangeHandler = (e) => setEnteredDuel(e.target.value);
  const initChangeHandler = (e) => setEnteredInit(e.target.value);

  // Validate data
  const validationHandler = () => {
    // Text input must exist
    if (!enteredName) {
      alert("Please enter the player's name!");
      return false;
    }
    // at least one role must be chosen
    if (!enteredCtrl && !enteredSen && !enteredDuel && !enteredInit) {
      alert("You must choose at least one role!");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validationHandler()) return;

    const playerData = {
      name: enteredName,
      roles: [enteredCtrl, enteredSen, enteredDuel, enteredInit],
    };

    props.onAddPlayer(playerData);

    setEnteredName("");
    setEnteredCtrl("");
    setEnteredSen("");
    setEnteredDuel("");
    setEnteredInit("");

    document.querySelector("#nameBox").value = "";
    document.querySelector("#ctrl").checked = false;
    document.querySelector("#sen").checked = false;
    document.querySelector("#duel").checked = false;
    document.querySelector("#init").checked = false;
  };

  return (
    <Card className="newperson">
      <form onSubmit={submitHandler} className="input-form">
        <label>Player Name: </label>
        <input id="nameBox" onChange={nameChangeHandler} type="text"></input>
        <br />
        <div className="checkboxes">
          <label>Player Roles: </label>
          <input
            onChange={ctrlChangeHandler}
            id="ctrl"
            type="checkbox"
            value="Controller"
          />
          <label htmlFor="ctrl">Controller</label>
          <input
            onChange={senChangeHandler}
            id="sen"
            type="checkbox"
            value="Sentinel"
          />
          <label htmlFor="sen">Sentinel</label>
          <input
            onChange={duelChangeHandler}
            id="duel"
            type="checkbox"
            value="Duelist"
          />
          <label htmlFor="duel">Duelist</label>
          <input
            onChange={initChangeHandler}
            id="init"
            type="checkbox"
            value="Initiator"
          />
          <label htmlFor="init">Initiator</label>
          <button type="submit">Add Player</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPerson;
