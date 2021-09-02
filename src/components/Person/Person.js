import React from "react";
import Card from "../UI/Card";
import "./Person.css";

function Person(props) {
  const roleArray = props.player.roles;
  const key = props.id;
  let roleString = "";

  roleArray.forEach((role) => {
    roleString += `${role} `;
  });

  return (
    <Card key={key} className="person">
      <div>
        <h3>Player: {props.player.name}</h3>
      </div>
      <div>
        <h4>Roles: {roleString} </h4>
      </div>
    </Card>
  );
}

export default Person;
