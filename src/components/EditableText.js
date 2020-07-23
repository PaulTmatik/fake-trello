import React, { Component } from "react";
import { combineClassNames } from "../utils/classnameCombiner";
import Textarea from "./pure/Textarea";

import "./EditableText.css";

class EditableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };

    this.textOnChangeHandler = this.textOnChangeHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.content) {
      return {
        ...state,
        content: props.value,
      };
    }

    return null;
  }

  render() {
    const { className, value } = this.props;
    return (
      <div className={combineClassNames("editable_text", className)}>
        <h2 className="editable_text__header">{value}</h2>
        <Textarea
          aria-label={this.state.content}
          className="editable_text__text"
          onChange={this.textOnChangeHandler}
          onBlur={this.onBlurHandler}
          rows="1"
          value={this.state.content}
        />
      </div>
    );
  }

  textOnChangeHandler(e) {
    const { onChange } = this.props;
    onChange && onChange(e);
  }

  onBlurHandler(e) {
    const { onBlur } = this.props;
    onBlur && onBlur(e);
  }
}

export default EditableText;
