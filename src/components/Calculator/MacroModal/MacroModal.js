import React from "react";
import "./MacroModal.css";

const MacroModal = () => {
  return (
    <div>
      <div className="modal_background" />
      <div className="modal">
        <form>
          <label>Gender:</label>
          <div>
            <input type="radio" name="gender" value="male" />
            <label>Male</label>
            <input type="radio" name="gender" value="female" />
            <label>Female</label>
          </div>
          Age:
          <input name="age" />
          <div>
            <label>Height:</label>
            <div>
              Feet: <input name="feet" />
              Inches: <input name="inches" />
            </div>
          </div>
          <div>
            <label>Weight:</label>
            <input name="weight" />
          </div>
          <label>Describe Your Normal Daily Activity</label>
          <div>
            <input type="radio" name="activity" value="1.2" />
            Sedentary - Desk Job
          </div>
          <div>
            <input type="radio" name="activity" value="1.375" />
            Lightly Active - Climb Stairs A Few Times Per Day
          </div>
          <div>
            <input type="radio" name="activity" value="1.55" />
            Moderately Active - Teacher, Salesman, Etc.
          </div>
          <div>
            <input type="radio" name="activity" value="1.725" />
            Very Active - Carpenter, Mailman, Etc.
          </div>
          <div>
            <input type="radio" name="activity" value="1.9" />
            Extremely Active - Soldier, Boxer, Etc.
          </div>
          <label>Goals</label>
          <div>
            <input type="radio" name="goal" value="loss" />
            Weight Loss
            <input type="radio" name="goal" value="gain" />
            Weight Gain
          </div>
          {/* CHANGE THIS TO REFLECT STATE; */}
          <div>
            Calorie Deficit:
            <select name="deficit">
              <option value=".2">20% Suggested</option>
              <option value=".25">25% Aggressive</option>
              <option value=".3">30% Intense</option>
            </select>
          </div>
          <div>
            Calorie Surplus:
            <select name="deficit">
              <option value=".2">20% Suggested</option>
              <option value=".25">25% Aggressive</option>
              <option value=".3">30% Intense</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MacroModal;
