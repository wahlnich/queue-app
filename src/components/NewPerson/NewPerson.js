import React, {useState} from "react";
import "./NewPerson.css";
import Card from "../UI/Card";
import NewPersonCheckboxes from "./NewPersonCheckboxes";

function NewPerson(props) {
  return (
    <Card className="newperson">
      <form className="input-form">
        <label>Player Name: </label>
        <input type="text"></input>
        <br />
        <NewPersonCheckboxes />
      </form>
    </Card>
  );
}

export default NewPerson;
