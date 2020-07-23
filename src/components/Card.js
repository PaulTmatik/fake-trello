import React, {Component} from 'react';

import "./Card.css";
import { combineClassNames } from '../utils/classnameCombiner';

class Card extends Component {
  render() {
    const {children, className} = this.props;

    return <div className={combineClassNames("card", className)}>
      <div className="card__body">{children}</div>
    </div>
  }
}

export default Card;