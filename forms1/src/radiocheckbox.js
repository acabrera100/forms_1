import React, { Component } from "react";
import style from "./index.css";

class Form2 extends Component {
  constructor() {
    super();
    this.state = {
      breathe_underwater: "",
      marital_status: "",
      stress_reaction: "",
      claustrophobic: "",
      famiily_history: {
        Cancer: false,
        HeartDisease: false
      },
      living_siblings: "",
      education: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckboxChange = event => {
    if (event.target.id) {
      debugger;
      let newState = this.state[event.target.name];

      newState[event.target.id] = event.target.checked;

      this.setState({
        [event.target.name]: newState
      });
    } else {
      this.setState({
        [event.target.name]: event.target.checked
      });
    }
  };

  render() {
    console.log(this.state);

    return (
      <>
        <hr />
        <form onChange={this.handleChange}>
          Can you breathe underwater?
          <label htmlFor="breathe_underwater"> Yes </label>
          <input
            type="radio"
            name="breathe_underwater"
            value="yes"
            checked={this.state.breathe_underwater === "yes"}
            id="yes"
          />
          <label htmlFor="breathe_underwater"> No </label>
          <input
            type="radio"
            name="breathe_underwater"
            value="no"
            checked={this.state.breathe_underwater === "no"}
            id="no"
          />
          <br />
          <br />
          What is your Marital Status?
          <label htmlFor="marital_status"> married </label>
          <input
            type="radio"
            name="marital_status"
            value="married"
            checked={this.state.marital_status === "married"}
            id="married"
          />
          <label htmlFor="marital_status"> unmarried </label>
          <input
            type="radio"
            name="marital_status"
            value="unmarried"
            checked={this.state.marital_status === "unmarried"}
            id="unmarried"
          />
          <br />
          <br />
          When you are in a stressful or difficult situation, how do you most
          frequently react?
          <br />
          <label htmlFor="stress_reaction">
            {" "}
            Defeat: I stop confronting the situation.{" "}
          </label>
          <input
            type="radio"
            name="stress_reaction"
            value="Defeat: I stop confronting the situation."
            checked={
              this.state.stress_reaction ===
              "Defeat: I stop confronting the situation."
            }
            id="married"
          />
          <br />
          <label htmlFor="stress_reaction">
            {" "}
            Anger: I become upset at the situation.{" "}
          </label>
          <input
            type="radio"
            name="stress_reaction"
            value="  Anger: I become upset at the situation."
            checked={
              this.state.stress_reaction ===
              "  Anger: I become upset at the situation."
            }
            id="  Anger: I become upset at the situation."
          />
          <br />
          <label htmlFor="stress_reaction">
            {" "}
            Resourcefulness: I seek help to confront the situation.{" "}
          </label>
          <input
            type="radio"
            name="stress_reaction"
            value="Resourcefulness: I seek help to confront the situation."
            checked={
              this.state.stress_reaction ===
              "Resourcefulness: I seek help to confront the situation."
            }
            id="Resourcefulness: I seek help to confront the situation."
          />
          <br />
          <label htmlFor="stress_reaction">
            {" "}
            Determination: I continue to confront the situation.{" "}
          </label>
          <input
            type="radio"
            name="stress_reaction"
            value="Determination: I continue to confront the situation."
            checked={
              this.state.stress_reaction ===
              "Determination: I continue to confront the situation."
            }
            id="Determination: I continue to confront the situation."
          />
          <br />
          <br />
          Are you claustrophobic?
          <label htmlFor="claustrophobic"> Yes </label>
          <input
            type="radio"
            name="claustrophobic"
            value="yes"
            checked={this.state.claustrophobic === "yes"}
            id="yes"
          />
          <label htmlFor="claustrophobic"> No </label>
          <input
            type="radio"
            name="claustrophobic"
            value="no"
            checked={this.state.claustrophobic === "no"}
            id="no"
          />
          <label htmlFor="claustrophobic"> I don't know </label>
          <input
            type="radio"
            name="claustrophobic"
            value="I don't know"
            checked={this.state.claustrophobic === "I don't know"}
            id="I don't know"
          />
          <br />
          <br />
          Does your family have a history of (check all that apply)
          <label htmlFor="Cancer"> Cancer </label>
          <input
            type="checkbox"
            name="Cancer"
            value="Cancer"
            checked={this.state.famiily_history.Cancer === "Cancer"}
            id="Cancer"
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="HeartDisease"> HeartDisease </label>
          <input
            type="checkbox"
            name="HeartDisease"
            value="HeartDisease"
            checked={this.state.famiily_history.HeartDisease === "HeartDisease"}
            id="HeartDisease"
            onChange={this.handleCheckboxChange}
          />
        </form>
      </>
    );
  }
}

export default Form2;
