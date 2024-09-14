import { FETCH_USERS_ERROR, FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED } from "@/actions/asyncActions";

const initialState = {
  loading: true,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCEEDED:
      return { ...state, loading: false, users: action.payload, error: "" };
    case FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};

export default userReducer;
