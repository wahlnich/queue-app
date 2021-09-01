import React from "react";
import "./NewPerson.css";
import Card from "../UI/Card";

function NewPerson(props) {
  return (
    <Card className="newperson">
      <form className="input-form">
        <label>Player Name: </label>
        <input type="text"></input>
        <br />
        <div className="checkboxes">
          <label>Player Roles: </label>
          <input id="ctrl" type="checkbox" value="Controller" />
          <label htmlFor="ctrl">Controller</label>
          <input id="sen" type="checkbox" value="Sentinel" />
          <label htmlFor="sen">Sentinel</label>
          <input id="duel" type="checkbox" value="Duelist" />
          <label htmlFor="duel">Duelist</label>
          <input id="init" type="checkbox" value="Initiator" />
          <label htmlFor="init">Initiator</label>
        </div>
      </form>
    </Card>
  );
}

export default NewPerson;
