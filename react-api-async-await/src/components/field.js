/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default ({ label, value, onChange }) => {
  return (
    <React.Fragment>
      <label>{label}</label>
      <input 
      className="input" 
      value={value} 
      onChange={onChange}
      />
    </React.Fragment>
  );
};