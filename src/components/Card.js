import React, { Component } from "react";

import "./Card.css";
import { combineClassNames } from "../utils/classnameCombiner";
import Modal from "./Modal";
import EditableText from "./EditableText";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
  }
  render() {
    const { children, className } = this.props;

    return (
      <div className={combineClassNames("card", className)}>
        <div className="card__body">
          <button className="card__button" onClick={this.onClickHandler}>
            {children}
          </button>
        </div>
        <Modal isOpen={this.state.isOpenModal} onClose={this.onCloseHandler}>
          <div className="card__info_heading">
            <EditableText value={children}/>
          </div>
        </Modal>
      </div>
    );
  }

  onClickHandler(e) {
    this.setState({ isOpenModal: true });
  }

  onCloseHandler() {
    this.setState({ isOpenModal: false });
  }
}

export default Card;
