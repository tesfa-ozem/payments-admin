import React from "react";
import styles from "./stepper-nav.scss";

const StepperNav = (props) => {
  const dots = [];
  for (let i = 1; i <= 4; i += 1) {
    const isActive = props.currentStep === i;
    console.log(props.currentStep);
    dots.push(
      < >
        <span
        key={`step-${i}`}
          className={`dot ${isActive ? "active": ""}`}
          onClick={() => props.goToStep(i)}
        >
          {`${i}  `}
        </span>
        <span
        //   key={`step-${i}`}
        className={` ${isActive ? "active-text": "dot-text"}`}
        >
            
          {props.title[i - 1]}
        </span>
        <hr></hr>
      </>
    );
  }

  return <div className="nav">{dots}</div>;
};

export default StepperNav;
