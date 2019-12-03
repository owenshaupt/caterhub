import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // componentDidMount() {
  // }

  // componentWillUnmount() {
  // }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      const user = this.props.currentUser;
      return (
        <div>
          <h1>Hello, {user.first_name}!</h1>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Nobody's home...</h3>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </div>
      );
    }
  }
}

export default Greeting;
