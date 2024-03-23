import { useEffect, useRef, useState } from "react";
import { checkOutSteps } from "../../constants/constant";
import "./Stepper.css";
const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);
  const [completed, setCompletd] = useState(false);

  useEffect(() => {
    if (stepRef.current.length) {
      const marginLeft = stepRef?.current[0].offsetWidth / 2;
      const marginRight =
        stepRef.current[checkOutSteps.length - 1].offsetWidth / 2;
      console.log(stepRef.current[checkOutSteps.length - 1].offsetWidth);
      setMargin(() => ({ marginLeft, marginRight }));
    }
  }, [stepRef]);
  const handleNext = () => {
    if (activeStep < checkOutSteps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      setActiveStep((prev) => prev);
      setCompletd(true);
    }
  };
  const progressValue = (activeStep / (checkOutSteps.length - 1)) * 100;
  return (
    <>
      <div className="stepper-container-wrapper">
        {checkOutSteps.map((steps, index) => (
          <div
            className="step-container"
            key={index}
            ref={(ele) => (stepRef.current[index] = ele)}
          >
            <div className={`step-count ${activeStep > index || completed ? `done` :'pending'}`}>
              {activeStep > index || completed ? (
                <span>&#10004;</span>
              ) : (
                <span>{steps.step}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className="progress-container"
        style={{
          width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
          marginLeft: `${margin.marginLeft}px`,
          marginRight: `${margin.marginLeft}px`,
        }}
      >
        <div className="progress" style={{ width: `${progressValue}%` }}></div>
      </div>
      <div className="action-area">
        <div className="step-label">
          <h3>
            {!completed ? checkOutSteps[activeStep].label : `Order Completed`}
          </h3>
        </div>
        <div className="step-desc">
          <h5>{!completed ? checkOutSteps[activeStep].desc : ``}</h5>
        </div>
        <div className="action-button">
          <button className="btn" onClick={handleNext}>
            {!completed ? "Next" : "Finished"}
          </button>
        </div>
      </div>
    </>
  );
};
export default Stepper;
