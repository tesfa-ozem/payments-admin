import React from "react";
import './form-wizard.scss'
export default function FormWizard(prop) {
  return (
    <>
      <section>
        <header>
          <ul>
            <li>
              <label className="step-icon-container"> Personal Details
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
          </ul>
        </header>
      </section>
    </>
  );
}
