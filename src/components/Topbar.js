import React, { Component } from "react";
import { connect } from "react-redux";

class Topbar extends Component {
  render() {
    return <div className="topbar">{this.renderCurrentUser()}</div>;
  }

  renderCurrentUser() {
    const { authuser } = this.props;
    return (
      authuser && (
        <div className="topbar__user">
          <div className="topbar__user_wrapper">
            <div className="topbar__username">{authuser.name}</div>
            <div className="topbar__useremail">{authuser.email}</div>
          </div>
          <button className="topbar__logout">Выход</button>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  authuser: state.authReducer.authuser,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
