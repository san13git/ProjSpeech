import React from 'react';
import './LetsWork.css';

const LetsWork = () => {
  return (
    <div className="lets-work-container">
      <h1>How SpeechSteps Works</h1>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h2>Sign Up</h2>
            <p>Create your account to start using our various services.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h2>Fill a Short Form</h2>
            <p>Enter your details such as symptoms to see a therapist instantly.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h2>Get Matched</h2>
            <p>We match you with a perfect therapist as per your needs.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h2>Get Your Therapy Plan</h2>
            <p>We provide the plan created by your therapist which is easy to understand.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h2>Rate Your Experience</h2>
            <p>Rate your experience with us and help us improve our services.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsWork;
