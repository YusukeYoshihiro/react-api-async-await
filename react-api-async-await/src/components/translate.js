/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ text }) => {
  return(
    <React.Fragment>
       <label className="label">Output</label>
       <h1 className="title">{text}</h1>
    </React.Fragment>
  )
};
