import React, { Component } from "react";
import "./index.css";
import Form2 from "./radiocheckbox.js";
let countries = require("./countries.json");

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      diet: "",
      exploreQuestion: "",
      country: "",
      breathe:"",
      formSubmitted: false,
      message: "",

    };
    this.handleChange = this.handleChange.bind(this);
  }

  populate = () => {
    return countries.map(country => (
      <option key={country.name} value={country.name}>
        {" "}
        {country.name}{" "}
      </option>
    ));
  };

  handleSubmitted = e => {
    e.preventDefault();
    const { formSubmitted, message } = this.state;
    this.setState({
      formSubmitted: true
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { message, name, email, diet, exploreQuestion, country,breathe } = this.state;

    if (name && email && diet && exploreQuestion && country && breathe) {
      this.setState({
        completed: true,
        message: (
          <div>
            <p>You name is {name}</p>
            <p>Your email is {email}</p>
            <p>You diet consists of {diet}</p>
            <p>You wan to go to mars because...{exploreQuestion}</p>
            <p>You originate from {country}</p>
            <p> You can breathe underwater {breathe} </p>
            <button onClick={this.handleSubmitted}>Submit</button>
          </div>
        )
      });
    } else {
      this.setState({
        message: "Please complete the form."
      });
    }
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <h1> Mission to Mars Registration Form </h1>
        {this.state.formSubmitted ? (
          <p>Thank You for your Application, please begin your celibacy now</p>
        ) : (
          <form onChange={this.handleChange}>
            <label htmlFor="name"> What is your name? </label>

            <input
              onChange={this.handleChange}
              type="text"
              placeholder="A name"
              name="name"
              value={this.state.name}
              id="name"
            />

            <br />
            <label htmlFor="birthday"> What is your date of birth ? </label>

            <input
              type="date"
              id="start"
              name="dob"
              min="1900-01-01"
              max="2019-01-07"
            />

            <br />
            <label htmlFor="email"> Email </label>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="A email"
              name="email"
              value={this.state.email}
              id="email"
            />

            <br />
            <br />

            <div id="food">
              <label htmlFor="food">Choose a Food type</label>
              <select
                onChange={this.handleChange}
                name="diet"
                value={this.state.diet}
              >
                <option value="omnivore"> Omnivore </option>
                <option value="vegetarian"> Vegetarian </option>
                <option value="vegan"> Vegan </option>
              </select>
            </div>

            <br />

            <div id="country">
              <label htmlFor="country"> What is your country of origin?</label>
              <select
                onChange={this.handleChange}
                placeholder="Select Country"
                name="country"
                value={this.state.country}
              >
                {this.populate()}
              </select>
            </div>

            <div id="exploreQuestiontext">
              <label htmlFor="exploreQuestion">
                Why do you want to be a Mars explorer?
              </label>
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Why doe"
                name="exploreQuestion"
                value={this.state.exploreQuestion}
                id="exploreQuestion"
              />
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
            {this.state.message}
          </form>
        )}
      </>
    );
  }
}

export default Form;
