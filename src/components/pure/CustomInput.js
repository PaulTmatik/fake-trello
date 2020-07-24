import React, { PureComponent } from "react";

import "./CustomInput.css";

class CustomInput extends PureComponent {
  render() {
    const { label, type, name, id, required, value, onChange } = this.props;
    const fixedType = /email|password/.test(type) ? type : "text";
    return (
      <div className="custom_input">
        <input
          type={fixedType}
          className="custom_input__input"
          name={name}
          id={id}
          required={required}
          value={value}
          onChange={onChange}
        />
        <label htmlFor={id} className="custom_input__label">{label}</label>
      </div>
    );
  }
}

export default CustomInput;
