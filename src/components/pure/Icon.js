import React, { PureComponent } from "react";

import "./Icon.css";
import { combineClassNames } from "../../utils/classnameCombiner";

const pathsSet = {
  add: <path d="m9 7h7v2h-7v7h-2v-7h-7v-2h7v-7h2v7z" />,
};

export default class Icon extends PureComponent {
  render() {
    const { name, className } = this.props;
    return (
      <svg
        version="1.1"
        viewBox="0 0 16 16"
        className={combineClassNames("icon", className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        {pathsSet[name]}
      </svg>
    );
  }
}
