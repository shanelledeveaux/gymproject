import React from "react";
import "./MacroModal.css";

const MacroModal = () => {
  return (
    <div>
      <div className="modal_background" />
      <div className="modal">
        Form
        <form>
          <div className="macro_calc_form">
            <div className="calc_section">
              <label>Gender</label>
              <div className="calc_choice">
                <div>
                  <input type="radio" name="gender" value="male" />
                  Male
                </div>
                <div>
                  <input type="radio" name="gender" value="female" />
                  Female
                </div>
              </div>
            </div>
            <div>
              <input
                name="age"
                className="field_input"
                placeholder="Age"
                required
              />
            </div>
            <div className="calc_section">
              <label>Height</label>
              <div className="calc_choice">
                <div>
                  <input
                    name="feet"
                    className="field_input"
                    placeholder="Feet"
                  />
                </div>
                <div>
                  <input
                    name="inches"
                    className="field_input"
                    placeholder="Inches"
                  />
                </div>
              </div>
            </div>
            <div>
              <input
                name="weight"
                className="field_input"
                placeholder="Weight"
              />
            </div>
            <div>
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
            </div>
            <div className="calc_section">
              <label>Goals</label>
              <div className="calc_choice">
                <div>
                  <input type="radio" name="goal" value="loss" />
                  Weight Loss
                </div>
                <div>
                  <input type="radio" name="goal" value="gain" />
                  Weight Gain
                </div>
              </div>
            </div>
            {/* CHANGE THIS TO REFLECT STATE; */}
            <div className="calc_section">
              Calorie Deficit:
              <div className="selectbox">
                <select name="deficit">
                  <option value=".2">20% Suggested</option>
                  <option value=".25">25% Aggressive</option>
                  <option value=".3">30% Intense</option>
                </select>
              </div>
            </div>
            <div className="calc_section">
              Calorie Surplus:
              <div className="selectbox">
                <select name="deficit">
                  <option value=".2">20% Suggested</option>
                  <option value=".25">25% Aggressive</option>
                  <option value=".3">30% Intense</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MacroModal;
