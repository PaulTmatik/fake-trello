import React, { Component } from "react";
import { connect } from "react-redux";

import { addColumnAction, editColumnNameAction, addCardAction } from "../store/dashboard";

import "./Dashboard";
import AddForm from "./AddForm";
import Column from "./Column";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeNameHandler = this.onChangeNameHandler.bind(this);
  }
  
  render() {
    return (
      <div className="dashboard">
        {this.drawColumns()}
        <AddForm
          addType="column"
          className="dashboard__add_column"
          onSubmit={this.onSubmitHandler}
        />
      </div>
    );
  }

  drawColumns() {
    const { columns, addCard } = this.props;
    return columns.map((column) => (
      <Column
        key={column.id}
        columnId={column.id}
        name={column.name}
        cards={column.cards.values}
        onChangeName={this.onChangeNameHandler}
        addCard={addCard}
      />
    ));
  }

  onSubmitHandler(columnName) {
    const { addColumn } = this.props;
    addColumn && addColumn(columnName);
  }

  onChangeNameHandler(id, name) {
    const { editColumnName } = this.props;
    editColumnName && editColumnName(id, name);
  }
}

const mapStateToProps = (state) => ({
  columns: state.dashboardReducer.columns,
});

const mapDispatchToProps = (dispatch) => ({
  addColumn: (name) => dispatch(addColumnAction(name)),
  addCard: (columnId, cardName) => dispatch(addCardAction(columnId, cardName)),
  editColumnName: (id, name) => dispatch(editColumnNameAction(id, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
