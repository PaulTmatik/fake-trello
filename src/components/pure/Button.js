import React, { PureComponent } from "react";
import Icon from "./Icon";

import { combineClassNames } from "../../utils/classnameCombiner";

import "./Button.css";

export default class Button extends PureComponent {
  render() {
    const { children, icon, className, type } = this.props;
    return (
      <button className={combineClassNames("button", className)} type={type || "button"}>
        {this.renderWithIcon(icon, children)}
      </button>
    );
  }

  renderWithIcon(iconName, content) {
    return (
      <>
        {iconName && <Icon name={iconName} className="button__icon" />}
        {content ? iconName ? <span>{content}</span> : content : null}
      </>
    );
  }
}
