import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import { creatorName } from "./components/Data";

function App() {
  return (
    <div className="App">
      <header className="App-header">MeloBeat</header>
      <p />
      <p />
      <div className="Player">
        <Player /> {/* right here !!! */}
      </div>

      <p />
      <p />
      <footer className="footer">
        <div className="creatorName" >{creatorName()}</div>
      </footer>
    </div>
  );
}

export default App;
