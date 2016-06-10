const defaultState = {
  savingError: null,
  invitation_error: null,
  login_error: null,
  registerError: null,
  passwordError: null,
  resetPasswordError: null,
};

function errorReducer(state = defaultState, action) {
  switch (action.type) {

    case 'SET_SAVING_ERROR':
      return Object.assign({}, state, { savingError: action.message });

    case 'SET_INVITATION_ERROR':
      return Object.assign({}, state, { invitationError: action.message });

    case 'SET_LOGIN_ERROR':
      return Object.assign({}, state, { loginError: action.message });

    case 'SET_REGISTER_ERROR':
      return Object.assign({}, state, { registerError: action.message });

    case 'SET_PASSWORD_ERROR':
      return Object.assign({}, state, { passwordError: action.message });

    case 'SET_RESET_PASSWORD_ERROR':
      return Object.assign({}, state, { resetPasswordError: action.message });

    default:
      return state;
  }
}

export default errorReducer;