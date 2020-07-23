import React, { Component } from "react";
import AddForm from "./AddForm";
import EditableText from "./EditableText";

import "./Column.css";
import Card from "./Card";

class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnName: props.name,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onEditTextHandler = this.onEditTextHandler.bind(this);
  }

  render() {
    return (
      <div className="column">
        <div className="column__titlebar">
          <EditableText
            className="column__editable_header"
            value={this.state.columnName}
            onChange={this.onEditTextHandler}
            onBlur={this.onChangeHandler}
          />
        </div>
        <Card className="column__card">Тест карточки</Card>
        <AddForm addType="card" className="column__add_card" />
      </div>
    );
  }

  onChangeHandler(e) {
    const { onChangeName, columnId, name } = this.props;
    if (e.target.value === "") this.setState({ columnName: name });
    onChangeName && onChangeName(columnId, e.target.value);
  }

  onEditTextHandler(e) {
    this.setState({ columnName: e.target.value });
  }
}

export default Column;
