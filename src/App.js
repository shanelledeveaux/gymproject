import React from "react";
import "./App.css";
import routes from "./routes";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      {routes}
    </div>
  );
};

export default App;
