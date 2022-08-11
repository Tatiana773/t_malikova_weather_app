import {
    ADD_USER_ACTION,
    SET_CURRENT_USER_ACTION,
    EDIT_USER_ACTION,
    UPDATE_USER_ACTION,
    DELETE_USER_ACTION,
    REGISTERED_ACTION,
    LOG_IN_ACTION,
  } from "./actions";

const initialState = {
    isRegistered: false,
    isLogin:false,
    isEdit: false,
    users: [],
    currentUser: {},
    
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER_ACTION: return{
        ...state,
        users: [...state.users, action.user],
      }
      case SET_CURRENT_USER_ACTION: return{
        ...state,
        currentUser: action.user,
      }
      case EDIT_USER_ACTION: return {...state, isEdit: action.isEdit}
      case UPDATE_USER_ACTION: return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.user.id){
            return action.user;
          }
          return user;
        }),
        currentUser: action.user,
        isEdit: false,
      };

      case DELETE_USER_ACTION: return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id)};
        
      case REGISTERED_ACTION:
        return {
          ...state,
          isRegistered: action.isRegistered
        }
      case LOG_IN_ACTION:
        return {
          ...state,
          isLogin: action.isLogin
        }
      
      default:
        return state;
    }
    
}
