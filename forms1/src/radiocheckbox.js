import React, { Component } from "react";
import style from "./index.css";

class Form2 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <hr />
        <ul>
          <ul>
            <li>Can you breathe underwater longer than 1 minute?</li>
          </ul>
          <li>
            Yes
            <input id="" name="" type="radio" checked="" onChange="" />
          </li>
          <li>
            No
            <input id="" name="" type="radio" checked="" onChange="" />
          </li>
          <ul> What is your marital status? </ul>
          <input type="radio" name="" checked="" onChange="" />
          Married
          <input type="radio" name="" checked="" onChange="" />
          Unmarried
          <ul>
            When you are in a stressful or difficult situation, how do you most
            frequently react?
          </ul>
          <input type="radio" name="" checked="" onChange="" />
          Defeat: I stop confronting the situation.
          <input type="radio" name="" checked="" onChange="" />
          Anger: I become upset at the situation.
          <input type="radio" name="" checked="" onChange="" />
          Resourcefulness: I seek help to confront the situation.
          <input type="radio" name="" checked="" onChange="" />
          Determination: I continue to confront the situation.
          <ul> Are you claustrophobic? </ul>
          <input type="radio" name="" checked="" onChange="" />
          Yes
          <input type="radio" name="" checked="" onChange="" />
          No
          <input type="radio" name="" checked="" onChange="" />
          IDK.
          <ul>Does your family have a history of (check all that apply):</ul>
          Cancer
          <input type="checkbox" name="" checked="" onChange="" />
          Heart Disease
          <input type="checkbox" name="" checked="" onChange="" />
          Diabetes
          <input type="checkbox" name="" checked="" onChange="" />
          <ul>Do you have any ulving (check all that apply):</ul>
          Sibulngs?
          <input type="checkbox" name="" checked="" onChange="" />
          Parents?
          <input type="checkbox" name="" checked="" onChange="" />
          Grandparents?
          <input type="checkbox" name="" checked="" onChange="" />
          <ul>Check all educational credentials you have received:</ul>
          High school diploma or GED equivalent
          <input type="checkbox" name="" checked="" onChange="" />
          Associate's Degree
          <input type="checkbox" name="" checked="" onChange="" />
          Bachelor's Degree
          <input type="checkbox" name="" checked="" onChange="" />
          Master's Degree
          <input type="checkbox" name="" checked="" onChange="" />
          PhD
          <input type="checkbox" name="" checked="" onChange="" />
          Other:
        </ul>
      </div>
    );
  }
}

export default Form2;
