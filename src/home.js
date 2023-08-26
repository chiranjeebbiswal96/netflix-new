import React from "react";
import Originals from "./originals.js";
import Action from "./Action";
import Comedy from "./Comedy";
import Movies from "./Movies";
import Tvshows from "./tv";

function Home() {
  return (
    <>
      <Movies />
      <Tvshows />
      <Comedy />
      <Originals />
      <Action />
    </>
  );
}

export default Home;
