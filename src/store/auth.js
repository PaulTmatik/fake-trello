const CREATE_USER = "trello-clone/auth/CREATE_USER";
const LOGIN_USER = "trello-clone/auth/LOGIN_USER";
const LOGOUT_USER = "trello-clont/auth/LOGOUT_USER";

export const createUserAction = (name, email, password) => ({
  type: CREATE_USER,
  name,
  email,
  password,
});

export const loginUserAction = (email, password) => ({
  type: LOGIN_USER,
  email,
  password,
});

export const logoutUserAction = () => ({
  type: LOGOUT_USER,
});

export const authReducer = (state = { authuser: {}, users: [] }, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return {
        ...state,
        authuser: {},
      };
    case LOGIN_USER:
      const stateCopy = { ...state };
      const userIndex = stateCopy.users.findIndex(
        (user) =>
          user.email === action.email && user.password === action.password
      );
      const user = { ...stateCopy.users[userIndex] };
      delete user["password"];
      return {
        ...state,
        authuser: user,
      };

    case CREATE_USER:
      return {
        ...state,
        users: [
          ...state.users,
          { email: action.email, name: action.name, password: action.password },
        ],
      };
    default:
      return state;
  }
};
