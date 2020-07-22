import React, { PureComponent } from "react";

export default class Textarea extends PureComponent {
  render() {
    return (
      <textarea
        {...this.props}
        onKeyUp={this.textOnKeyUpHandler}
      ></textarea>
    );
  }

  textOnKeyUpHandler(e) {
    e.target.style.height = "auto";
    if (e.target.scrollHeight > e.target.clientHeight) {
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  }
}
