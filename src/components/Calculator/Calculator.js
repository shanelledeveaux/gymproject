import React, { useState } from "react";
import MacroModal from "./MacroModal/MacroModal";

const Calculator = () => {
  const initialState = { modal: true };

  const [modalAppearance] = useState(initialState);

  return (
    <div>
      Calculator
      {modalAppearance.modal === true ? <MacroModal /> : null}
    </div>
  );
};

export default Calculator;
