import React from "react";
import Duties from "./Duties";

const JobInfo = ({ data, currentJob }) => {
  const { company, dates, duties, title } = data[currentJob];
  return (
    <article>
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
