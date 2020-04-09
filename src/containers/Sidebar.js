import { connect } from "react-redux";
import { addStudent } from "../redux/actions";
import Sidebar from "../components/Sidebar";

export const mapDispatchToProps = (dispatch) => {
  return{
//in this following line the left represents what is referended in props
//the right side references what's inside the actions
//Dispatch allows function given to props the access to the redux actions in order to mutate the state
   addStudent : (listing) => dispatch(addStudent(listing))
  }
};
export default connect(null, mapDispatchToProps)(Sidebar);