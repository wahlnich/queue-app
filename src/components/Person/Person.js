import React from "react";
import Card from "../UI/Card";

import "./Person.css";

function Person(props) {
  return (
    <Card>
      <div>
        <div>
          <h3>Player: Nick Wahl</h3>
        </div>
        <div>
          <h4>Roles: </h4>
        </div>
      </div>
    </Card>
  );
}

export default Person;
