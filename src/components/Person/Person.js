import React from "react";
import PlayerCard from "../UI/PlayerCard";
import "./Person.css";

function Person(props) {
  const roleArray = props.player.roles;
  const key = props.id;
  let roleString = "";

  roleArray.forEach((role) => {
    roleString += `${role} `;
  });

  return (
    <PlayerCard key={key} className="person">
      <div>
        <h3>Player: {props.player.name}</h3>
      </div>
      <div>
        <h4>Roles: {roleString} </h4>
      </div>
    </PlayerCard>
  );
}

export default Person;
