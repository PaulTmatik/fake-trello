import React, { Component } from "react";
import { connect } from "react-redux";

import { addColumnAction } from "../store/dashboard";

import "./Dashboard";
import AddForm from "./AddForm";
import Column from "./Column";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
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
    const { dashboard } = this.props;
    return dashboard.map((column) => (
      <Column key={column.name} name={column.name} />
    ));
  }

  onSubmitHandler(columnName) {
    const { addColumn } = this.props;
    addColumn && addColumn(columnName);
  }
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboardReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addColumn: (name) => dispatch(addColumnAction(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
