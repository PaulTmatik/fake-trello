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
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
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
        {this.renderCards()}
        <AddForm
          addType="card"
          className="column__add_card"
          onSubmit={this.onSubmitHandler}
        />
      </div>
    );
  }

  renderCards() {
    return this.props.cards.map((card) => (
      <Card key={card.id} className="column__card">
        {card.name}
      </Card>
    ));
  }

  onChangeHandler(e) {
    const { onChangeName, columnId, name } = this.props;
    if (e.target.value === "") this.setState({ columnName: name });
    onChangeName && onChangeName(columnId, e.target.value);
  }

  onEditTextHandler(e) {
    this.setState({ columnName: e.target.value });
  }

  onSubmitHandler(cardName) {
    const { addCard, columnId } = this.props;
    addCard && addCard(columnId, cardName);
  }
}

export default Column;
