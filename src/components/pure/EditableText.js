import React, { Component } from "react";
import { combineClassNames } from "../../utils/classnameCombiner";

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
        <textarea
          className="editable_text__text"
          aria-label={value}
          value={this.state.content}
          onChange={this.textOnChangeHandler}
          onKeyUp={this.textOnKeyUpHandler}
        ></textarea>
      </div>
    );
  }

  textOnChangeHandler(e) {
    const { onChange } = this.props;
    onChange && onChange(e);
  }

  textOnKeyUpHandler(e) {
    e.target.style.height = "auto";
    if (e.target.scrollHeight > e.target.clientHeight) {
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  }
}

export default EditableText;