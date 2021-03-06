import Edit from '../../components/users/form.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import { connect } from 'react-redux'
import { push } from 'react-router-redux';

import {singleComposer} from './single.js';

export const editComposer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections, Store} = context();

  const path = Store.getState().routing.locationBeforeTransitions.pathname;
  const _id = path.substr(path.lastIndexOf('/') + 1);

  if (Meteor.subscribe('users.single', _id).ready()) {
    const user = Meteor.users.findOne(_id);
    onData(null, {...user.profile, user});
  }

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  submitAction: actions.users.update,
  clearErrors: actions.users.clearUserErrors,
  context: () => context
});

const mapStateToProps = (state) => {
  return {
    i18n: state.i18n,
    error: state.error.usersSavingError,
  }
};

export default composeAll(
  connect(mapStateToProps),
  composeWithTracker(singleComposer),
  composeWithTracker(editComposer),
  useDeps(depsMapper)
)(Edit);
