import React, { Component } from "react";
import { combineClassNames } from "../utils/classnameCombiner";
import Textarea from "./pure/Textarea";

class EditableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };

    this.textOnChangeHandler = this.textOnChangeHandler.bind(this);
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
          className="editable_text__text"
          aria-label={this.state.content}
          value={this.state.content}
          onChange={this.textOnChangeHandler}
        />
      </div>
    );
  }

  textOnChangeHandler(e) {
    const { onChange } = this.props;
    onChange && onChange(e);
  }
}

export default EditableText;
