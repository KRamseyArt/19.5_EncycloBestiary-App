import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './AddBestiaryForm.css'

export class AddBestiaryForm extends Component {
  state = {
    dataFields: [1,2,3,4,5]
  }
  
  addDataField(e) {
    e.preventDefault();

    console.log(e.target);
  }

  render() {
    const dataFields = this.state.dataFields.map(dataField => {
      return (
        <p>{dataField}</p>
      )
    })

    return (
      <form id="AddBestiary-Form">
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
{/*           
          <form
            onSubmit={this.addDataField}
            >
              <label htmlFor="dataField">Add New Data Field:</label>
              <br/>
              <select id="dataField" name="dataField">
                <option value="short-text">Short Text</option>
                <option value="long-text">Long Text</option>
                <option value="number-solid">Number (Solid)</option>
                <option value="number-range">Number (Range)</option>
                <option value="selection">Selection</option>
              </select>
              <input
                type="submit"
                id="addField-button"
                onClick={this.addDataField}
                value="+ Field"
              />
          </form>

          <br/>

          <fieldset>
            <legend>Data Fields</legend>
            {dataFields}
          </fieldset>
          <br/> */}

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
