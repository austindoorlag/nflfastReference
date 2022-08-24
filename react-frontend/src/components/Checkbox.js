import React from "react";



const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check" style={{display: 'inline'}}>
    <label style={{display: 'inline'}}>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      /> {label}
    </label>
	&nbsp;
  </div>
);

export default Checkbox;