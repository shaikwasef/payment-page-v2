import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
export const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUESTED,
  };
}

export function fetchUsersSuccess(users: any) {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
}

export function fetchUsersError(error: any) {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
}

export const fetchUsers = () => {
  return function (dispatch: any) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const { data } = response;
        const ids = data.map((u: any) => u.id);
        dispatch(fetchUsersSuccess(ids));
      })
      .catch((e) => {
        dispatch(fetchUsersError(e.message));
      });
  };
};
