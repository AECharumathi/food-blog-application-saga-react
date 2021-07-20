const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_FOODLIST':
           return { ...state, loading: true };
      case 'FOODLIST_RECEIVED':
           return { ...state, foodList: action.json, loading: false }
      default: 
           return state;
    }
   };
   export default reducer;