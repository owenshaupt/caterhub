import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./login_form";

const mapStateToProps = state => ({
  formType: "signup",
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  processForm: userData => dispatch(signup(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
