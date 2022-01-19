const initialState = {
  count: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addUser':
      return {
        ...state,
      };
    case 'getUser':
      return [...state];
    default:
      return state;
  }
};
export default counterReducer;
