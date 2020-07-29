import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './AddDataForm.css';
import Config from '../../../../../../../../../Config';

import Context from '../../../../../../../../../Context';
import ValidationError from '../../../../../../../ValidationError/ValidationError';
import TokenService from '../../../../../../../../../Services/token-service';

export class AddDataForm extends Component {
  static contextType = Context;

  constructor(props){
    super(props);
    this.state ={
      data_name: {
        value: "",
        touched: false
      },
      data_description: {
        value: "",
        touched: false
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const { data_name, data_description } = this.state;

    const newData = {
      bestiary_id: this.props.match.params.bestiaryId,
      data_name: data_name.value,
      data_description: data_description.value
    };

    const ENDPOINT = Config.API_ENDPOINT;
    fetch(`${ENDPOINT}/data`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newData),
    })
      .then(res => {
        if (!res.ok){
          return res.json().then(e => Promise.reject(e));
        }

        return res.json();
      })
      .then(res => {
        this.context.addData(res);
        this.onSubmitSuccess();
      })
      .catch(error => {
        console.error(error);
      });
  }

  onSubmitSuccess = () => {
    const {history} = this.props;
    const destination = `/users/${TokenService.readJwtToken().user_id}/bestiaries/${this.props.match.params.bestiaryId}`;
    history.push(destination);
  }

  updateDataName(name){
    this.setState({
      data_name: {
        value: name,
        touched: true
      }
    });
  }
  updateDataDescription(description){
    this.setState({
      data_description: {
        value: description,
        touched: true
      }
    });
  }

  validateDataName(){
    const dataName = this.state.data_name.value.trim();
    const minLength = 5;

    if (dataName.length === 0){
      return 'Data Name is required';
    } else if (dataName.length < minLength){
      return `Data Name must be at least ${minLength} characters long`;
    }
  }
  validateDataDescription(){
    const dataDescription = this.state.data_description.value.trim();
    const minLength = 10;

    if (dataDescription.length === 0){
      return 'Description is required';
    } else if (dataDescription.length < minLength){
      return `Description must be at least ${minLength} characters in length`;
    }
  }

  render() {
    const thisBestiary = this.context.bestiaries.filter(b =>{
      return b.id === this.context.activeBestiaryID;
    })[0] || "";

    const nameError = this.validateDataName();
    const descriptionError = this.validateDataDescription();

    return (
      <form
        id="AddData-Form"
        onSubmit={e => this.handleSubmit(e)}
      >
        <fieldset>
          <legend>Add Data</legend>
          <p>Submit Data to fill up {thisBestiary.bestiary_name}</p>

          <br/>

          <label htmlFor="data-title">Data Title *</label>
          {this.state.data_name.touched && (
            <ValidationError message={nameError}>
              <div>
                Data Title meets requirements
              </div>
            </ValidationError>
          )}
          <input
            type="text"
            className="data-title"
            name="data-title"
            id="data-title"
            aria-required="true"
            aria-describedby="newDataTitle"
            aria-label="DataTitle"
            onChange={e => this.updateDataName(e.target.value)}
          />

          <label htmlFor="data-desc">Description *</label>
          {this.state.data_description.touched && (
            <ValidationError message={descriptionError}>
              <div>
                Data Description meets requirements
              </div>
            </ValidationError>
          )}
          <textarea
            type="text"
            className="data-desc"
            name="data-desc"
            id="data-desc"
            aria-required="true"
            aria-label="Description"
            aria-describedby="newDataDescription"
            onChange={e => this.updateDataDescription(e.target.value)}
          />
          
          <br/>
          <div className="navButtons">
            <Link
              to={TokenService.hasAuthToken() ? `/users/${this.context.user.id}/bestiaries/${this.props.match.params.bestiaryId}` : `/log-in`}
            >
              <button
                className="btn"
              >
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="btn"
              disabled={
                this.validateDataName() ||
                this.validateDataDescription()
              }
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default AddDataForm;