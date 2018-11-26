import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(login(userData))
});

class AppLogIn extends React.Component {
  //static typescript()
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault(); //default prevent get method action: url=/?,
    //so not to reload the page in server
    const { username, password } = this.state;
    if (username && password) {
      this.props.login({ username, password });
      this.setState({ username: '', password: '' });
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="row container">
        <div
          className="container col-lg-6 col-lg-offset-6 col-md-8 
          col-md-offset-4 col-sm-8 col-sm-offset-4 login"
        >
          <h2>please login!</h2>
          <hr />
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username*</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password*</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-lg btn-success btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AppLogIn);
