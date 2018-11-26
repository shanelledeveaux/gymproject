import React, { useState } from "react";
import "./MacroModal.css";

const MacroModal = props => {
  const initialFormState = {
    gender: "female",
    age: 0,
    feet: 0,
    inches: 0,
    weight: 0,
    activity: 1.2,
    goal: "loss"
  };

  const [user, setUser] = useState(initialFormState);

  const handleChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  console.log(user);
  return (
    <div>
      <div className="modal_background" />
      <div className="modal">
        Macro Calculator
        <div className="macro_calc_form">
          <div className="calc_section">
            <label>Gender</label>
            <div className="calc_choice">
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
                Male
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
                Female
              </div>
            </div>
          </div>
          <div>
            <input
              name="age"
              className="field_input"
              placeholder="Age"
              onChange={handleChange}
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
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="inches"
                  className="field_input"
                  placeholder="Inches"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <input
              name="weight"
              className="field_input"
              placeholder="Weight"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Describe Your Normal Daily Activity</label>
            <div>
              <input
                type="radio"
                name="activity"
                value="1.2"
                onChange={handleChange}
              />
              Sedentary - Desk Job
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="1.375"
                onChange={handleChange}
              />
              Lightly Active - Climb Stairs A Few Times Per Day
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="1.55"
                onChange={handleChange}
              />
              Moderately Active - Teacher, Salesman, Etc.
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="1.725"
                onChange={handleChange}
              />
              Very Active - Carpenter, Mailman, Etc.
            </div>
            <div>
              <input
                type="radio"
                name="activity"
                value="1.9"
                onChange={handleChange}
              />
              Extremely Active - Soldier, Boxer, Etc.
            </div>
          </div>
          <div className="calc_section">
            <label>Goals</label>
            <div className="calc_choice">
              <div>
                <input
                  type="radio"
                  name="goal"
                  value="loss"
                  onChange={handleChange}
                />
                Weight Loss
              </div>
              <div>
                <input
                  type="radio"
                  name="goal"
                  value="gain"
                  onChange={handleChange}
                />
                Weight Gain
              </div>
            </div>
          </div>
          {user.goal === "loss" ? (
            <div className="calc_section">
              Calorie Deficit:
              <div className="selectbox">
                <select name="deficit" onChange={handleChange}>
                  <option value=".2">20% Suggested</option>
                  <option value=".25">25% Aggressive</option>
                  <option value=".3">30% Intense</option>
                </select>
              </div>
            </div>
          ) : (
            <div className="calc_section">
              Calorie Surplus:
              <div className="selectbox" onChange={handleChange}>
                <select name="deficit">
                  <option value="1.2">20% Suggested</option>
                  <option value="1.25">25% Aggressive</option>
                  <option value="1.3">30% Intense</option>
                </select>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={event => {
            // event.preventDefault();
            // if (!user.age || !user.weight) return;

            props.addUser(user);
          }}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default MacroModal;
