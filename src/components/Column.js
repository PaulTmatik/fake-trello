import React, {Component} from 'react';
import AddForm from './AddForm';
import EditableText from './EditableText';

import "./Column.css";
import Card from './Card';

class Column extends Component {
  render() {
    const {name} = this.props;
    
    return <div className="column">
      <div className="column__titlebar">
        <EditableText className="column__editable_header" value={name} />
      </div>
      <Card className="column__card">Тест карточки</Card>
      <AddForm addType="card" className="column__add_card"/>
    </div>
  }
}

export default Column;