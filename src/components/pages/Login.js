import React, { Component } from "react";

import "./Register.css";
import CustomInput from "../pure/CustomInput";
import Button from "../pure/Button";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_password: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  render() {
    return (
      <div className="register">
        <header className="auth__head">
          <h1 className="auth__header">Авторизация пользователя</h1>
        </header>
        <form className="auth__form">
          <CustomInput
            label="Емайл"
            type="email"
            name="user_email"
            id="register_email_input"
            value={this.state.user_email}
            required
            onChange={this.onChangeHandler}
          />

          <CustomInput
            label="Пароль"
            type="password"
            name="user_password"
            id="register_password_input"
            value={this.state.user_password}
            required
            onChange={this.onChangeHandler}
          />

          <Button className="button--column_area">Авторизироваться</Button>
        </form>
      </div>
    );
  }

  onChangeHandler(e) {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }
}

export default Login;
