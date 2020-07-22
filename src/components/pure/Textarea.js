import React, { PureComponent } from "react";
import "./Textarea.css";

export default class Textarea extends PureComponent {
  render() {
    return (
      <textarea
        {...this.props}
        onKeyUp={this.textOnKeyUpHandler}
        onKeyDown={this.textOnKeyDownHandler}
        onFocus={this.textOnFocusHandler}
      ></textarea>
    );
  }

  textOnKeyUpHandler(e) {
    e.target.style.height = "auto";
    if (e.target.scrollHeight > e.target.clientHeight) {
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  }

  textOnKeyDownHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur()
    }
  }

  textOnFocusHandler(e) {
    e.target.select();
  }
}
