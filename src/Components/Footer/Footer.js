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
                  className="social-img"
                  src="https://drive.google.com/thumbnail?id=1G_P7_pqm_IyfZUa2J6vpcu1U_-qFGVby"
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
                  className="social-img"
                  src="https://drive.google.com/thumbnail?id=1NSgJNRt33WLoY2yTY0FCcxiFFFtS8ETy"
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
                  className="social-img"
                  src="https://drive.google.com/thumbnail?id=1hvJRn4mWx7L_FeTzPZksQMMAmVwuQrpj"
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
