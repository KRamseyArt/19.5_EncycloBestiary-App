import React, { Component } from 'react'

import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer id="Footer">
        <ul id="Social-Links">
          <li>
            <div className="Social-Icon">
              <a
                href="https://github.com/KRamseyArt"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="http://via.placeholder.com/50/fff/000?text=X"
                  alt="Github Link"
                />
              </a>
            </div>
          </li>
          <li>
            <div className="Social-Icon">
              <a
                href="https://www.linkedin.com/in/kalinramsey/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="http://via.placeholder.com/50/fff/000?text=X"
                  alt="LinkedIn Link"  
                />
              </a>
            </div>
          </li>
          <li>
            <div className="Social-Icon">
              <a
                href="mailto:kalinramsey@gmail.com?subject=About Encyclo•Bestiary"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="http://via.placeholder.com/50/fff/000?text=X"
                  alt="Email Link"  
                />
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
