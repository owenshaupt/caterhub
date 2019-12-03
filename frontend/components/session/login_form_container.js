import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

// handled with React Redux useSelector
// ------------------------------------
const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(login(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
