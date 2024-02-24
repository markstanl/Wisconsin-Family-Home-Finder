import React, { useState, useEffect } from "react";

const Submit = ({ rankingArray }) => {
  const [failed, setFailed] = useState(false);

  return (
    <>
      <div className="button-container">Submit</div>
      {failed && <div>SUBMISSION FAILED</div>}
      {!rankingArray.includes(null) && <div>{rankingArray}</div>}
    </>
  );
};

export default Submit;
