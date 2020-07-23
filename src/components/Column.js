import React, {Component} from 'react';
import AddForm from './AddForm';

import "./Column.css";

class Column extends Component {
  render() {
    return <div className="column">
      <AddForm addType="card" className="column__add_card"/>
    </div>
  }
}

export default Column;