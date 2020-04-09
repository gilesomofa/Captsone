import { connect } from "react-redux";
import { addStudent } from "../redux/actions";
import AddStudent from "../components/AddStudent";

export const mapDispatchToProps = (dispatch) => {
  return{

   addStudent : (list) => dispatch(addStudent(list))
  }
};
export default connect(null, mapDispatchToProps)(AddStudent);