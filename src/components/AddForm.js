import React, { Component } from "react";
import Textarea from "./pure/Textarea";
import Button from "./pure/Button";

import "./AddForm.css";
import { combineClassNames } from "../utils/classnameCombiner";

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      editableText: "",
    };

    this.buttonsText = {
      card: {
        openButtonText: "Добавить ещё одну карточку",
        addButtonText: "Добавить карточку",
      },
      column: {
        openButtonText: "Добавить ещё одну колонку",
        addButtonText: "Добавить колонку",
      },
    };

    this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
    this.onClickCloseButtonHandler = this.onClickCloseButtonHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onClickShowFormButton = this.onClickShowFormButton.bind(this);
  }

  render() {
    const addType = this.props.addType || "column";
    const buttonsText = this.buttonsText[addType];
    const { isEdit, editableText } = this.state;
    
    return (
      <div className="add_form">
        <form
          className={combineClassNames([
            "add_form__edit",
            { "add_form--close": !isEdit },
          ])}
          onSubmit={this.onSubmitEventHandler}
        >
          {this.getEditFieldByType(addType)}
          <div className="add_form__footer">
            <Button type="submit" disabled={editableText.trim() === ""}>
              {buttonsText.addButtonText}
            </Button>
            <Button icon="close" onClick={this.onClickCloseButtonHandler} />
          </div>
        </form>
        <Button
          icon="add"
          onClick={this.onClickShowFormButton}
          className={combineClassNames({
            "add_form--close": isEdit,
          })}
        >
          {buttonsText.openButtonText}
        </Button>
      </div>
    );
  }

  getEditFieldByType(type) {
    const inputTypes = {
      column: <input type="text" className="input" />,
      card: <Textarea className="add_form__textarea" />,
    };

    return React.cloneElement(inputTypes[type], {
      onChange: (e) => this.onTextChangeHandler(e),
      value: this.state.editableText,
    });
  }

  onClickCloseButtonHandler() {
    this.setState({ editableText: "", isEdit: false });
  }

  onTextChangeHandler(e) {
    this.setState({ editableText: e.target.value });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit && onSubmit(this.state.editableText);
    this.onClickCloseButtonHandler();
  }

  onClickShowFormButton() {
    this.setState({ isEdit: true });
  }
}

export default AddForm;
