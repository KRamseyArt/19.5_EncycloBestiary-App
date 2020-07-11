import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './AddBestiaryForm.css'
import Config from '../../../../../Config'

import Context from '../../../../../Context'
import ValidationError from '../../../ValidationError/ValidationError'
import TokenService from '../../../../../Services/token-service'

export class AddBestiaryForm extends Component {
  static contextType = Context;

  constructor(props){
    super(props);
    this.state = {
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

    const newBestiary = { bestiary_name: bestiary_name.value, bestiary_description: bestiary_description.value };

    const ENDPOINT = Config.API_ENDPOINT;
    fetch (`${ENDPOINT}/bestiaries`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newBestiary),
    })
      .then(res => {
        if (!res.ok){
          return res.json().then(e => Promise.reject(e))
        }

        return res.json()
      })
      .then(res => {
        this.context.addBestiary(res);
      })
      .catch(error => {
        console.error(error)
      })
    
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

  validateBestiaryName() {
    const bestiaryName = this.state.bestiary_name.value.trim();
    const minLength = 5;

    if (bestiaryName.length === 0){
      return 'Bestiary Name is required';
    } else if (bestiaryName.length < minLength){
      return `Bestiary Name must be at least ${minLength} characters long`
    }
  }

  validateBestiaryDescription(){
    const bestiaryDescription = this.state.bestiary_description.value.trim();
    const minLength = 10;

    if (bestiaryDescription.length === 0){
      return 'Description is required';
    } else if (bestiaryDescription.length < minLength){
      return `Description must be at least ${minLength} characters in length`
    }
  }

  render() {
    const nameError = this.validateBestiaryName();
    const descriptionError = this.validateBestiaryDescription();

    return (
      <form
        id="AddBestiary-Form"
        onSubmit={e => this.handleSubmit(e)}
      >
        <fieldset>
          <legend>Add Bestiary</legend>
          <p>Provide a Name and short Description for this Bestiary:</p>

          <br/>

          <label htmlFor="bestiary-name">Bestiary Name *</label>
          {this.state.bestiary_name.touched && (
            <ValidationError message={nameError}>
              <div>
                Bestiary Name meets requirements
              </div>
            </ValidationError>
          )}
          <input
            type="text"
            className="bestiary-name"
            name="bestiary-name"
            id="bestiary-name"
            aria-required="true"
            aria-describedby="newBestiaryName"
            aria-label="BestiaryName"
            onChange={e => this.updateBestiaryName(e.target.value)}
          />
          
          
          <label htmlFor="bestiary-desc">Description *</label>
          {this.state.bestiary_description.touched && (
            <ValidationError message={descriptionError}>
              <div>
                Bestiary Description meets requirements
              </div>
            </ValidationError>
          )}
          <textarea
            type="text"
            className="bestiary-desc"
            name="bestiary-desc"
            id="bestiary-desc"
            aria-required="true"
            aria-label="Description"
            aria-describedby="newBestiaryDescription"
            onChange={e => this.updateBestiaryDescription(e.target.value)}
          />
          
          
          <br/>
          <div className="navButtons">
            <Link
              to={`/users/${this.context.user.id}`}
            >
              <button
                className="btn"
              >
                Back
              </button>
            </Link>
            <input
              type="submit"
              value="Submit"
              className="btn"
            />
          </div>
        </fieldset>
      </form>
    )
  }
}

export default AddBestiaryForm
