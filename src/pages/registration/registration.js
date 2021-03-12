import React, { Fragment, useState, useEffect } from "react";
// import FormWizard from "../../widgets/form-wizard/form-wizard.js";
import StepWizard from "react-step-wizard";
import "./registration-page.scss";
import WizNav from "../../widgets/stepper-nav/stepper-nav.js";
import PersonalInfo from "../../widgets/components/personal-info/personal-info.js";

export default function Registration() {
  const data = {
    currentStep: 1,
    totalSteps: 4,
    title: [
      "Personal Details",
      "Address Details",
      "Payment Details",
      "Security Setup",
    ],
  };
  
  const Second = (props) => {
    

    return <div>I've added validation to the previous button.</div>;
  };
  return (
    <div className="reg-form-container">
      <div className="wiz-container">
        <div className="wiz-nav">
          <WizNav {...data} />
        </div>
        <div className="wiz-body">
          <StepWizard>
            <PersonalInfo />
            <Second />
          </StepWizard>
        </div>
      </div>
      <div className="wiz-title">
        <span className="wiz-title-text">
          <br />
          <h1>
            Your Peronal<br></br>
            Details
          </h1>
          Enter besic details<br></br> about your self.
        </span>
      </div>
    </div>
  );
}
