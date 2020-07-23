import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const root = document.querySelector("#root");

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalArea = document.createElement("div");
    this.modalArea.classList.add("modal__wrapper");

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    this.modalArea.addEventListener("click", this.onClickHandler);
    root.appendChild(this.modalArea);
  }

  componentWillUnmount() {
    this.modalArea.removeEventListener("click", this.onClickHandler);
    root.removeChild(this.modalArea);
  }

  render() {
    const { isOpen } = this.props;

    if (isOpen) this.modalArea.classList.remove("modal--hide");
    else this.modalArea.classList.add("modal--hide");

    return ReactDOM.createPortal(
      this.renderWindow(this.props.children),
      this.modalArea
    );
  }

  renderWindow(children) {
    return <div className="modal" role="dialog">{children}</div>;
  }

  onClickHandler(e) {
    const { onClose } = this.props;
    if (e.target.classList.contains("modal__wrapper"))
      onClose && onClose();
  }
}

export default Modal;
