import React from "react";
import "./splash-page.scss";
import { useHistory } from "react-router-dom";
export default function Spash() {
    const history = useHistory();
    function navigateToRegistration() {
        history.push("/registration");
    }
  return (
    <>
      <div className="header-strip"></div>
      <div className="spash-container">
        <div className="menu-container">
          <div className="logo-container">
            <span>PS</span>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="intro">
          <span>
            <br />
            Track you expenses while
            <br /> managing your finances
          </span>
          <span>
            Lorem ipsum dolor sit amet,
            <br />
            adipiscing elit. Ac gravida
            <br />
            amet sed semper dui vel.
            <br />
            Vitae amet seddign.
            <br />
            <br />
          </span>
        </div>
        <div className="button-container">
          <button>Login</button>
          <button onClick={navigateToRegistration}>Register</button>
        </div>
      </div>
    </>
  );
}
