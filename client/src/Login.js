import React, {PropTypes} from 'react';

export default class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <label for='password'>password</label>
        <input id='password' type='password' />
        <hr />
        <label for='username'>username</label>
        <input id='username' type='username' />
      </div>
    );
  }
}

Login.propTypes = {
};
