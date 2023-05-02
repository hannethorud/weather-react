import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        <a href="https://github.com/hannethorud/weather-react" class="">
          Open-source code
        </a>{" "}
        by Hanne S. Thorud
      </p>
    </div>
  );
}

export default App;
