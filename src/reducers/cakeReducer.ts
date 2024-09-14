import { CAKE_ORDERED, CAKE_RESTOCK, ICE_CREAM_ORDER, ICE_CREAM_RESTOCK } from "@/actions/cakeOrderAction";

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 10,
};

const cakeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case CAKE_RESTOCK:
      return { ...state, numOfCakes: state.numOfCakes + 1 };
    case ICE_CREAM_ORDER:
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
    case ICE_CREAM_RESTOCK:
      return { ...state, numOfIceCreams: state.numOfIceCreams + 1 };
    default:
      return state;
  }
};

export default cakeReducer;
