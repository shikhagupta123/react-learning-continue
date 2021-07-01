import React from "react";

function Greeting() {
  var date = new Date();
  var gt = date.getHours();
  var k = "";
  const cstyl = {
    color: ""
  };
  if (gt < 12) {
    k = "Good Morning";
    cstyl.color = "red";
  } else if (gt <= 18) {
    k = "Good Afternoon";
    cstyl.color = "green";
  } else {
    k = "Good Night";
    cstyl.color = "blue";
  }
  return (
    <h1 className="greeting" style={cstyl}>
      {k}
    </h1>
  );
}

export default Greeting;
