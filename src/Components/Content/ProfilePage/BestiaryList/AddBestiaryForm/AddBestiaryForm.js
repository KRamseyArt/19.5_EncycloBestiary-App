import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './AddBestiaryForm.css'
import Context from '../../../../../Context'

export class AddBestiaryForm extends Component {
  static contextType = Context;

  constructor(props){
    super(props);
    this.state = {
      user_id:{
        value: ""
      },
      bestiary_name: {
        value: "",
        touched: false
      },
      bestiary_description: {
        value: "",
        touched: false
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { bestiary_name, bestiary_description } = this.state;
    const user_id = 1;

    const newBestiary = { user_id, bestiary_name, bestiary_description };
    this.context.addBestiary(newBestiary);
  }

  updateBestiaryName(name){
    this.setState({
      bestiary_name: {
        value: name,
        touched: true
      }
    });
  }
  updateBestiaryDescription(description){
    this.setState({
      bestiary_description: {
        value: description,
        touched: true
      }
    })
  }

  render() {
    return (
      <form
        id="AddBestiary-Form"
        onSubmit={e => this.handleSubmit(e)}
      >
        <fieldset>
          <legend>Add Bestiary</legend>
          <p>Provide a Name and short Description for this Bestiary:</p>

          <br/>

          <label htmlFor="bestiary-name">Bestiary Name:</label>
          <br/>
          <input
            type="text"
            name="bestiary-name"
            id="bestiary-name"
          />
          <br/>
          <label htmlFor="bestiary-desc">Description:</label>
          <br/>
          <textarea
            name="bestiary-desc"
            id="bestiary-desc"
          />
          
          <br/>
          <br/>

          <Link
            to={"/users/:userId"}
          >
            <input
              type="submit"
              value="Submit"
              id="signup-button"
            />
          </Link>
          
        </fieldset>
      </form>
    )
  }
}

export default AddBestiaryForm
