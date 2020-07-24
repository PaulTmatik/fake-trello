import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import CustomInput from "../pure/CustomInput";
import Button from "../pure/Button";

import { connect } from "react-redux";
import { loginUserAction } from "../../store/auth";

import "./Register.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_password: "",

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
          <h1 className="auth__header">Авторизация пользователя</h1>
          <Link to="/register" className="auth__link">
            Регистрация пользователя
          </Link>
        </header>
        <form className="auth__form" onSubmit={this.onSubmitHandler}>
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

          <Button className="button--column_area" type="submit">
            Авторизироваться
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
    const { loginUser } = this.props;
    const { user_email, user_password } = this.state;
    loginUser && loginUser(user_email, user_password);
    this.setState({
      user_email: "",
      user_password: "",
      home_redirect: true,
    });
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email, password) => dispatch(loginUserAction(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
