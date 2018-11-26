import React, { useState } from "react";
import "./Calculator.css";
import MacroModal from "./MacroModal/MacroModal";

const Calculator = () => {
  const userData = [];

  const [modalAppearance, setModal] = useState(false);

  const [users, setUser] = useState(userData);

  const addUser = user => {
    setUser([...users, user]);
    setModal(false);
  };

  console.log("user data", users);
  return (
    <div className="calculator">
      {modalAppearance === true ? <MacroModal addUser={addUser} /> : null}
      <div className="calculator_information">
        <h2>User's Metabolic Information and Suggested Calorie Intake</h2>
      </div>
    </div>
  );
};

export default Calculator;
