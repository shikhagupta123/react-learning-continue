import React from "react";
import { add, multiply, subtract, divide } from "./calculation";

function Calculations() {
  var a = 2;
  var b = 3;
  return (
    <ul>
      <li>
        {a} + {b} = {add(a, b)}
      </li>
      <li>
        {a} * {b} = {multiply(a, b)}
      </li>
      <li>
        {a} - {b} = {subtract(a, b)}
      </li>
      <li>
        {a} / {b} = {divide(a, b)}
      </li>
    </ul>
  );
}
export default Calculations;
