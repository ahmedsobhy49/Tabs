import React from "react";

const ButtonsContainer = ({ data, handleCurrentJob, currentJob }) => {
  return (
    <div className="btn-container ">
      {data.map((job, index) => {
        const { company } = job;
        return (
          <button
            className={`job-btn ${index === currentJob ? "active-btn" : ""}`}
            key={company}
            onClick={() => handleCurrentJob(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonsContainer;
