import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './BestiaryCard.css';
import Context from '../../../../../Context';

export class BestiaryFolder extends Component {
  static contextType = Context;

  static defaultProps = {
    bestiary: {}
  }
  
  countData = bestiaryId => {
    let count = 0;
    this.context.data.forEach(d =>{
      if (d.bestiary_id === bestiaryId){
        count++;
      }
    });
    return count;
  }

  render() {
    const bestiary = this.props.bestiary;
    
    return (
      <div className="Bestiary-Card">
        <div className="Bestiary-Card-Header">
          <h5 className="heading-text">{bestiary.bestiary_name}</h5>
          <div className="Bestiary-Data-Count">
            <h4 className="count-text">Count:</h4>
            <h4>({this.countData(bestiary.id)})</h4>
          </div>
        </div>
        <div className="Bestiary-Card-Inner">
          <p>{bestiary.bestiary_description}</p>
          <ul className="Bestiary-Settings">
            <li>
              <Link
                to={`/users/${this.context.user.id}/bestiaries/${bestiary.id}`}
                onClick={() => this.context.setActiveBestiaryID(bestiary.id)}
              >
                <button
                  className="btn"
                >
                  Edit
                </button>
              </Link>
              
            </li>
            <li>
              <button
                className="btn"
                onClick={() => this.context.deleteBestiary(bestiary.id)}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
        
      </div>
    );
  }
}

export default BestiaryFolder;
