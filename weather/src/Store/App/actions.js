import { v4 as uuidv4 } from "uuid";
export const ADD_USER_ACTION = "ADD_USER_ACTION";
export const SET_CURRENT_USER_ACTION = "SET_CURRENT_USER_ACTION";
export const EDIT_USER_ACTION = "EDIT_USER_ACTION";
export const UPDATE_USER_ACTION = "UPDATE_USER_ACTION";
export const DELETE_USER_ACTION = "DELETE_USER_ACTION";
export const REGISTERED_ACTION = "REGISTERED_ACTION";
export const LOG_IN_ACTION = "LOG_IN_ACTION";

export const addUserModelAction = ({name, lastName, tel, email, password}) => {

  return {
    type: ADD_USER_ACTION,
    user:{
      id: uuidv4(),
      name,
      lastName,
      tel,
      email,
      password,
    }
  }
}

export const setCurrentUserAction = (user) => {

  return {
    type: SET_CURRENT_USER_ACTION,
    user,
  }
}

export const editUserAction = (isEdit) =>{

  return{
    type: EDIT_USER_ACTION,
    isEdit,
  }
}

export const updateUserModelAction = ({name, lastName, tel, email, password, id}) => {

  return {

    type: UPDATE_USER_ACTION,
    user:{
      name,
      lastName,
      tel,
      email,
      password,
      id,
    }
  }
}
  
export const deleteUserModelAction = (id) => {

  return {
    type: DELETE_USER_ACTION,
    id,
  }
} 
  
export const setIsRegisteredAction = (isRegistered) => {

  return {
    type: REGISTERED_ACTION,
    isRegistered,
  }
} 

export const setIsLoginAction = (isLogin) => {
  
  return {
    type: LOG_IN_ACTION,
    isLogin,
  }
} 
  