import { connect } from "react-redux";
import ListOfStudents from "../components/ListOfStudents";

export const mapStateToProps = (state) => {
  return{

   list : state.list
  }
};
export default connect(mapStateToProps, null)(ListOfStudents);