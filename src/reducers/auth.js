// {type:'logged', payload:{name:Rayan, role:'seller'}}
const authReducer = (state={}, action) => {
    switch(action.type){
      case "Logged_in-user":
        return{...state, ...action.payload};
      case "Logout":
        return action.payload;
      default:
        return state;
    }
};

