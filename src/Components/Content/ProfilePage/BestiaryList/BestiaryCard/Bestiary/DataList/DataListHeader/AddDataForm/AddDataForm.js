import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './AddDataForm.css'

export class AddDataForm extends Component {
  render() {
    return (
      <form id="AddData-Form">
        <fieldset>
          <legend>Add Data</legend>
          <p>Submit Data to fill up your Bestiary</p>

          <br/>

          <label htmlFor="data-title">Title:</label>
          <br/>
          <input
            type="text"
            name="data-title"
            id="data-title"
          />
          <br/>
          <label htmlFor="data-desc">Description:</label>
          <br/>
          <textarea
            name="data-desc"
            id="data-desc"
          />
          
          <br/>
          <br/>
          
          <Link
            to={"/users/:userId/bestiaries/:bestiaryId"}
          >
            <input
              type="submit"
              value="Submit"
              id="addData-button"
            />
          </Link>
          
        </fieldset>
      </form>
    )
  }
}

export default AddDataForm
