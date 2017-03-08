import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../actions/login';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
  render() {
    const { login } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm  login= { login }/>
        </div>
      </div>
    );
  }
}
LoginForm.contextTypes={
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login }) (LoginPage);