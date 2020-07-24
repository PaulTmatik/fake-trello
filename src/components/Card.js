import React, { Component } from "react";
import { connect } from "react-redux";

import Modal from "./Modal";
import EditableText from "./EditableText";

import { editCardNameAction } from "../store/dashboard";

import { combineClassNames } from "../utils/classnameCombiner";

import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      cardName: props.children,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
    this.onEditTextHandler = this.onEditTextHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
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
            <EditableText
              value={this.state.cardName}
              onChange={this.onEditTextHandler}
              onBlur={this.onChangeHandler}
            />
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

  onEditTextHandler(e) {
    this.setState({ cardName: e.target.value });
  }

  onChangeHandler(e) {
    const { editCardName, columnId, cardId, children } = this.props;
    if (e.target.value === "") this.setState({ cardName: children });
    editCardName && editCardName(columnId, cardId, e.target.value);
  }
}

const mapDispatchToProps = (dispatch) => ({
  editCardName: (columnId, cardId, name) =>
    dispatch(editCardNameAction(columnId, cardId, name)),
});

export default connect(null, mapDispatchToProps)(Card);
