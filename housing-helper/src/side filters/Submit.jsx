import React, { useState, useEffect } from "react";

const Submit = ({ rankingArray }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const checkSubmission = () => {
    if (rankingArray.includes(null)) {
      setErrorMessage("Please fill out each region");
    }
  };

  const handleSubmit = () => {
    true;
    true;
  };

  return (
    <>
      <div className="button-container">Submit</div>
      {errorMessage && <div>SUBMISSION FAILED</div>}
      {!rankingArray.includes(null) && <div>{rankingArray}</div>}
    </>
  );
};

export default Submit;
