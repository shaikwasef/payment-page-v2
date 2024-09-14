const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: { type: string; payload: number }) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + action.payload };
    case "SUBTRACT":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default counterReducer;
