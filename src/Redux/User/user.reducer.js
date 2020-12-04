const INITIAL_STATE = {
  currentUser: null,
};

//Here if currentState is Null ..then the INITIAL_STATE will be assigned to current State

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...currentState, //someting else
        //it sets current user value from the payload
        currentUser: action.payload,
      };

    default:
      return currentState;
  }
};

export default userReducer;
