const initialState = {
    userProfile: null
  };
  
  function authReducerReducer(state = initialState, action) {
    switch (action.type) {
      case "UPDATE_USER":
        return { ...state, userProfile:action.payload };
      case "DELETE_USER":
      default:
        return state;
    }
  }
  
  export default authReducerReducer;