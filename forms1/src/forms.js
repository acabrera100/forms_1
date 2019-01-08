import React, { Component } from "react";
let countries = require("./countries.json");

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      favorite: "",
      why: "",
      country: "",
      formSubmitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  populate = () => {
    return countries.map(country => (
      <option value={country.name}> {country.name} </option>
    ));
  };

  checkForm = () => {
    // let {email, favorite, why, country, formSubmitted}= this.state;
    //
    // if(!email=== undefined && !favorite === undefined && ) {
    //
    // }
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <div class = 'image'>
          <img className="nasa" src={"https://seeklogo.com/images/N/NASA-logo-9411797223-seeklogo.com.png"} alt =""/>
        </div>

        <div class="form">
          <h1> Mission to Mars Registration Form </h1>

          <form onChange={this.handleChange}>
            <label class="text" htmlFor="name">
              {" "}
              What is your name ?{" "}
            </label>

            <input
              onChange={this.handleChange}
              type="text"
              placeholder="A name"
              name="name"
              value={this.state.name}
              id="name"
            />
            <br />
            <br />

            <label class="text" htmlFor="birthday">
              {" "}
              What is your date of birth ?{" "}
            </label>

            <input
              type="date"
              id="start"
              name="trip-start"
              min="1900-01-01"
              max="2019-01-07"
            />

            <br />
            <br />

            <label class="text" htmlFor="email">
              {" "}
              Email{" "}
            </label>

            <input
              onChange={this.handleChange}
              type="text"
              placeholder="A email"
              name="email"
              value={this.state.email}
              id="email"
            />

            <select id="favorite" name="favorite" value={this.state.favorite}>
              <option value="omnivore"> Omnivore </option>
              <option value="vegetarian"> Vegetarian </option>
              <option value="vegan"> Vegan </option>
            </select>

            <br />
            <br />

            <div id="country">
              <label class="text" htmlFor="country">
                {" "}
                What is your country of origin?
              </label>

              <select
                placeholder="Select Country"
                name="country"
                value={this.state.country}
                id="country"
              >
                {this.populate()}
              </select>
            </div>

            <br />

            <div id="whytext">
              <label class="text" htmlFor="why">
                Why do you want to be a Mars explorer?
              </label>
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Enter Text Here"
                name="why"
                value={this.state.why}
                id="why"
              />
            </div>
          </form>

          <br />

          <div id="submit">
            <button>Submit</button>
          </div>

        </div>
      </>
    );
  }
}

export default Form;
