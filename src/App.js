import React from "react";
import Heading from "./component/Heading";
import List from "./component/List";
import Greeting from "./component/Greeting";
import Calculations from "./component/calculation-result";

export default function App() {
  return (
    <div>
      <Heading />
      <List />
      <Greeting />
      {/* ES6 import export */}
      <Calculations />
    </div>
  );
}
