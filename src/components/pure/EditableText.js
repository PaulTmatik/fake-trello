import React, { PureComponent } from "react";
import { combineClassNames } from "../../utils/classnameCombiner";

class EditableText extends PureComponent {
  render() {
    const { className } = this.props;
    return <div className={combineClassNames("editable_text", className)}></div>;
  }
}

export default EditableText;
