import React, { Component } from "react";

import "./Dashboard";
import AddForm from "./AddForm";
import Column from "./Column";

import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Column />
        <AddForm addType="column" className="dashboard__add_column" />
      </div>
    );
  }
}

export default Dashboard;
