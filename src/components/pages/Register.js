import React, { Component } from "react";

import CustomInput from "../pure/CustomInput";
import Button from "../pure/Button";

import { connect } from "react-redux";
import { createUserAction, loginUserAction } from "../../store/auth";

import { Redirect, Link } from "react-router-dom";

import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_password: "",
      user_name: "",

      home_redirect: false,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  render() {
    if (this.state.home_redirect)
      return (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      );
    return (
      <div className="register">
        <header className="auth__head">
          <h1 className="auth__header">Регистрация пользователя</h1>
          <Link to="/login" className="auth__link">Авторизация пользователя</Link>
        </header>
        <form className="auth__form" onSubmit={this.onSubmitHandler}>
          <CustomInput
            label="Имя"
            type="text"
            name="user_name"
            id="register_name_input"
            value={this.state.user_name}
            required
            onChange={this.onChangeHandler}
          />

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

          <Button type="submit" className="button--column_area">
            Зарегистрироваться
          </Button>
        </form>
      </div>
    );
  }

  onChangeHandler(e) {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { createUser, loginUser } = this.props;
    const { user_email, user_password, user_name } = this.state;
    createUser && createUser(user_name, user_email, user_password);
    loginUser && loginUser(user_email, user_password);
    this.setState({
      user_email: "",
      user_password: "",
      user_name: "",
      home_redirect: true,
    });
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (name, email, password) =>
    dispatch(createUserAction(name, email, password)),
  loginUser: (email, password) => dispatch(loginUserAction(email, password)),
});

export default connect(null, mapDispatchToProps)(Register);
