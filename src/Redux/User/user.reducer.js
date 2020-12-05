import { UserActionType } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

//Here if currentState is Null ..then the INITIAL_STATE will be assigned to current State

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...currentState, //someting else property
        //it sets current user value from the payload
        currentUser: action.payload,
      };

    default:
      return currentState;
  }
};

export default userReducer;
