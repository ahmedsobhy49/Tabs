import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const Duties = ({ duties }) => {
  return (
    <>
      {duties.map((dute, index) => {
        return (
          <div className="job-desc" key={index}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{dute}</p>
          </div>
        );
      })}
    </>
  );
};

export default Duties;
