// here is where my functions for addListing, deleteListing, listUser
export const addStudent = listing=> {
    return {
      type: "ADD_STUDENT",
      value: listing
    };
  };
  export const deleteStudent = index => {
    return {
      type: "DELETE_STUDENT",
      value: index
    };
  };