import React, { Component } from 'react';

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
                  src={require("../../imgs/CustomIcons_GitHub.png")}
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
                  src={require("../../imgs/CustomIcons_LinkedIn.png")}
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
                  src={require("../../imgs/CustomIcons_gMail.png")}
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
    );
  }
}

export default Footer;
