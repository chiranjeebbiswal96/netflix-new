import React from "react";
import Originals from "./originals.js";
import Action from "./Action";
import Comedy from "./Comedy";

function Home() {
  return (
    <>
      <Comedy />
      <Originals />
      <Action />
    </>
  );
}

export default Home;
