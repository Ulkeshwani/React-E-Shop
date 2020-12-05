//user actions
import { UserActionType } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionType.SET_CURRENT_USER, //action
  payload: user, //setState
});
