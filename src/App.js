import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <img
          src={`${process.env.PUBLIC_URL}/assets/yui.webp`}
          alt="Coming Soon"
          className="coming-soon-gif"
        />
        <h1 className="coming-soon-text">Coming Soon</h1>
      </div>
    </div>
  );
}

export default App;
