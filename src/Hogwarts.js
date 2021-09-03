import React from "react";
import whoseHouse from "./houses/whoseHouse";
import Hufflepuff from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";

function Hogwarts() {
  whoseHouse(); // => "HAGRID'S HOUSE!"

  return (
    <div>
      <Hufflepuff />
    </div>
  );
}

console.log(GryffFunctions.colors);


GryffFunctions.gryffMascot();

GryffFunctions.values(); 

export default Hogwarts;