import React, { Component } from 'react'

import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer id="Footer">
        <ul id="Social-Links">
          <li>
            <div className="Social-Icon">
              <a href="#">
                <img src="http://via.placeholder.com/50/fff/000?text=X"/>
              </a>
            </div>
          </li>
          <li>
            <div className="Social-Icon">
              <a href="#">
                <img src="http://via.placeholder.com/50/fff/000?text=X"/>
              </a>
            </div>
          </li>
          <li>
            <div className="Social-Icon">
              <a href="#">
                <img src="http://via.placeholder.com/50/fff/000?text=X"/>
              </a>
            </div>
          </li>
        </ul>
        <div id="copyright">
          <p>© Kalin Ramsey 2020. All rights reserved.</p>
        </div>
      </footer>
    )
  }
}

export default Footer
